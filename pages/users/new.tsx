import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import GridItems from '../../components/ItemsGrid';
import { useState } from 'react';
import DataGrid from '../../components/DataGrid';
import EmployeeGrid from '../../components/EmployeeGrid';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/users/new`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({...data})
  }, async post({ cookies, req: {body} }){
    const token = cookies.get("token")
    const role = cookies.get("role")
    if (role == "hr"){
      if (body.head == "true"){
        const fetch = await axios.patch(`${baseUrl}/users`, {"id": body.id, "user_id": body.user_id, "salary": body.position, "position": body.position, "department": body.department, "head": true}, {headers: {"Authorization": token}})
        const data = fetch.data
        return json({...data})
      } else {
        const fetch = await axios.patch(`${baseUrl}/users`, {"id": body.id, "user_id": body.user_id, "salary": body.position, "position": body.position, "department": body.department, "head": false})
        const data = fetch.data
        return json({...data})
      }
    } else {
      const fetch = await axios.post(`${baseUrl}/users`, JSON.stringify(body), {headers: {"Authorization": token}})
      const data = fetch.data
      return json({...data})
    }
  }
});

export default function NewEmployees({ links, paths }: any) {
    const fields = [{value: "name", type: "text"}, {value: "email", type: "email"}, {value: "phone", type: "tel"}, {value: "qualification", type: "text"},
  {value: "birth_district", type: "text"}, {value: "birth_sector"}, {value: "birth_cell", type: "text"}, {value: "birth_village", type: "text"},
  {value: "home_district", type: "text"}, {value: "home_sector", type: "text"}, {value: "home_cell", type: "text"}, {value: "home_village", type: "text"},
  {value: "father", type: "text"}, {value: "mother", type: "text"}, {value: "salary", type: "number"}, {value: "position", type: "text"}, {value: "type", type: "text"},
  {value: "department", type: "text"}, {value: "user_id", type: "number"}, {value: "id", type: "number"}]
  const fieldnames = ["Full Names", "Email Adress", "Phone Number", "Highest qualification", "District of Birth", "Sector of Birth", "Cell of Birth", "Village of Birth","Father's Name", "Mother's name", "Salary", "Position", "Type", "Department", "User Id", "Employee Id"]
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
    const [leader, setLeader] = useState(false)
    const sidepaths = ["/users", "/users/new"]
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
      axios.get('/', {headers: {"accept": "application/json"}})
      .then(res => {
        if (res.data.role == "hr" || res.data.role.slice(0, 4) == "head"){
          setLeader(true)
        } 
      })
    }, [form]);
    function handleShow(){
      setShow(false)
    }
return (
    <Layout links={links} paths={paths} current="home" sidelinks={sidelinks} sidepaths={sidepaths}>
      {leader? <EmployeeGrid items={data} fields={leader? fields: fields.slice(0, 9)} fieldnames={leader? fieldnames: fieldnames.slice(0, 9)} formResponse={formResponse} showPop={show} close={handleShow}/>: <DataGrid items={data} fields={leader? fields: fields.slice(0, 9)} fieldnames={leader? fieldnames: fieldnames.slice(0, 9)} formResponse={formResponse} showPop={show} close={handleShow}/>}
    </Layout>
)

}