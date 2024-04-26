import React from 'react'
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate()
  const submithandler = () =>{
    navigate('/show')
  }
  return (
    <div>
      <button className='w-20 h-10 mt-10 bg-red-300' onClick={submithandler}>Submit</button>
    </div>
  )
}

export default Entry