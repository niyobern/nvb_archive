import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const keys = cookies.get("key")
    return json({ name: 'Stephan Meijer', keys: keys ? keys : "hello" });
  },

  async post({ res, req: { body } }: any) {
    // console.log(body)
    res.setCookie("key", body.cookie)
    return json({ message: 'Thanks for your submission!', name: body.name });
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
      <input name="name" defaultValue={name}/>
      <input name="cookie" defaultValue={cookie}/>
      <p>{formValues?.name}</p>
      <p>{keys}</p>
      <button type="submit">submit</button>
    </Form>
  );
}