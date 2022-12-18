import React from 'react';

function Avatar({ img, title }: { img: string; title: string }) {
  return (
    <figure className='flex items-center justify-center'>
      <img className='h-32 w-32 rounded-[50%] object-cover object-top' src={img} alt={title} />
    </figure>
  );
}

export default Avatar;
