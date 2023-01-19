import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import { useState } from 'react';
import LeaveAdmin from '../../components/LeaveAdmin';
import DataGrid from '../../components/DataGrid';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const role = cookies.get("role")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/leave/requests`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({...data})
  },
  async post({ cookies , req: {body}}) {
    const token = cookies.get("token")
    const role = cookies.get("role")
    if (role == "hr"){
      const fetch = await axios.post(`${baseUrl}/leave/${body.accept}`, {"id": body.id, "feedback": body.feedback}, {headers: {"Authorization": token}})
      const data = fetch.data
      return {...data}
    }
    const fetch = await axios.post(`${baseUrl}/leave/requests`, {"type": body.type, "start": body.start, "end": body.end, "reason": body.end}, {headers: {"Authorization": token}})
    const data = fetch.data
    return {...data}
  }
});

export default function Employees({ links, paths }: any) {
    const sidelinks = ["Leaves", "Requests", "Denied"]
    const sidepaths = ["/leave", "/leave/requests", "/leave/denied"]
    const fields = [{value: "type", type: "text"}, {value: "start", type: "text"}, {value: "end", type: "text"}, {value: "reason", type: "text"}]
    const fieldnames = ["Type", "Start", "End", "Reason"]
    const fields2 = [{value: "id", type: "number"}, {value: "feedback", type: "text"}]
    const fieldnames2 = ["Id", "Feedback"]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const [leader, setLeader] = useState(false)
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
      axios.get('/role', {headers: {"accept": "application/json"}})
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
    <Layout links={links} paths={paths} sidelinks={sidelinks} sidepaths={sidepaths} current="home">
      {!leader? <DataGrid items={data} fields={leader? fields2: fields} fieldnames={leader? fieldnames2: fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/> : <LeaveAdmin items={data} fields={leader? fields2: fields} fieldnames={leader? fieldnames2: fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/>}
    </Layout>
)

}