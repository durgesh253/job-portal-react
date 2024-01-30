import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, where, getDocs} from "firebase/firestore";
import { db } from '../firbase.config';
import SearchBar from './SearchBar';
import JobCard from './JobCard';

function AllJobs() {

  const [jobs,setjobs] = useState([])
  

  const fetchjobs = async() => {
    const tempJobs = []
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn" ,"desc"));
    const request = await getDocs(q);
    request.forEach((job) => {
  
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      ...job.data(),
      id : job.id,
      postedOn: job.data().postedOn.toDate()
    })
    
  });
  setjobs(tempJobs)

  }

  const fetchJobsCustom = async (jobCriteria) => {
    const tempJobs = [];
    const jobRef = collection(db, 'jobs');
    let q = query(jobRef);
  
    if (jobCriteria.type) {
      q = query(q, where('type', '==', jobCriteria.type));
    }
  
    if (jobCriteria.title) {
      q = query(q, where('title', '==', jobCriteria.title));
    }
  
    if (jobCriteria.experience) {
      q = query(q, where('experience', '==', jobCriteria.experience));
    }
  
    if (jobCriteria.location) {
      q = query(q, where('location', '==', jobCriteria.location));
    }
  
    q = query(q, orderBy('postedOn', 'desc'));
  
    const request = await getDocs(q);
  
    request.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
  
    setjobs(tempJobs);
  };


  useEffect(() => {
    fetchjobs()
  },[])

  return (
    <>
    <div className='flex gap-4 my-10 px-10'>
    <input type='text' placeholder='Job Title' name='serarch' className='mr-2 p-2' />

    <button
      onClick={() => {
        // Call the handleSearch function with the criteria from the input
        const searchCriteria = {
          title: document.getElementsByName('serarch')[0].value,
        };
        fetchJobsCustom(searchCriteria);
      }}
      className='w-64 bg-sky-700 text-white font-bold py-3 rounded-md'
    >
      Search
    </button>
  </div>

    <SearchBar fetchJobsCustom={fetchJobsCustom}/>
   
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
    {jobs.map((job) => {
      return <JobCard  key={job.id} {...job}/>
    })}
    </div>

    </>
   
  )
}

export default AllJobs