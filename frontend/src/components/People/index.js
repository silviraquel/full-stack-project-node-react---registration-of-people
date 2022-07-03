import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const People = () => {

  const [person, setPerson] = useState([]);

      useEffect(() => {
        const getData = async () => {
          const res = await fetch('/person');
          const objPromise = res.json();
          objPromise.then(person => {
            setPerson(person);
          });

        };
        getData();
      }, [])

    return (
      <>
        <Container className="topo" class='d-flex align-items-center  flex-direction: column align-items-stretch padding-top'>
          <Table>
            <thead>

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>CPF</th>
              </tr>

            </thead>
            <tbody>

               {person.map((plp, index) => (
                  <tr key ={index.id}>
                  <td>{plp.id}</td>
                  <td>{plp.name}</td>
                  <td>{plp.birthday}</td>
                  <td>{plp.cpf}</td>
                  </tr>
                 ))}    
            </tbody>
          </Table>
        </Container>
        <div className="d-grid gap-2">
          <Button size="lg" variant='success'>Cadastrar</Button>
        </div>

      </>
    )
  }

export default People;

