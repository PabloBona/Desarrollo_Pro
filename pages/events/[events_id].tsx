import { useRouter } from 'next/router';
import InterestCard from '../../components/InterestCard';
import DetailHeader from '../../components/detailPage/DetailHeader';
import MainCont from '../../components/detailPage/MainCont';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { usePublications } from '../../lib/services/publication.services';
import { NextPageWithLayout } from '../page';

export const EventPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { events_id } = router.query;

  const { data: PublicationsResponse, error, isLoading } = usePublications();

  let publications = PublicationsResponse?.results;

  const p = publications?.filter((p) => {
    if (events_id == p.id) {
      return p
    }
  });

  return (
    <div>
      <DetailHeader categories={['concierto', 'artistas']} />

      <MainCont publication={p} />

      <InterestCard />

      <EventSlider
        title="Recientes"
        subtitle="Las personas últimamente están hablando de esto"
        events={publications}
      />
    </div>
  );
};

EventPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default EventPage;
