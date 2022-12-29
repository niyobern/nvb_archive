import { handle, json } from 'next-runtime';

export const getServerSideProps = handle({
  async post({ req: { body } }) {

    return json({
      message: 'thanks for your comment!',
    });
  },
});