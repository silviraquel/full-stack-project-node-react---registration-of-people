import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Index = () => {

  const [person, setPerson] = useState([]);

      useEffect(() => {
        
        axios.get('/person').then(response => {
          setPerson(response.data);
        });

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
                <th>Opções</th>
              </tr>

            </thead>
            <tbody>

               {person.map((plp) => (
                  <tr key ={plp.id}>
                  <td>{plp.id}</td>
                  <td>{plp.name}</td>
                  <td>{plp.birthday}</td>
                  <td>{plp.cpf}</td>
                  <td>
                    <Button size="md" variant="primary">EDITAR</Button>
                    <Button size="md" variant="danger">EXCLUIR</Button>
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



// export default function Index() {
//   return (
//     <>página inicial</>
//   );
// }