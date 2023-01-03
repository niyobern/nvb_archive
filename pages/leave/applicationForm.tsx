import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import LeaveApply from '../../components/leaveapplication';

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

export default function ManageEmployees({ data }: any) {

    const mockData = ["user", "reason", "leave_type", "from_day", "until_day"]
    const fieldnames = ["Email adress", "Reason", "Desired Leave Type", "Starting Date of Leave", "End Date"]
return (
    <LeaveApply fields={mockData} fieldnames={fieldnames}/>
)

}