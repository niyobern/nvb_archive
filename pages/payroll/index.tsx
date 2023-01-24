import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../../components/baseUrl';
import { useEffect } from 'react';
import { useFormSubmit } from 'next-runtime/form';
import GridItems from '../../components/ItemsGrid';
import { useState } from 'react';
import Table from '../../components/table';
import LayoutPayroll from '../../components/LayoutPayroll';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.post(`${baseUrl}/payroll`, {"ids": [0]}, {headers: {"Authorization": token}})
    const data = leavetypes.data
    return json({data: data})
  }
});

export default function Employees({ email }: any) {
    const links = ["Documents", "Leave", "Users", "Payroll", "Bonuses", "Radiant"]
    const paths = ["/admin", "/leave", "/users", "/payroll", "/payroll/bonus", "/payroll/radiant"]
    const paths2 = ["/admin", "/leave", "/users", "/payroll"]
    const links2 = ["Documents", "Leave", "Users", "Payroll"]
    const [mail, setMail] = useState(email)
    const fields = [{value: "Null", type: "hidden"}]
    const fieldnames = [""]
    const [formResponse, setFormResponse] = useState("")
    const [show, setShow] = useState(false)
    const form: any = useFormSubmit()
    const [data, setData] = useState([])
    const [leader, setLeader] = useState(false)
    const titles = ["Full Name",'Base Salary', 'Accomodation', 'Transport', 'Bonuses', 'TPR', 'RSSB Base', 'RSSB 3%', 'RSSB 5%', 'Total RSSB', 'Maternity 0.03%', 'Total Maternity', 'Radiant', 'Net Salary', 'CBHI', 'Net Salary to be Paid']
    useEffect(() => {
      if (mail == ""){
        axios.get("/home", {headers: {"Accept": "application/json"}})
        .then(res => {
          setMail(res.data.emailA)
        })
      }
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
    <LayoutPayroll links={leader? links: links2} paths={leader? paths: paths2} current="home" email={mail}>
        <Table items={data} fields={fields} fieldnames={fieldnames} formResponse={formResponse} showPop={show} titles={titles} close={handleShow}/>
    </LayoutPayroll>
)

}