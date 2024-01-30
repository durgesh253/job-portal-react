import React, { useState } from 'react'
import dayjs from 'dayjs';

function JobCard(props) {

    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
    
  return (
   <>
   
   <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mr-3 ">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-sky-700"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <span className="h-8 w-0.5 rounded-full bg-sky-700"></span>
        <span className="h-6 w-0.5 rounded-full bg-sky-700"></span>
        <span className="h-4 w-0.5 rounded-full bg-sky-700"></span>
        <span className="h-6 w-0.5 rounded-full bg-sky-700"></span>
        <span className="h-8 w-0.5 rounded-full bg-sky-700"></span>
      </div>
    </div>

    <div>
      <strong
        className="rounded border border-sky-700 bg-sky-700 px-3 py-1.5 text-[10px] font-medium text-white"
      >
        {props.type}
      </strong>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="" className="hover:underline"> {props.company} </a>
      </h3>

      <p className="mt-1 text-sm text-gray-700 ">
       {props.skills.join(' /')}
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <p className='text-gray-500'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="mt-2 text-xl font-medium text-gray-500 sm:mt-0">
          {props.location}
        </p>
        
      </div>
      <div className="mt-1">
      <button className="mr-2 my-1 uppercase tracking-wider px-2 text-sky-700 border-sky-700 hover:bg-sky-700 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">Apply</button>
    </div>
    </div>
  </div>
</article>
 
   </>
  )
}

export default JobCard