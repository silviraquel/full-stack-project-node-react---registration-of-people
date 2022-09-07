import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from 'moment'
import './style.css'


export default function Edit() {

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cpf, setCpf] = useState('');
  const [objPerson, setobjPerson] = useState(JSON.parse(localStorage.getItem('person_to_edit')));
  const [id] = useState([objPerson.id])


  useEffect(() => {

    handleEdit();

  });

  
  function handleEdit() {

    let birthEdit = moment(objPerson.birthday).format('YYYY-MM-DD')
    setName(objPerson.name);
    setBirthday(birthEdit);
    setCpf(objPerson.cpf);
  }

  async function updatePerson(e){
    e.preventDefault();
     try{
        const dataPost = {
          name: name,
          birthday: birthday,
          cpf: cpf
        };

        console.log(dataPost);

        axios.put(`http://localhost:3001/person/${id}`, dataPost).then(response => {
          alert("update successfully!!");
        });
       }catch (err) {
       console.log(err)
       alert(err.response.data.message)
     }
 }

 function  teste(){
  return alert('recebeu!')
 }


return (
  <>

    <form className="index" onSubmit={(e) => updatePerson(name,birthday,cpf)}>
      <h2 >Person's Edition</h2>

      <div>
        <input type="text" placeholder="name" name="name" onChange={(e) => setName(e.target.value)} defaultValue={name} required />
      </div>

      <div>
        <input type="date" placeholder="birthday" onChange={(e) => setBirthday(e.target.value)} defaultValue={birthday} required />
      </div>

      <div>
        <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} defaultValue={cpf} required />
      </div>

      <button type="submit">Edit person</button>
    </form>

  </>
)
}

