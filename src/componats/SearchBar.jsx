import React, { useState } from 'react';

function SearchBar(props) {
  const [searchCriteria, setSearchCriteria] = useState({
    type: '',
    title: '',
    exprerience: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Ensure that fetchJobsCustom is defined and properly cased
    if (props.fetchJobsCustom) {
      // Use searchCriteria instead of individual variables
      props.fetchJobsCustom(searchCriteria);
    }
  };

  return (
    <>
      
      <div className='flex gap-4 my-10 px-10'>
      <select onChange={handleChange} name="title" value={searchCriteria.title} className='w-52 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
      <option value="" disabled hidden>Job Role</option>
      <option value="Frontend Devloper">Frontend Devloper</option>
      <option value="Backend Developer">Backend Developer</option>
      <option value="Android Developer">Android Developer</option>
      <option value="Developer Advocate">Developer Advocate</option>
  </select>
  <select onChange={handleChange} name="type" value={searchCriteria.type} className='w-52 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
      <option value="" disabled hidden>Job Type</option>
      <option value="full time">full time</option>
      <option value="Part Time">Part Time</option>
      <option value="Contract">Contract</option>
  </select>
  <select onChange={handleChange} name="location" value={searchCriteria.location} className='w-52 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
      <option value="" disabled hidden>Location</option>
      <option value="remote">remote</option>
      <option value="In-Office">In-Office</option>
      <option value="Hybrid">Hybrid</option>
  </select>
  <select onChange={handleChange} name="exprerience" value={searchCriteria.exprerience} className='w-52 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
      <option value="" disabled hidden>Experience</option>
      <option value="fresher">fresher</option>
      <option value="Junior Level">Junior Level</option>
      <option value="Mid Level">Mid Level</option>
      <option value="Senior Level">Senior Level</option>
  </select>
  <button onClick={handleSearch} className='w-64 bg-sky-700 text-white font-bold py-3 rounded-md'>
  Search
</button>
  </div>
    </>
  );
}

export default SearchBar;
