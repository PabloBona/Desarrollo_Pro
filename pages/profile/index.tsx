import { useForm } from 'react-hook-form';
import { Layout } from '../../components/layout/Layout';
import ProfileBanner from '../../components/ProfileBanner';
import { getTokenFromCookie } from '../../lib/helpers/axios.helper.';
import { Results } from '../../lib/interfaces/user.interface';
import { userMe, userPhoto } from '../../lib/services/user.services';
import { NextPageWithLayout } from '../page';
import Link from 'next/link';

const ProfilePage = () => {

  
  if (getTokenFromCookie()) {
    const { data, error, isLoading, mutate} = userMe()
    
    const userData:Results = data?.results
  
    const { handleSubmit, register} = useForm({
      defaultValues:{
        image_url:''
      }
    })
  
    const user_id = userData?.profiles[0].user_id
    const onSubmit  = (img:any)=>{
  
      const onSubmit =  (data:any) => {
        // setValue('firstName',data.firstName.trim())
           
          userPhoto( user_id , data)
            
       };
    }

    return <div className='p-0'>
    <ProfileBanner />
    <section>
    <h2 className=' app-title-2 pt-16 pb-8'>Información de contacto</h2>

    <div className=' flex pb-5 w-full justify-center'>
      <span className='grid h-full'>
      {
        userData?.image_url?
        <img src={userData.image_url} alt="foto" />
        :
        <div>        
        <form className='w-full h-[9em] bg-app-grayLight rounded-xl flex items-center'>
        <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
  </svg>
        <input type="file"  className='h-10 w-10 opacity-0 absolute' {...register('image_url')} />
        <input type="submit" />
      </form>
      <p className='app-texto-1 text-app-gray p-2'>Inserte foto de perfil</p>
      </div>
      }
      

    
      </span>
    <div className='grid'>
      <div className='w-fit h-fit py-4 px-4 border-[1px] border-app-grayLight ml-6 rounded-lg'>
      <h3 className='app-texto-1 text-app-gray font-light text-sm'>
        First Name
      </h3>
      <p className='app-texto-2 '>
      {userData?.first_name}
      </p>
      </div>

      <div className='w-fit h-fit py-4 px-4 border-[1px] border-app-grayLight ml-6 rounded-lg'>
      <h3 className='app-texto-1 text-app-gray font-light text-sm'>
        Last Name
      </h3>
      <p className='app-texto-2 '>
      {userData?.last_name}
      </p>
      </div>
    </div>
    </div>

    </section>

    <div className=' flex flex-col mx-auto'>
      <h3>Mis intereses</h3>
      <ul className='flex flex-wrap'>
        <li className='p-3'>
          <button>
          <div className=' w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
      
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
        <li className='p-3' >
          <button>
          <div className='w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
          
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
        <li className='p-3' >
          <button>
          <div className='w-[200px] h-[5em] bg-app-grayLight rounded-xl flex items-center'>
      <svg className='flex ml-auto mr-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="#1B4DB1"/>
</svg>
    </div>
      <p className='text-app-gray app-texto-1 p-1'>Añade una categoría</p>
          </button>
          </li>
      </ul>
      <button className=' flex ml-auto mr-auto bg-app-blue p-3 pl-5 pr-5 mb-3 rounded-l-full rounded-r-full app-texto-2 text-white'>
        Guardar cambios
      </button>
    </div>

  </div>;
  }else{
    return(
    <Link href='/login'>    
      <p>Log in to see your profile</p>
    </Link>)
  }

 
};



export default ProfilePage;

ProfilePage.getLayout = (page:any) =>{
  return <Layout>{page}</Layout>
}