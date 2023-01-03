import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import picture from '../../public/images/picture.webp'
import Table from '../../components/table';
import NiceTable from '../../components/nice_table';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const leavetypes = await axios.get(`${baseUrl}/general/academic/ranks`, {headers: {"Authorization": token}})
    console.log(leavetypes.data)
    return json({data: leavetypes.data})
  },
  async post({req: { body }, cookies}){
    const token  = cookies.get('token')
    const result = await axios.post(`${baseUrl}/general/academic/ranks`, body, {headers: {"Authorization": token}})
    const data = result.data
    return json({message: data})
  }
});

export default function AcademicRanks({ data }: any) {

    const items = ["Academic Ranks", "Contract Types", "Leave Types", "Probation Results", "Staff Departments", "Staff Doc Types", "Staff Placements", "Staff Position", "Staff Promotion", "Staff Types", "Workload"]
    const links = ["/administration/feeStructure", "/administration/paymentContacts", "/administration/paymentPlans", "/administration/serviceCodes"]
    const form = useFormSubmit()
    const mockData = [{code: "No Data", name: "No Data", description: "No Data"}]
return (
    <Layout items={items} links={links}>
        <NiceTable items={data ? data : mockData}/>
    </Layout>
)

}