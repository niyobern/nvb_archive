import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import GridItems from '../../components/ItemsGrid';
import { useState } from 'react';
import Table from '../../components/table';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const userid = cookies.get("userid")
    if (!token){
      return redirect("/")
    }
    const role = cookies.get("role")
    if (role == "hr"){
      const leavetypes = await axios.get(`${baseUrl}/users`, {headers: {"Authorization": token}})
      const data = leavetypes.data
      return json({...data})
    } else {
      const user = await axios.get(`${baseUrl}/users/${userid}`, {headers: {"Authorization": token}})
      const data = user.data
      return json({...data})
    }
  }
});

export default function Employees({ links, paths }: any) {
    const sidelinks = ["User", "New"]
    const sidepaths = ["/users", "/users/new"]
    const fields = [{value: "Null", type: "hidden"}]
    const fieldnames = [""]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const filednames = ["Full Names", "Email Adress", "Phone Number", "Highest qualification", "District of Birth", "Sector of Birth", "Cell of Birth", "Village of Birth","Father's Name", "Mother's name", "Salary", "Position", "Type", "Department", "User Id", "Employee Id"]
    useEffect(() => {
      if (data.length > 0 && form.isError){
        setFormResponse("There was an error and the data was not added")
        setShow(true)
      };
      if (data.length > 0 && form.isSuccess){
        setFormResponse(form.data.message)
        setShow(true)
      }
      axios.get('', {headers: {"Accept": "application/json"}})
      .then( res => {
        setData(res.data.data)
      }).catch(err => {
      })
    }, [form]);
    function handleShow(){
      setShow(false)
    }
return (
    <Layout links={links} paths={paths} current="home" sidelinks={sidelinks} sidepaths={sidepaths}>
        <Table items={data} titles={fieldnames} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/>
    </Layout>
)

}