import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
export const CategoryPage: NextPageWithLayout = () => {
  return <></>;
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
