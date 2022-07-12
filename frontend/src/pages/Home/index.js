import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [cpf, setCpf] = useState('');
  const [id] = useState([])
  const [person, setPerson] = useState([]);


  useEffect(() => {

    axios.get('http://localhost:3001/person').then(response => {
      setPerson(response.data);
    });

  }, [])

  function buttonEdit(plp) {
    return navigate('/edit')
  } 

  return (
    <>
      <Container className="topo  d-flex align-items-center  flex-direction: column align-items-stretch padding-top">
        <Table>
          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>CPF</th>
              <th>Opções</th>
            </tr>

          </thead>
          <tbody>

            {person.map((plp) => (
              <tr key={plp.id}>
                <td>{plp.id}</td>
                <td>{plp.name}</td>
                <td>{plp.birthday}</td>
                <td>{plp.cpf}</td>
                <td>
                  <Button
                    onClick={() => {buttonEdit()}}
                    size="md"

                  > E D I T
                  </Button>
                  <Button size="md" variant="danger">DELETE</Button>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default Index;



