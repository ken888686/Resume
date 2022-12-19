import React from 'react';
import ExperienceCard from './ExperienceCard';
import Separator from './Separator';

function Experience() {
  return (
    <div>
      <h3 className='text-lg font-bold uppercase'>Experience</h3>
      <Separator />
      <ul className='flex flex-col gap-4'>
        <ExperienceCard
          position='Quality Engineer, Contract'
          duration='Aug 2022 - Present'
          company='TEKsystems at Apple'
          location='Kanagawa, Japan'
          descriptions={[
            'Siri Language Tester for Chinese and Taiwanese',
            'Maintain Swift automation test for Siri functions',
          ]}
        />
        <ExperienceCard
          position='Backend Engineer, Permanent'
          duration='Feb 2020 - Jun 2022'
          company='Yungching Realty Co., Ltd.'
          location='Taipei, Taiwan'
          descriptions={[
            'Project Executive in upgrading company-wide web service from ASP.Net Web API 2 to ASP.Net Core Web API 3.1. ',
            'Responsible for company-wide web service project. Eg. 3D house tour, District Search, Location Search.',
            'Responsible for Google API integration. Eg. Geocoding, Static Maps, Static Street View.',
            'Responsible for ASP.Net Core Web API 3.1 development and maintenance, MSSQL database management of the largest realtor in Taiwan, maintaining housing data for the whole of Taiwan.',
          ]}
        />
        <ExperienceCard
          position='Backend Engineer, Permanent'
          duration='Mar 2019 - Dec 2019'
          company='Screea Corp.'
          location='Taipei, Taiwan'
          descriptions={[
            'Responsible for ASP.Net Core Web API 2.1 and MySQL database development and maintenance for Taiwan’s largest e-commerce platforms (PCHome, Momo, Shopee, etc.)',
            'Responsible for web application with PHP CodeIgniter 4.',
          ]}
        />
        <ExperienceCard
          position='Embedded Software Engineer'
          duration='Aug 2016 - Mar 2019'
          company='Advantech Co., Ltd.'
          location='Taipei, Taiwan'
          descriptions={[
            'Responsible for IIoT PC-related to C# WinForm application development.',
            'Responsible for KMDF/WDM Driver development and maintenance.',
            'Responsible for Windows 7/10 image development',
          ]}
        />
      </ul>
    </div>
  );
}

export default Experience;
