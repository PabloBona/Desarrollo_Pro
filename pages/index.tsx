import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log({ inter });

  return (
    <>
      <div className={`bg-red-300 text-white ${inter.className}`}>Hola</div>
    </>
  );
}
