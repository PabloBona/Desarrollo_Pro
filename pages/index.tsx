import Logo from '../components/assets/logo/Logo';
import Button from '../components/buttons/Button';
import { Layout } from '../components/layout/Layout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div>
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
          <div className="flex items-center justify-center gap-2">
            <Button>Marcas y tiendas</Button>
            <Button>Marcas y tiendas</Button>
            <Button>Marcas y tiendas</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
