import Card from "../components/card"
import Navigate from "../components/navigate"
import Layout from '../components/layout';

export default function Note(){
    return (
        <Layout>
            <div className="bg-teal-100 px-1 md:px-10 py-4 flex flex-col gap-6 md:gap-4 h-full">
                <Card/>
                <Navigate/>
            </div>
        </Layout>
    )
}