import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchGetRequests } from '../../utils/fetchRequest';
import { BACK_DROP_BASE_URL, POSTER_BASE_URL } from '../../utils/constants';
import './style.css';
import Loading from '../loadingPage';
import { useEffect, useState } from 'react';
const MovieDetails = () => {
  const params = useParams();
  const DETAILS_BASE_URL = `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=14bdd69ce887376edfafb09f23f78fe9`;
  const { data: apiDataDetails, isLoading } = useQuery(['movieDetails'], () =>
    fetchGetRequests(`${DETAILS_BASE_URL}`)
  );

  const details = apiDataDetails?.response;
  if (isLoading) {
    return <Loading />;
  }

  return (
    details && (
      <div className='details-wrapper'>
        <div className='cover-img-wrapper'>
          <img
            className='cover-image'
            src={`${BACK_DROP_BASE_URL}${details?.backdrop_path}`}
            alt='cover_img'
          />
        </div>
        <div className='details_info'>
          <div className='poster-wrapper'>
            <img
              className='poster-image'
              src={`${POSTER_BASE_URL}${details?.poster_path}`}
              alt=''
            />
          </div>
          <div className='details'>
            <h3>{details?.first_air_date}</h3>
            <h2 className='details_title'>
              {details.name ? details.name : details.title}
            </h2>
            <p>{details?.overview.slice(0, 150)}.</p>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
