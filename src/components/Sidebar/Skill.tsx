import React from 'react';
import Separator from '../Common/Separator';
import Hashtag from './Hashtag';

function Skill() {
  return (
    <div className=''>
      <h3 className='text-lg font-bold uppercase -text--primary'>skills</h3>
      <Separator />
      <ul className='flex items-center gap-2 -text--light'>
        <Hashtag title='C#' />
        <Hashtag title='.NET Core 3.1' />
        <Hashtag title='SQL' />
        <Hashtag title='Typescript' />
      </ul>
    </div>
  );
}

export default Skill;
