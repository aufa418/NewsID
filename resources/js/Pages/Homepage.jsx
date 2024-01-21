import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react"
import NewsList from "@/Components/NewsList";

const Homepage = (props) => {
    console.log('data : ', props);
    return (
        <>
            <Head title="NewsID" />
            <div className="min-h-screen bg-white">
                <Navbar user={props.auth.user} />
                <div className="container mt-4">
                    <h1 className="text-3xl text-slate-800 font-black text-center mb-4">Welcome In NewsID</h1>
                    <hr />
                    <div className="border rounded-md mt-4 p-5">
                        <h1 className="text-xl text-slate-800 font-black text-center mb-5">NewsID List</h1>
                        <NewsList data={props.data} homepage='true' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
