import { useState } from "react";

const UseStateBasics = () => {
 // console.log(useState(1));
  //  const value = useState('hello')[0];
  //  const func = useState('hello')[1];
  //  console.log(value);
  //  console.log(func);

  const [count, setCount] = useState(0);


    const Increament = () =>{
      setCount(count + 1);
  

  };

  return(
  <div>
   

    <h4>You clicked<h1>{count} </h1> times</h4>
    <button type="button" className="btn" onClick={Increament} >Increment</button>
    <h1></h1>
    

    </div>
    );

};

export default UseStateBasics;
