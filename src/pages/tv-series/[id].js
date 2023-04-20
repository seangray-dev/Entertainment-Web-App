import ItemDetail from '@/components/ItemDetail';
import { fetchItemDetails } from '../../../lib/tmdb';

const TVSeriesDetail = ({ item }) => {
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const item = await fetchItemDetails(id, 'TV Series');
  return { props: { item } };
}

export default TVSeriesDetail;
