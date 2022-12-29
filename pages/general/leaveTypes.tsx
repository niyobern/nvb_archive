import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import NiceTable from '../../components/nice_table';
import ListItem from '../../components/lists';
import picture from '../../public/images/picture.webp'

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const leavetypes = await axios.get(`${baseUrl}/general/leave/types`, {headers: {"Authorization": token}})
    return json({data: leavetypes.data})
  },
  async post({req: { body }}){
    console.log(body)
    return json({message: "succesfully received"})
  }
});

export default function LeaveTypes({ data }: any) {
    const form = useFormSubmit()
    if (form.isSuccess){
        console.log("done")
    }
    console.log(data)
    const mockData = [{name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: picture}
]
return (
    <Layout>
        <ListItem items={mockData}/>
    </Layout>
)

}