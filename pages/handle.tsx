import { Form, useFormSubmit } from 'next-runtime/form';
import { handle, json } from 'next-runtime';

export const getServerSideProps = handle({
    async post({ req: { body } }) {
    //   await db.comments.insert({
    //     message: body.message,
    //   });
  
      return json({
        message: 'thanks for your comment!',
      });
    },
  })

export default function MyPage({ name, message }: any) {
  const { isSubmitting } = useFormSubmit();

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <Form method="post">
      <input name="name" defaultValue={name} />
      <input name="message" />
      <button type="submit">
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  );
}