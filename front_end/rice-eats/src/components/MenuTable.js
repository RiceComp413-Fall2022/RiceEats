import Table from 'react-bootstrap/Table';

function MenuTable() {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
              </tr>
            </tbody>
          </Table>
        );
      }
      
      export default MenuTable;