import React from 'react';
import Separator from '../Common/Separator';

function Skill() {
  return (
    <div className=''>
      <h3 className='font-bold uppercase -text--primary'>skills</h3>
      <Separator />
      <ul className='-text--light'>
        <li>C#</li>
        <li>.NET Core 3.1</li>
        <li>SQL</li>
        <li>Typescript</li>
      </ul>
    </div>
  );
}

export default Skill;
