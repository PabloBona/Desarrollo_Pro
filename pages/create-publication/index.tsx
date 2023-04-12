import Icon_White from '../../components/assets/svg/Icon_White';

const index = () => {
  return (
    <div className='flex flex-row'>
      <aside className="bg-app-blue w-fit px-5 h-screen py-14 max-w-[230px] flex flex-col justify-between">
        <Icon_White />
        <span>

        
        <h2 className="app-subtitle-2 text-app-yellow p-5 mt-10">
          ¡Bienvenido, creador!
        </h2>
        <p className='flex flex-wrap app-texto-1 font-thin text-justify text-white'>
        A continuación puedes completar la info de la marca, artista o torneo que quieres cerca. 
        </p>
        </span>
      <a className='text-white' href="/help">Ayuda</a>
      </aside>
        <main className='pt-10'>
        <a className='app-subtitle-1 text-app-blue pl-10' href='/'>
            Back
        </a>
        <section className='flex flex-col justify-center ml-[10vw] w-full'>
            <div className='flex w-[50vw] h-4 bg-app-grayLighter  mt-10 rounded-full shadow-md'>
                <div className='bg-app-blue w-2/3 rounded-full'>
                </div>
            </div>
            <article>

            <h2 className='flex pt-12 pb-4 app-title-2'>Publicación</h2>
            <p className='app-texto-1 text-app-grayDark '>
                Información básica

            </p>

            </article>
            <form>
                <input className='w-full h-7 border-app-gray border-[1.5px] rounded-lg p-3 text-sm' type="text" placeholder='Titulo de publicacion'/>
                <span className='flex gap-2 py-4'>
                    <select className='h-9 border-app-gray border-[1.5px] rounded-lg text-app-gray text-sm w-1/2' name="tipo" id="">
                        <option value="concert">concierto</option>
                    </select>
                    <select className='h-9 border-app-gray border-[1.5px] rounded-lg text-app-gray text-sm w-1/2' name="tipo" id="">
                        <option value="concert">concierto</option>
                    </select>
                </span>
                <input className='w-full h-28 border-app-gray border-[1.5px] rounded-lg p-3 text-sm' type="text" placeholder='¿Por qué lo recomiendas?'/>
                <input className='w-full h-9 border-app-gray border-[1.5px] rounded-lg p-3 text-sm my-5' type="text" placeholder='Link de referencia'/>
            </form>
        <a href='/create-publication/second' className='flex justify-center mx-auto py-3 px-8 bg-app-blue rounded-full text-white app-texto-2'>
            Siguiente
        </a>
        </section>
        </main>
    </div>
  );
};

export default index;
