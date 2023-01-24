import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { handle, json, redirect } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import baseUrl from '../../components/baseUrl';
import Layout from '../../components/Layout';
import PasswordGrid from '../../components/PasswordGrid';

export const getServerSideProps = handle({
  async get() {
    return json({});
  },
  async post({ req: { body }, cookies}: any) {
    const token = cookies.get("token")
    const result = await axios.patch(`${baseUrl}/password`, body, {headers : {"Authorization": token}})
    return json({message: result.data});
  },
});

export default function Password({  links, paths, email }: any) {
  const [mail, setMail] = useState(email)
  const sidelinks = ["User", "New", "Change Password"]
  const sidepaths = ["/users", "/users/new", "/users/password"]
  const router = useRouter()
  const [formResponse, setFormResponse] = useState("")
  const [show, setShow] = useState(false)
  const form: any = useFormSubmit("passwordChange")
  useEffect(() => {
      if (mail == ""){
        axios.get("/home", {headers: {"Accept": "application/json"}})
        .then(res => {
          setMail(res.data.emailA)
        })
      }
      if (form.isError){
        setFormResponse("There was an error and the data was not added")
        setShow(true)
      };
      if (form.isSuccess){
        setFormResponse(form.data.message.message)
        setShow(true)
      }
  }, [form, router, mail]);
  function handleShow(){
    setShow(false)
  }

  return (
    <Layout links={links} paths={paths} sidelinks={sidelinks} sidepaths={sidepaths} current="home" email={mail}>
        <PasswordGrid  formResponse={formResponse} showPop={show} close={handleShow}/>
    </Layout>
  );
}