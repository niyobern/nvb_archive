import { handle, json, redirect } from 'next-runtime';
import axios from 'axios'
import baseUrl from '../components/baseUrl';
import Layout from '../components/Layout';
import ListItem from '../components/lists';

export const getServerSideProps = handle({
  async get({ cookies }) {
    const token = cookies.get("token")
    if (!token){
      return redirect("/")
    }
    const leavetypes = await axios.get(`${baseUrl}/links`, {headers: {"Authorization": token}})
    const data = leavetypes.data
    const links = data.links
    const paths = data.paths
    return json({links: links, paths: paths})
  }, 
  async post({req: { body }, cookies}: any){
    const token = cookies.get("token")
    const report = await axios.post(`${baseUrl}/reports/${body.endpoint}/?start=${body.start}:00&end=${body.end}:59`, {"email": body.email}, {headers: {"Authorization": token}})
    return json({...report.data})
  }
});

export default function Home({ links, paths, handleLinks, handlePaths }: any) {
  handleLinks(links)
  handlePaths(paths)

    const fields = [{value: "Null", type: "hidden"}]
return (
    <Layout links={links} paths={paths} current="home">
        <ListItem items={links} fields={fields} paths={paths}/>
    </Layout>
)

}