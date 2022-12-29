import axios from 'axios';
import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import { ContextType } from 'react';
import baseUrl from '../components/baseUrl';

export const getServerSideProps = handle({
  async get() {
    return json({});
  },
  async post({ req: { body }, res}: any) {
    const result = await axios.post(`${baseUrl}/login`, body, {headers : {"content-type": "multipart/form-data"}})
    const token = result.data
    res.setCookie("token", token)
    console.log(token)
    return json({ message: 'Thanks for your submission!', name: body.username });
  },
});

export default function Home({ name, cookie, keys }:any) {
    
  const form: any = useFormSubmit('bernardn');  
  const formValues: { name: string} = form.values
//   if (form.isSuccess) {
//     return <p>{`Thanks for your submission! ${formValues.name}`}</p>;
//   }

  return (
    <Form method="post" encType="multipart/form-data" name="bernardn">
      <input name="username" type="text"/>
      <input name="password" type="password"/>
      <button type="submit">submit</button>
    </Form>
  );
}