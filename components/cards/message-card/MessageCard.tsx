import Link from 'next/link';
import Button from '../../buttons/Button';
export const MessageCard = () => {
  return (
    <div className="bg-app-grayLighter p-7 flex flex-col gap-6 min-h-[250px] justify-center">
      <div>
        <h4 className="app-title-2 text-app-grayDark pb-3">
          ¡Hagámoslo más personal!
        </h4>
        <p className="app-subtitle-2">
          Selecciona tus interés para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
      </div>
      <div className="flex items-center gap-4 overflow-x-auto ">
        {mockInterest.map((item, index) => (
          <Button key={index} size="md" className="whitespace-nowrap">
            {item}
          </Button>
        ))}
      </div>
      <Link className="app-subtitle-2 text-app-blue" href={'#'}>
        Ver todos los intereses
      </Link>
    </div>
  );
};

const mockInterest = [
  'Restaurantes',
  'Artistas Mexicanos',
  'Rock',
  'Artistas Colombia',
  'Indie',
];
