import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from 'moment'
import { useNavigate } from "react-router-dom";

import './style.css'

export default function Edit() {

  let objPerson = JSON.parse(localStorage.getItem('person_to_edit'));
  let birthEdit = moment(objPerson.birthday).format('YYYY-MM-DD');

  const navigate = useNavigate();
  const [name, setName] = useState(objPerson.name);
  const [birthday, setBirthday] = useState(birthEdit);
  const [cpf, setCpf] = useState(objPerson.cpf);

  function updatePerson(e){
    e.preventDefault();

    const dataPost = {
      name: name,
      birthday: birthday
    };

    axios.put(`http://localhost:3001/person/${objPerson.id}`, dataPost)
      .then(response => {
        
        alert('Sucess!!!');
        navigate('/');

      }).catch(error => alert(error.response.data.message));
 }


return (
  <>

    <form className="index" onSubmit={updatePerson}>
      <h2 >Person's Edition</h2>

      <div>
        <input type="text" placeholder="name" name="name" onChange={(e) => setName(e.target.value)} defaultValue={name} required />
      </div>

      <div>
        <input type="date" placeholder="birthday" onChange={(e) => setBirthday(e.target.value)} defaultValue={birthEdit} required />
      </div>

      <div>
        <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} defaultValue={objPerson.cpf} disabled />
      </div>

      <button type="submit">Edit person</button>
    </form>

  </>
)
}

