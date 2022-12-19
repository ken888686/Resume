import React from 'react';

type Prop = {
  position: string;
  duration: string;
  company: string;
  location: string;
  descriptions: string[];
};

function ExperienceCard({ position, duration, company, location, descriptions }: Prop) {
  return (
    <li className='flex flex-col'>
      <span className='text-sm'>{duration}</span>
      <h4 className='font-bold'>{position}</h4>
      <div className='flex items-center justify-between text-sm'>
        <span>{company}</span>
        <span>{location}</span>
      </div>
      <ul>
        {descriptions.map((x, i) => {
          return (
            <li key={i} className='text-sm'>
              {x}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default ExperienceCard;
