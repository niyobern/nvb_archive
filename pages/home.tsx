import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../components/baseUrl';
import Layout from '../components/Layout';
import ListItem from '../components/lists';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import GridItems from '../components/ItemsGrid';
import { useState } from 'react';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const email = cookies.get("email")
    const leavetypes = await axios.get(`${baseUrl}/admin/new`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({data: data, emailA: email})
  }
});

export default function Home({ links, paths, emailA, handleEmail }: any) {
    handleEmail(emailA)
    const fields = [{value: "Null", type: "hidden"}]
    const fieldnames = [""]
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
    <Layout links={links} paths={paths} sidelinks={links} sidepaths={paths} email={emailA} current="home">
        <GridItems items={data} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} close={handleShow}/>
    </Layout>
)

}