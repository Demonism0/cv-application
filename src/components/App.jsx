import { useState } from 'react'
import '../styles/App.css'

const initialPortfolio = {
  name: '',
  email: '',
  phone: '',
  school: '',
  titleStudy: '',
  dateStudy: '',
  company: '',
  titleJob: '',
  dateStart: '',
  dateEnd: '',
}

function App() {
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [displayInfo, setDisplayInfo] = useState(false);

  function handleNameChange(e) {
    setPortfolio(
      {...portfolio, name: e.target.value}
    );
  }
  function handleEmailChange(e) {
    setPortfolio(
      {...portfolio, email: e.target.value}
    );
  }
  function handlePhoneChange(e) {
    setPortfolio(
      {...portfolio, phone: e.target.value}
    );
  }
  function handleSchoolChange(e) {
    setPortfolio(
      {...portfolio, school: e.target.value}
    );
  }
  function handleTitleStudyChange(e) {
    setPortfolio(
      {...portfolio, titleStudy: e.target.value}
    );
  }
  function handleDateStudyChange(e) {
    setPortfolio(
      {...portfolio, dateStudy: e.target.value}
    );
  }
  function handleCompanyChange(e) {
    setPortfolio(
      {...portfolio, company: e.target.value}
    );
  }
  function handleTitleJobChange(e) {
    setPortfolio(
      {...portfolio, titleJob: e.target.value}
    );
  }
  function handleDateStartChange(e) {
    setPortfolio(
      {...portfolio, dateStart: e.target.value}
    );
  }
  function handleDateEndChange(e) {
    setPortfolio(
      {...portfolio, dateEnd: e.target.value}
    );
  }

  if (displayInfo) {
    return (
      <div
        className="info-display">
        <button
          onClick={changeScreen}>
          Edit Information
        </button>
        <div
          className="card">
          <h1>Contact</h1>
          <h2>Name:</h2>
          <div>{portfolio.name}</div>
          <h2>Email:</h2>
          <div>{portfolio.email}</div>
          <h2>Phone:</h2>
          <div>{portfolio.phone}</div>
        </div>
        <div
          className="card">
          <h1>Education</h1>
          <h2>School:</h2>
          <div>{portfolio.school}</div>
          <h2>Title of study:</h2>
          <div>{portfolio.titleStudy}</div>
          <h2>Date of study:</h2>
          <div>{portfolio.dateStudy}</div>
        </div>
        <div
          className="card">
          <h1>Job Experience</h1>
          <h2>Company:</h2>
          <div>{portfolio.company}</div>
          <h2>Job title:</h2>
          <div>{portfolio.titleJob}</div>
          <h2>Start date:</h2>
          <div>{portfolio.dateStart}</div>
          <h2>End date:</h2>
          <div>{portfolio.dateEnd}</div>
        </div>
      </div>
    )
  }

  function changeScreen() {
    setDisplayInfo(!displayInfo);
  }

  return (
    <div
      className="form-display">
      <form
        onSubmit={changeScreen}>
        <fieldset>
          <legend>Contact</legend>
          <label>Name: 
            <input
              type="text"
              value={portfolio.name}
              onChange={handleNameChange} />
          </label>
          <label>Email: 
            <input
              type="email"
              value={portfolio.email}
              onChange={handleEmailChange} />
          </label>
          <label>Phone number: 
            <input
              type="tel"
              value={portfolio.phone}
              onChange={handlePhoneChange} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <label>School name: 
            <input
              type="text"
              value={portfolio.school}
              onChange={handleSchoolChange} />
          </label>
          <label>Title of study: 
            <input
              type="text"
              value={portfolio.titleStudy}
              onChange={handleTitleStudyChange} />
          </label>
          <label>Date of study: 
            <input
              type="date"
              value={portfolio.dateStudy}
              onChange={handleDateStudyChange} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Job Experience</legend>
          <label>Company name: 
            <input
              type="text"
              value={portfolio.company}
              onChange={handleCompanyChange} />
          </label>
          <label>Job Title: 
            <input
              type="text"
              value={portfolio.titleJob}
              onChange={handleTitleJobChange} />
          </label>
          <label>Start date: 
            <input
              type="date"
              value={portfolio.dateStart}
              onChange={handleDateStartChange} />
          </label>
          <label>End date: 
            <input
              type="date"
              value={portfolio.dateEnd}
              onChange={handleDateEndChange} />
          </label>
        </fieldset>
        <button
          type="submit">
            Submit
        </button>
      </form>
    </div>
  );
}

export default App
