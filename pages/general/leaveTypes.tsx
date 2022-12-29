import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import NiceTable from '../../components/nice_table';
import ListItem from '../../components/lists';

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
    const mockData = [{name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Nernard Niyomugabo", value1: "Software Developer", value2: "Full Time", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
]
return (
    <Layout>
        <ListItem items={mockData}/>
    </Layout>
)

}