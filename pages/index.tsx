import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log({ inter });

  return (
    <>
      <div className={`bg-green-500 text-primary-blue  ${inter.className}`}>
        Hola
      </div>
    </>
  );
}
