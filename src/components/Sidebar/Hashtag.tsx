import React from 'react';

function Hashtag({ title }: { title: string }) {
  return (
    <span className='rounded-full -bg--primary px-2 py-1 shadow shadow-gray-900'>{title}</span>
  );
}

export default Hashtag;
