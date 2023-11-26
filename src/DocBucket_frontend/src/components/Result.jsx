import React, { useState } from 'react'
import { DocBucket_backend } from '../../../declarations/DocBucket_backend'



const Result = () => {

  const [name, setName] = useState('')
  const [stream, setStream] = useState('')
  const [regno, setRegno] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [degree, setDegree] = useState('')
  const [year, setYear] = useState('')
  const [isData, setIsData] = useState(false)
  const [show, setShow] = useState(false)

  const getData = async () => {
    const response = await DocBucket_backend.read_profile(registration_no)
    if (response.data) {
      setIsData(true)
      setName(response.data.name)
      setStream(response.data.stream)
      setRegno(response.data.regno)
      setCgpa(response.data.cgpa)
      setDegree(response.data.degree)
      setYear(response.data.year)
    }
    setShow(true)
  }
  return (
    <>
      <div className="upd">
        <h1>Enter your registration number</h1>
        <input type="text" placeholder="Enter your registration number" onChange={(e) => setRegno(e.target.value)} />
        <button onClick={getData}>Submit</button>
      </div>
      {isData ? (
        <div className="upd">
          <h1>Your result is here</h1>
          <div className="disp-form">
            <p><strong>{name}</strong></p>
            <p><strong>{degree}</strong></p>
            <p><strong>{stream}</strong></p>
            <p><strong>{regno}</strong></p>
            <p><strong>{cgpa}</strong></p>
            <p><strong>{year}</strong></p>
          </div>
          <h1>Congrats!!!</h1>
        </div>) :
        (
          <div className="upd">
          </div>
        )}
        {show && (
          <div className="upd">
          Document not found
        </div>
        )}
    </>
  )
}

export default Result