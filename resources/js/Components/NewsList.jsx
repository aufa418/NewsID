import React from 'react'
import { Link } from '@inertiajs/react';

const NewsList = ({ data, homepage }) => {
    const isHaveNews = (data) => {
        if (data.length) {
            return (
                data.map((data, i) => (
                    <div className="card w-full lg:w-96 text-slate-800 shadow-xl border lg:mt-0" key={i}>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.title}
                            </h2>
                            {data.body.length > 20 ? <p> {data.body.slice(0, 20)}... </p> : <p> {data.body}</p>}
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{data.category}</div>
                                {isHomepage(data)}
                            </div>
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                <>
                    <p className='text-slate-800 text-center'>Do not have News</p>
                </>
            )
        }
    }

    const isHomepage = (data) => {
        if (!homepage) {
            return (
                <>
                    <div className="badge badge-danger badge-outline">
                        <Link
                            href={route('deleteNews')}
                            method="post"
                            as='button'
                            data={{ id: data.id }}
                        >
                            Remove
                        </Link>
                    </div>
                    <div className="badge badge-danger badge-outline">
                        <Link
                            href={route('formEdit', { id: data.id })}
                            method="get"
                            as='button'
                        >
                            Edit
                        </Link>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="badge badge-danger badge-outline">{data.author_name}</div>
                </>
            );
        }
    }
    return (
        <>
            <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center">
                {isHaveNews(data)}
            </div>
        </>
    )
}

export default NewsList
