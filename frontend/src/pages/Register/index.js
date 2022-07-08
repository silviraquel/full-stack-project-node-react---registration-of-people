import axios from "axios";
import React, { useState } from "react";

export default function Register() {

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cpf, setCpf] = useState('');



  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = await axios.post('http://localhost:3001/person', {
        name,
        birthday,
        cpf
      })
        .then((response) => {
        })
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
    }
  }


  return (
    <>

      <form onSubmit={handleSubmit}>
        <h2>Person's Registration</h2>

        <div>
          <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>

        <div>
          <input type="date" placeholder="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthday} required />
        </div>

        <div>
          <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} value={cpf} required />
        </div>

        <button type="submit">Send the register</button>
      </form>

    </>
  )
}