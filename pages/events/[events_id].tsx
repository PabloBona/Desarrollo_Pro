import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
import DetailHeader from '../../components/detailPage/DetailHeader';
import MainCont from '../../components/detailPage/MainCont';
import InterestCard from '../../components/InterestCard';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';

export const EventPage: NextPageWithLayout = () => {
  const router = useRouter();
  const  {events_id}  = router.query;


  return <div>

    <DetailHeader categories={['concierto','artistas']} />

    <MainCont title='GameStop' description='VideoGames shop' url='gamestop.com' votes="1'000'000" image='https://static.onecms.io/wp-content/uploads/sites/6/2020/03/20/game-stop-2000.jpg' />

    <InterestCard />

    <EventSlider title='Recientes'
        subtitle='Las personas últimamente están hablando de esto'
        events={[{
          img:'https://static.onecms.io/wp-content/uploads/sites/6/2020/03/20/game-stop-2000.jpg',
          title:'GameStop',
          description:'VideoGames shop',
          url:'gamestop.com',
          votes:"1'000'000",
          id:'0'
        },{
          img:'https://www.arcosdorados.com/wp-content/uploads/2020/10/Espacio-al-Aire-Libre-McDonalds_CCI-scaled.jpg',
          title:"McDonald's",
          description:'Fast food restaurant',
          url:'mcdonalds.com',
          votes:"2'000'000",
          id:'1'
        }
        ,{
          img:'https://assets.entrepreneur.com/content/3x2/2000/1645822504-GettyImages-1370781946.jpg',
          title:"Burguer King",
          description:'Fast food restaurant',
          url:'burguerking.com',
          votes:"500'000",
          id:'2'
        }

        
        ]} />


    <p>{events_id} este es el id que se podra usar cuando funcion la Api</p>
  </div>;
};

EventPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default EventPage;
