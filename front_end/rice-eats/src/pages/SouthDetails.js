import React from 'react';
import Table from 'react-bootstrap/Table';
import { RetrieveMenus } from '../utils/APICalls';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import TextInput from '../components/TextInput';

export default function SouthDetails() {
  const menus = RetrieveMenus();
  const south_menu = menus.south;
  return (
    <div style={{
      marginLeft: "12%",
      marginRight: "12%"
      }}>
    <div style={{marginBottom: 15}}>
      <TopBar />
     </div>
     <div style={{marginBottom: 30}}>
      <MealPicker />
    </div>
    <div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Item</th>
          <th>Current Rating</th>
          <th>My Rating</th>
          <th>Comments</th>
        </tr>
        </thead>
        <tbody>
        {south_menu.menuItems.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.rating}</td>
            <td><TextInput/></td>
            <td><TextInput/></td>
          </tr>
        ))}
        </tbody>
      </Table>
      <a href='/'><button>Submit</button></a>
    </div>
    </div>
  );
}