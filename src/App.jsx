import React from 'react'
import RoutesComponet from './Routes/RoutesComponet'

import Nav from './Components/Nav'
import axios from 'axios'


const App = () => {
  const getusers= async()=>{
    try{
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      console.log(data);

    }catch(error){
      console.log(error);
    }

  }
  return (
    <div className='w-[80%] h-screen m-auto  gap-5 bg-gray-400'>
      <Nav />
      <button className='mt-5 bg-green-300 px-9 py-4 rounded-md'onClick={getusers}>go</button>
      <RoutesComponet/>
     
    </div>
  )
}

export default App