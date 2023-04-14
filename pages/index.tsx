import Link from 'next/link';
import InterestCard from '../components/InterestCard';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';

import { NextPageWithLayout } from './page';

import SearchButton from '../components/assets/svg/SearchButton';
import { usePublications } from '../lib/services/publication.services';

const Home: NextPageWithLayout = () => {
  const { data: PublicationsResponse, error, isLoading } = usePublications();

  let publications = PublicationsResponse;

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>

        <div className="flex flex-col gap-4">
          <span>
            <input
              className="px-6 py-4 rounded-l-full w-full sm:w-[465px] "
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            <button className="bg-white rounded-r-full pt-4 pb-[22px] pr-6">
              <SearchButton />
            </button>
          </span>
          <div className="flex items-center justify-center gap-2 ">
            <Link href={'/category/Marcas-y-tiendas'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400 pl-3 pr-3">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/Artistas y conciertos'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400 pl-3 pr-3">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/Torneos'}>
              <button className="rounded-full bg-white p-1.5 text-sm text-gray-400 pl-3 pr-3">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className=" h-fit">
        <EventSlider
          title="Populares en tu zona"
          subtitle="Lo que las personas piden más"
          events={publications?.results}
        />
        <InterestCard />
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={publications?.results}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
//Aca llamamos al layout que comprende tanto header como footer; y entre medio la page que acabamos de crear
