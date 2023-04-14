import React from 'react'
import{ FC } from 'react';
import User_icon from '../assets/svg/User_icon';
import { Publication } from '../../lib/interfaces/publications.interface';

interface IMainCont{
    publication : Publication[] | undefined
} 

const MainCont: FC<IMainCont> = ({publication}) => {


  return (
    <div>
        <section className="flex mt-20 gap-2 sm:flex-wrap justify-center">
      <article className='flex w-1/3 flex-col'>
        <h1 className='app-title-1'>
            {publication? publication[0].title : null}
        </h1>
        <p className='app-texto-1 text-app-gray py-4'>
            {publication? publication[0]?.description : null}
        </p>
        <a  className='app-texto-2 text-app-blue pb-3' >
            {publication? publication[0]?.reference_link : null}
        </a>
        <p className='flex pb-5'>
        <User_icon />  {publication? publication[0]?.votes_count : null}
        </p>
        <button className='bg-app-blue text-white app-texto-2 w-full p-2 rounded-2xl'>
           Votar 
        </button>
      </article>

      <img src={publication? publication[0]?.images?.toString() :''} alt={publication? publication[0]?.title : ''} className='w-1/3 rounded-md' />
    </section>
    </div>
  )
}

export default MainCont
