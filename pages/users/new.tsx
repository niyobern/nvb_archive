import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import GridItems from '../../components/ItemsGrid';
import { useState } from 'react';
import DataGrid from '../../components/DataGrid';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/users/new`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({...data})
  }
});

export default function NewEmployees({ links, paths }: any) {
    const fields = [{value: "name", type: "text"}, {value: "email", type: "email"}, {value: "phone", type: "tel"}]
    // name : str
    // email : str
    // phone : str
    // qualification : str
    // birth_district : str
    // birth_sector : str
    // birth_cell : str
    // birth_village : str
    // home_district : str
    // home_sector : str
    // home_cell : str
    // home_village : str
    // father : str
    // mother : str
    // salary : Optional[float]
    // position : Optional[str]
    // deleted : Optional[str]
    // type : Optional[str]
    // department: Optional[str]
    // head: Optional[bool]
    const sidelinks = ["User", "New"]
    const sidepaths = ["/users", "/users/new"]
    const fieldnames = ["Full Name", "Email Adress", "Phone Number"]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
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
        <DataGrid items={data} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/>
    </Layout>
)

}