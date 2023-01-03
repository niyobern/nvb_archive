import { handle, json } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import GridItems from '../../components/ItemsGrid';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const leavetypes = await axios.get(`${baseUrl}/payments/done`, {headers: {"Authorization": token}})
    console.log(leavetypes.data)
    return json({data: leavetypes.data})
  },
  async post({req: { body }, cookies}){
    const token  = cookies.get('token')
    const result = await axios.post(`${baseUrl}/payments/done`, body, {headers: {"Authorization": token}})
    const data = result.data
    return json({message: data})
  }
});

export default function CompletedPayments({ data }: any) {
    const items = ["Completed Payments", "Pending Payments", "Partial Payments"]
    const links = ["/payments/completedPayments", "/payments/pendingPayments", "/payments/partialpayments"]
    const mockData = [{code: "No Data", name: "No Data", description: "No Data"}]
return (
    <Layout items={items} links={links}>
        <GridItems items={data ? data : mockData}/>
    </Layout>
)

}