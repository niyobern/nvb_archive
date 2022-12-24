import { handle, json } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';

export const getServerSideProps = handle({
  async get({ params, query }) {
    return json({ name: 'Stephan Meijer' });
  },

  async post({ req: { body } }: any) {
    // console.log(body)
    return json({ message: 'Thanks for your submission!', name: body.name });
  },
});

export default function Home({ name, message }:any) {
    
  const form: any = useFormSubmit('bernardn');  
  const formValues: { name: string} = form.values
  if (form.isSuccess) {
    return <p>{`Thanks for your submission! ${formValues.name}`}</p>;
  }

  return (
    <Form method="post" encType="multipart/form-data" name="bernardn">
      <input name="name" defaultValue={name} />
      <button type="submit">submit</button>
    </Form>
  );
}