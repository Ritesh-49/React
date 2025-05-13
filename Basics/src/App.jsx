import React, { useState } from 'react'
import A from './first'


/*const App = () => {

  const a = 10;
  return (
    <div>
      <h1>Hello {a}</h1>
      <h2>Heoo</h2>
    </div>
  )
}*/
/*const App = () => {

  const user = "Ritesh";
  const age = 21;
  return (
    <div>
      <h1>Hello {user}, age {age}</h1>
      <h2>Heoo</h2>
    </div>
  )
}*/

/*const App = () => {
  // const user = "Ritesh";

  const [user, setUser] = useState("Ritesh")

  function abc() {
    // console.log("hello");
    setUser("Yadav")
    
  }

  // abc()

  return (
    <div>
      <h1>Username is {user}</h1>
      <button onClick={abc}>Change User</button>
    </div>
  )
}*/
``

// to change anything in dom we use react hooks directly we cant change.  hooks are special type of function, it provides features of state management

/*const App = () => {
  const [a, setA] = useState(30)

  const changeA = () =>{
    // console.log("hello");
    
    setA(60);
  }
  
  return (
    <div>
      <h1>value of a is  {a}</h1>
      <button onClick={changeA}>ChangeA</button>
    </div>
  )
}*/


// counter uaing react

/*const App = () => {
  const [num, setNum] = useState(0)
  
  return (
    <div>
      <h1>Number is {num}</h1>
      <button onClick={function (){ setNum(num+10)}}>Increment</button>
      <button onClick={function () { 
        if(num >= 10){
        setNum(num-10)
        
      }}}>Decrement</button>
    </div>
  )
}*/

// styling using Tailwind css

const App = () =>{
   /*return (
    <div>
      <h1 className='text-8vw bg-red-700 text-white'>Hello hello hello</h1>
       
      <h2>hii</h2>
    </div>
   )*/

    return(
      <> :-  it is called fragment in react to return multiple element , it use instead of div
      <A/>
      <h3>Ritesh kumar</h3>
      <p>A developer</p>
      </>
    )

  
}




export default App