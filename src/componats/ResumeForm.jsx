import React from 'react'

function ResumeForm() {
    const [resumeData, setResumeData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        skills: '',
        location: '',
        experience: '',
        portfolioLink: '',
        education: '',
      });

      const updateResumeData = (field, value) => {
        setResumeData({ ...resumeData, [field]: value });
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        updateResumeData(name, value);
      };
  return (
    <div>
    <h2>Resume Form</h2>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange} />
      </label>
      <br />
      {/* Repeat similar input fields for other resume sections */}
    </form>
  </div>
  )
}

export default ResumeForm