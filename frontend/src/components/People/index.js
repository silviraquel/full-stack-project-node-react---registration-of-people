import React from 'react';
import { useState } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from '../../../src/services/axios'


const People = () => {

  const [person, setPerson] = useState([]);

  return (
    <>
    <div className='btn'>
    <Button size="lg" variant='success' className=' float-right'  >Cadastrar</Button>
    </div>
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
              <Button size="lg active">Editar</Button>
            </tr>

          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default People;

