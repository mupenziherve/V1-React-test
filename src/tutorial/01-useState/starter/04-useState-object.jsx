import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState ({
    name:"mupenzi",
    age: 21,
    hobby: "playing basketball"

  })

  const displayPerson = () => {
    setPerson({...person, name:"lucky" })

  }

  return ( <>
  
  <h4><h2>Name:</h2>{person.name}</h4>
  <h4><h2>Age:</h2>{person.age}</h4>
  <h4><h2>Hobby:</h2>{person.hobby}</h4>
  <button className='btn' onClick={displayPerson}>Show Mupenzi</button>
  </>
  );
};

export default UseStateObject;
