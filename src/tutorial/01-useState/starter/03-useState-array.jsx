import { data } from "../../../data"; 
import React from "react";


const UseStateArray = () => {
  const [people, setPeaple] = React.useState(data);
  const removeItem = (id) =>{
    console.log(id);
    const newPeople = people.filter((person)=> person.id !== id)
    setPeaple(newPeople);
  };
  const clearAllItems = () =>{
    setPeaple([]);
  };


  return (<div>
    {people.map((person) =>{
      const {id, name} = person;
      // console.log(person);
      return (
        <div key={id}>
          <h3>{name}</h3>
          <button type="button" className="" onClick={() => removeItem(id)}>remove</button>

        </div>
      );
    })}
    <button type="button" style={{marginTop:"2rem"}} className="btn" onClick={clearAllItems}>Clear Item</button>
  </div>
  );
};

export default UseStateArray;
