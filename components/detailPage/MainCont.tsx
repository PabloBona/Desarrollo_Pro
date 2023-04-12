import React from 'react'
import{ FC } from 'react';
import User_icon from '../assets/svg/User_icon';

interface IMainCont{
    title:string;
    description:string;
    url:string;
    votes:string;
    image:string;
} 

const MainCont: FC<IMainCont> = ({title,description,url,votes,image}) => {
  return (
    <div>
        <section className="flex mt-20 gap-2 sm:flex-wrap justify-center">
      <article className='flex w-1/3 flex-col'>
        <h1 className='app-title-1'>
            {title}
        </h1>
        <p className='app-texto-1 text-app-gray py-4'>
            {description}
        </p>
        <a  className='app-texto-2 text-app-blue pb-3' >
            {url}
        </a>
        <p className='flex pb-5'>
        <User_icon />  {votes}
        </p>
        <button className='bg-app-blue text-white app-texto-2 w-full p-2 rounded-2xl'>
           Votar 
        </button>
      </article>

      <img src={image} alt={title} className='w-1/3 rounded-md' />
    </section>
    </div>
  )
}

export default MainCont
