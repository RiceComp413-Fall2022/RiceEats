import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { realRetrieveMenus, RetrieveMenus } from '../utils/APICalls';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import TextInput from '../components/TextInput';

export default function WestDetails() {
  const [menus, setMenus] = useState(RetrieveMenus());
  const west_menu = menus.West;

  useEffect(() => realRetrieveMenus((response) => setMenus(response.data)), 
    [setMenus]);

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
        {west_menu.menuItemDiet.map(item => (
          <tr>
            <td>{item.menuItem_id}</td>
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