import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import { useState } from 'react';
import Layout from '../../components/Layout';
import TableR from '../../components/tableog';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/bonus`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({data: data})
  }, async post({ cookies , req: {body}}){
    const token = cookies.get("token")
    const fetch = await axios.post(`${baseUrl}/bonus`, body, {headers: {"Authorization": token}})
    const data = fetch.data
    return json({...data})
  }
});

export default function Bonus({ links, paths, email }: any) {
    const sidelinks = ["Payroll", "Bonuses", "Radiant"]
    const sidepaths = ["/payroll", "/payroll/bonus", "/payroll/radiant"]
    const fields = [{value: "Null", type: "hidden"}]
    const fieldnames = [""]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const titles = ["Employee", "Amount"]
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
    }, [form]);
    function handleShow(){
      setShow(false)
    }
return (
    <Layout links={links} paths={paths} sidelinks={sidelinks} sidepaths={sidepaths} current="home" email={email}>
        <TableR items={data} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} titles={titles} close={handleShow} bonus={true}/>
    </Layout>
)

}