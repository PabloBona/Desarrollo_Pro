import React from 'react'
import Icon_White from '../../components/assets/svg/Icon_White'
import Swal from 'sweetalert2'

const second = () => {
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
        <a className='app-subtitle-1 text-app-blue pl-10' href='/create-publication'>
            Back
        </a>
        <section className='flex flex-col justify-center ml-[10vw] w-full'>
            <div className='flex w-[50vw] h-4 bg-app-blue mt-10 rounded-full shadow-md'>
                
            </div>
            <article>

            <h2 className='flex pt-12 pb-4 app-title-2'>Fotos</h2>
            <p className='app-texto-1 text-app-grayDark '>
                Selecciona máximo tres fotos para crear una galería
            </p>

            </article>

            <article className='border-app-gray rounded-lg my-7 border-2 h-fit flex gap-3 justify-between p-10'>
                <button className='bg-app-gray w-1/5 h-[20vh] rounded-2xl '>
                <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
                </button>
                <button className='bg-app-gray w-1/5 h-[20vh]  rounded-2xl '>
                <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
                </button>
                <button className='bg-app-gray w-1/5 h-[20vh]  rounded-2xl'>
                <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
                </button>
            </article>
            
        <button onClick={()=>{
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Published!',
                    'success'
                  )
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                  )
                }
              })
        }} className='flex justify-center mx-auto py-3 px-8 bg-app-blue rounded-full text-white app-texto-2 w-fit mt-5'>
            Publicar
        </button>
        </section>
        </main>
    </div>
  )
}

export default second