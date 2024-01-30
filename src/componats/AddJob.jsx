import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firbase.config';

function AddJob() {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    type: '',
    experience: '',
    location: '',
    postedOn: '',
    job_link: '',
    company: '',
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddJob = async () => {
    try {
      // Ensure that all required fields are filled
      if (!jobDetails.title || !jobDetails.type || !jobDetails.experience || !jobDetails.location) {
        console.error('Please fill in all fields.');
        return;
      }

      // Add the job details to Firestore
      const docRef = await addDoc(collection(db, 'jobs'), {
        title: jobDetails.title,
        type: jobDetails.type,
        experience: jobDetails.experience,
        location: jobDetails.location,
        postedOn: serverTimestamp(),
        job_link: jobDetails.job_link,
        company: jobDetails.company,
        skills: jobDetails.skills,
      });

      console.log('Job added with ID: ', docRef.id);

      // Clear the form after successfully adding the job
      setJobDetails({
        title: '',
        type: '',
        experience: '',
        location: '',
        postedOn: '',
        job_link: '',
        company: '',
        skills: [],
      });
    } catch (error) {
      console.error('Error adding job: ', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Add Job</h2>

      {/* ... Other input fields ... */}
  
    <div className="mb-4">
    <label className="block text-gray-600 text-sm font-semibold mb-2">Company:</label>
    <input
      type="text"
      name="company"
      value={jobDetails.company}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Job Role:</label>
        <select
          onChange={handleChange}
          name="title"
          value={jobDetails.title}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled hidden>
            Job Role
          </option>
          <option value="Frontend Devloper">Frontend Devloper</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Job Type:</label>
        <select
          onChange={handleChange}
          name="type"
          value={jobDetails.type}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled hidden>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Location:</label>
        <select
          onChange={handleChange}
          name="location"
          value={jobDetails.location}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled hidden>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>


      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-semibold mb-2">Experience:</label>
        <select
          onChange={handleChange}
          name="experience"
          value={jobDetails.experience}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled hidden>
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
      </div>

      <div className="mb-4">
      <label className="block text-gray-600 text-sm font-semibold mb-2">Posted On:</label>
      <input
        type="text"
        name="postedOn"
        value={jobDetails.postedOn}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
    </div>
    
    <div className="mb-4">
    <label className="block text-gray-600 text-sm font-semibold mb-2">Skills:</label>
    <input
      type="text"
      name="skills"
      value={jobDetails.skills.join(', ')}
      onChange={(e) => setJobDetails({ ...jobDetails, skills: e.target.value.split(', ') })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
  <label className="block text-gray-600 text-sm font-semibold mb-2">Job Link:</label>
  <input
    type="text"
    name="job_link"
    value={jobDetails.job_link}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-md"
  />
</div>

      <button
        onClick={handleAddJob}
        className="bg-sky-700 text-white px-6 py-2 rounded-md font-semibold"
      >
        Add Job
      </button>
    </div>
  );
}

export default AddJob;
