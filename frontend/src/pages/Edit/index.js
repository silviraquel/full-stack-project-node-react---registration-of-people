import axios from "axios";
import React, { useState } from "react";
import './style.css'


export default function Edit() {

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cpf, setCpf] = useState('');



  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      const formData = await axios.put('http://localhost:3001/person', {
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

      <form className="index">
        <h2 onSubmit={handleEdit}>Person's Edition</h2>

        <div>
          <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>

        <div>
          <input type="date" placeholder="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthday} required />
        </div>

        <div>
          <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} value={cpf} required />
        </div>

        <button type="submit">Edit person</button>
      </form>

    </>
  )
}

