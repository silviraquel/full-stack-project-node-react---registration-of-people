import React from 'react';
import { useState } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const People = () => {

  const [person, setPerson] = useState([]);

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

            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <Button size="lg active">EDITAR</Button>
            </tr>

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

