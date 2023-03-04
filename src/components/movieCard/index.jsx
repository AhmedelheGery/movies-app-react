import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.png';
import { POSTER_BASE_URL } from '../../utils/constants';
import './style.css';

const Card = ({ item }) => {
  return (
    <Link to={`${item.media_type}/${item.id}`} className='card-wrapper'>
      <div className='poster-wrapper'>
        <img
          className='poster-img'
          src={
            item.poster_path
              ? `${POSTER_BASE_URL}${item.poster_path}`
              : notFound
          }
          alt=''
        />
        <div className='rating-wrapper'>
          <span>{item?.vote_average?.toFixed(1)}</span>
        </div>
      </div>
      <div className='info'>
        <h4>{item.name ? item?.name : item?.title}</h4>
      </div>
    </Link>
  );
};

export default Card;
