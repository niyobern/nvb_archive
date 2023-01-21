import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import Card from '../../components/card';
import { useState } from 'react';
import Table from '../../components/table';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    const userid = cookies.get("userid")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/users/table`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({data: data})
  }
});

export default function Employees({ links, paths, email }: any) {
    const sidelinks = ["User", "New"]
    const sidepaths = ["/users", "/users/new"]
    const fields = [{value: "Null", type: "hidden"}]
    const fieldnames = [""]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const [notleader, setNotleader] = useState(true)
    const titles = ["Full Name", "Email Adress", "Phone Number", "Qualification", "Salary", "Position", "Type", "Department"]
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
        if (res.data.role == "hr"){
          setNotleader(false)
        } 
      })
    }, [form]);
    function handleShow(){
      setShow(false)
    }
return (
    <Layout links={links} paths={paths} current="home" email={email} sidelinks={sidelinks} sidepaths={sidepaths}>
        { notleader && data.length > 0 ? <Card items={data}/> : <div></div>}
        { notleader == false && data.length > 0 ? <Table items={data} titles={titles} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/>: <></>}
    </Layout>
)

}