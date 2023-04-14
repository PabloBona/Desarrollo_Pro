import React from 'react'
import { FC } from 'react';

interface IDetailHeader{
    categories:[any,any]
}

const DetailHeader: FC<IDetailHeader> = ({categories}) => {

  return (
    <section className="flex justify-between bg-white shadow-app-card app-banner p-5 pl-20 m-0 -mt-4">
      <ul className='flex flex-wrap gap-3 pb-3'>
      {categories?.map((e) => (
            <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark' key={e}>{e}</li>
          ))}
      </ul>
      <input
        className="px-6 py-4 rounded-3xl w-1/2 shadow"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      ></input>
    </section>
  )
}

export default DetailHeader