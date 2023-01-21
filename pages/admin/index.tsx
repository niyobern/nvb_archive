import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import { useState } from 'react';
import DocumentDisplay from '../../components/DocumentDisplay';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/admin/documents`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({data: data})
  },
  async post({ cookies, req: {body} }){
    const token: any = cookies.get("token")
    const role = cookies.get("role")
    if (role == "hr"){
      const fetch = await axios.get(`${baseUrl}/admin/documents/services/${body.id}`, {headers: {"Authorization": token}})
      const data = fetch.data
      return json({...data})
    } else {
      const fetch = await axios.post(`${baseUrl}/admin/documents`, {"document": body.document}, {headers: {"Authorization": token}})
      const data = fetch.data
      return json({...data})
    }
  }
});

export default function Employees({ links, paths }: any) {
    const fields = [{value: "document", type: "text"}]
    const fieldnames = ["Document"]
    const fields2 = [{value: "id", type: "text"}]
    const fieldnames2 = ["Id"]
    const [leader, setLeader] = useState(false)
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])

    useEffect(() => {
      if (form.isError){
        setFormResponse("There was an error and the data was not added")
        setShow(true)
      };
      if (form.isSuccess){
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
        const role = res.data.role
        if (role == "hr"){
          setLeader(true)
        } 
      })
    }, [form]);
    function handleShow(){
      setShow(false)
    }
return (
    <Layout links={links} paths={paths} sidelinks={links} sidepaths={paths} current="home">
        <DocumentDisplay items={data} fields={leader? fields2: fields} fieldnames={leader? fieldnames2: fieldnames} formResponse={formResponse} showPop={show} close={handleShow} leader={leader}/>
    </Layout>
)

}