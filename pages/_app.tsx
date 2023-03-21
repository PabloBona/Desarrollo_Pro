import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from '../lib/helpers/fetcher.helper';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <h1>Hola soy _app.tsx</h1>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false,
          fetcher,
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  );
}
//Este component envuelve toda nuestra aplicacion siempre se muestra, es decir se carga para todos los componentes
//Como se carga para todos los componentes aca tenemos que importar los estilos globales
