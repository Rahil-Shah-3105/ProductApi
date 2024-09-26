import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col">
                <h1 className='text-3xl text-center font-bold mt-5 capitalize'>The page you were looking for could not be found!!</h1>
                <button className='bg-blue-600 text-white w-48 mx-auto my-10 rounded-lg p-2 text-xl font-bold' onClick={() => navigate("/")}>Home</button>
            </div>
        </>
    )
}

export default PageNotFound
