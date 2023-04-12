import React from 'react'

const InterestCard = () => {
  return (
    <div className='my-5 w-full h-fit bg-app-grayLighter p-11'>
      <h2 className='app-title-2 text-app-grayDark'>¡Hagamoslo más personal!</h2>
      <p className='app-subtitle-2 pt-2 pb-2 text-sm text-app-grayDark '>Selecciona tus interes para brindarte sugerencia de acuerdo a tus gustos </p>
      <ul className='flex flex-wrap gap-3 pb-3'>
        <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark'><button>Lorem</button></li>
        <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark'><button>Lorem</button></li>
        <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark'><button>Lorem</button></li>
        <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark'><button>Lorem</button></li>
        <li className='bg-white border-[1px] pl-4 pr-4 pt-2 pb-2 rounded-r-full rounded-l-full text-app-grayDark'><button>Lorem</button></li>
      </ul>
      <a className='text-app-blue text-sm' href="">Ver todos los intereses</a>
    </div>
  )
}

export default InterestCard