import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(22);
  const [hobby, setHobby] = useState('Playing Basketball');

  const displayPerson = () => {
    setName('mupenzi');
    setAge(70);
    setHobby('I like coding');

  }

  return <>
  
  <h4><h2>Name:</h2>{name}</h4>;
  <h4><h2>Age:</h2>{age}</h4>;
  <h4><h2>Hobby:</h2>{hobby}</h4>;
  <button className='btn' onClick={displayPerson}>Show Mupenzi</button>
  </>
};

export default UseStateObject;
