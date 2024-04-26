import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

const Details = () => {
    const navigate=useNavigate()
    const {id} =useParams()
   
  return (
    <div><h1 className='text-2xl'>Details</h1>
    <h1 className='text-xl mt-5'>Book Id : <samp className='font-extrabold'>{id}</samp></h1>
    <button px-3 py-1 rounded-md
    className='mt-5 bg-red-300 px-9 py-4 rounded-md'
    onClick={() => navigate(-1)}>GoBack


    
        
    </button>
    </div>
  )
}

export default Details