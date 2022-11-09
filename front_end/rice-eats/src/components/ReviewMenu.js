import React from 'react';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import TextInput from '../components/TextInput';
import Table from 'react-bootstrap/Table';
import LoadingWheel from '../components/LoadingWheel';
import Button from './Button';
import Text from './Text';

export default function ReviewMenu(props) {
  const menu = props.menu;
  const dateMeal = props.dateMeal;
  const setDateMeal = props.setDateMeal;

  return (
    <>
      {!menu &&
        <div style={{marginTop:"20%", display:"flex", justifyContent:"center"}}>
          <LoadingWheel />
        </div>
      }
      {menu &&
        <div style={{
          marginLeft: "12%",
          marginRight: "12%"
          }}>
          <div style={{marginBottom: 15}}>
            <TopBar />
          </div>
          <div style={{marginBottom: 30}}>
            <MealPicker dateMeal={dateMeal} setDateMeal={setDateMeal}/>
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
              {menu.menuItemDiet.map((item, index) => (
                <tr key={index}>
                  <td>{item.menuItem_id}</td>
                  <td>{item.rating}</td>
                  <td><TextInput/></td>
                  <td><TextInput/></td>
                </tr>
              ))}
              </tbody>
            </Table>
            <a href='/'><Button><Text>Submit</Text></Button></a>
          </div>
        </div>
      }
    </>
  );
}