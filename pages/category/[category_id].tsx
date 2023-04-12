import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
import CategoryBanner from '../../components/categoryPage/CategoryBanner';
import DetailHeader from '../../components/detailPage/DetailHeader';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import InterestCard from '../../components/InterestCard';
export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;

  return (
    <div>
     <CategoryBanner category={category_id}  />
      <DetailHeader categories={['tiendas','marcas']}/>

      <EventSlider title='Populares en tu zona'
        subtitle='Lo que las personas piden más'
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
        <EventSlider title='Sugerencias para ti'
        subtitle='Publicaciones que podrías colaborar'
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
        
      <EventSlider title='Populares en tu zona'
        subtitle='Lo que las personas piden más'
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
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
