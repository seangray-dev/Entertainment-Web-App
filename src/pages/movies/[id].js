import ItemDetail from '@/components/ItemDetail';
import { fetchItemDetails } from '../../../lib/tmdb';

const MovieDetail = ({ item }) => {
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const item = await fetchItemDetails(id, 'Movie');
  return { props: { item } };
}

export default MovieDetail;
