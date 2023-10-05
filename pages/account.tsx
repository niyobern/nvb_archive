import Layout from '../components/layout';

export default function Account(){
    return (
        <Layout>
            <div className="text-lg bg-sky-400 flex flex-col content-center justify-center h-full">
                <div className="bg-white rounded w-96 h-64 shadow-lg shadow-sky-600 mx-auto flex flex-col text-center justify-center">
                    <span className="text-4xl font-bold text-red-800">Sorry</span>
                    <span className="text-gray-800 text-xl font-medium">No details yet</span>
                </div>
            </div>
        </Layout>
    )
}