import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import NewsList from '@/Components/NewsList';

export default function Dashboard(props) {
    console.log('dashboard', props)
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        body: '',
        category: '',
        author_id: props.auth.user.id,
        author_name: props.auth.user.name
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('createNews'))
        reset('body', 'category', 'title')
    }

    return (
        <AuthenticatedLayout
            user={props.auth}
        >
            <Head title="Dashboard" />

            <div className="container mt-3">
                <h1 className='font-bold text-slate-800 text-4xl p-4'>Welcome {props.auth.user.name}</h1>
                <hr />
                <br />
                <div className="border p-4 w-full lg:w-6/12">
                    <h1 className='text-slate-800 font-black text-3xl text-center mb-4'>Create News</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                        </div>
                        <div className='mt-4'>
                            <InputLabel htmlFor="body" value="Body" />

                            <TextInput
                                id="body"
                                type="text"
                                name="body"
                                value={data.body}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('body', e.target.value)}
                            />
                        </div>
                        <div className='mt-4'>
                            <InputLabel htmlFor="category" value="Category" />

                            <TextInput
                                id="category"
                                type="text"
                                name="category"
                                value={data.category}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('category', e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className='btn bg-primary text-white mt-10 font-black px-5'>
                            Submit
                        </button>
                    </form>
                </div>

                <div className="mt-5 border p-4">
                    <h1 className='text-slate-800 font-black text-3xl text-center mb-4'>My News</h1>
                    <NewsList data={props.data} />

                </div>
            </div>
        </AuthenticatedLayout >
    );
}
