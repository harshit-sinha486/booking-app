import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import React from 'react';

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='fas fa-arrow-left rounded-full p-4 bg-blue-500 text-white'>
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton