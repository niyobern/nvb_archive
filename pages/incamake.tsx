import Lesson from "../components/lesson"
import Layout from '../components/layout';

export default function Incamake(){
    return (
        <Layout>
            <div className="p-1 px-2 h-content flex flex-col">
                <Lesson/>
            </div>
        </Layout>
    )
}