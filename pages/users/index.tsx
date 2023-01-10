import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import NiceTable from '../../components/nice_table';
import { useFormSubmit } from 'next-runtime/form';
import { useEffect } from 'react';
import { useState } from 'react';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/users`, {headers: {"Authorization": token}})
    return json({data: leavetypes.data})
  },
  async post({req: { body }, cookies}){
    const token = cookies.get("token")
    const additems = await axios.patch(`${baseUrl}/users`, [{"id": Number(body.id), "role": body.role}], {headers: {"Authorization": token}})
    return json({...additems.data})
  }
});

export default function Purchases({ globLinks, globPaths, handlePaths, handleLinks }: any) {
    const fields = [{value: "id", type: "number"}, {value: "role", type: "text"}]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const [links, setLinks] = useState(globLinks)
    const [paths, setPaths] = useState(globPaths)
    useEffect(() => {
      if (data.length > 0 && form.isError){
        setFormResponse("There was an error and the data was not added")
        setShow(true)
      };
      if (data.length > 0 && form.isSuccess){
        setFormResponse(form.data.message)
        setShow(true)
      }
      if (globLinks.length === 1){
        axios.get("/home", {headers: {"Accept": "application/json"}})
        .then(res => {
          setLinks(res.data.links)
          setPaths(res.data.paths)
          handleLinks(res.data.links)
          handlePaths(res.data.paths)
        })
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
    <Layout links={links} paths={paths}>
        <NiceTable items={data} fields={fields} formResponse={formResponse} showPop={show} close={handleShow}/>
    </Layout>
)

}]