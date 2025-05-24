import { useState } from 'react'

import StatusBar from './components/Online'

import SaveButton from './components/button'

import FormName from './components/FormName'

import Form from './components/Form'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StatusBar />
      <SaveButton /> */}
      {/* <FormName /> */}

      <Form />
      
    </>
  )
}

export default App
