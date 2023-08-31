import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import gojo from '../assets/download.jpg';
import { Link } from 'react-router-dom';

export default function BookDetail () {
    let param = useParams();
    let url = `http://localhost:3000/Books/${param.id}`;
    let { data : book, loading, error } = useFetch(url);
  return (
    <div className='mt-5'>
        {loading && <div className='text-center text-gray-500 font-bold text-2xl mt-3'>Loading...</div>}
        {error && <div className='text-center text-gray-500 font-bold text-2xl mt-3'>{error}</div>}
        {book && 
        <div className='grid grid-cols-2'>
            <div className='w-[80%] '>
                <img src={gojo} className='w-full' />
            </div>
            <div className='space-y-5'>
                <h1 className='text-2xl font-bold'>{book.title}</h1>
                <p>{book.description}</p>
                <div className='d flex flex-wrap gap-2'>
                {book.categories.map(category => (
                    <span key={category} className='text-sm text-white bg-indigo-500 px-2 py-1 rounded-md'>{category}</span>
                ) )}
                </div>
                <Link to="/" className='bg-blue-500 px-2 py-1 rounded-lg text-white inline-flex space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span>Return To Home</span>
                </Link>
            </div>
        </div>
        }
    </div>
  )
}