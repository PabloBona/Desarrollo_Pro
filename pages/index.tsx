import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Card } from '../components/card/card';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { useCategories } from '../lib/services/categories.services';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="flex items-center justify-center gap-2 ">
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/Artistas y conciertos'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/Torneos'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-red-300 h-fit">
        <EventSlider title='Populares en tu zona' events={[{
          img:'https://static.onecms.io/wp-content/uploads/sites/6/2020/03/20/game-stop-2000.jpg',
          title:'GameStop',
          description:'VideoGames shop',
          url:'gamestop.com',
          votes:"1'000'000"
        },{
          img:'https://www.arcosdorados.com/wp-content/uploads/2020/10/Espacio-al-Aire-Libre-McDonalds_CCI-scaled.jpg',
          title:"McDonald's",
          description:'Fast food restaurant',
          url:'mcdonalds.com',
          votes:"2'000'000"
        }
        ,{
          img:'https://assets.entrepreneur.com/content/3x2/2000/1645822504-GettyImages-1370781946.jpg',
          title:"Burguer King",
          description:'Fast food restaurant',
          url:'burguerking.com',
          votes:"500'000"
        }

        
        ]} />
        <Card/>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
//Aca llamamos al layout que comprende tanto header como footer; y entre medio la page que acabamos de crear
