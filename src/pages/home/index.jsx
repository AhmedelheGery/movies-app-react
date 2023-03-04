import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Filter from '../../components/filteration';
import Loading from '../../components/loadingPage';
import Card from '../../components/movieCard';
import Search from '../../components/search';
import { fetchGetRequests } from '../../utils/fetchRequest';
import { BASE_URL, BASE_URL_SEARCH } from '../../utils/constants';
import './style.css';

const Home = () => {
  const [resultList, setResultList] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [filterVal, setFilterVal] = useState('');

  const { data: apiList, isLoading } = useQuery(
    ['moviesAndShowesList'],
    () => fetchGetRequests(`${BASE_URL}`),
    {
      enabled: searchVal.length ? false : true,
      onSuccess: (data) => setResultList(data?.response?.results),
    }
  );

  const { data: apiSearchedList, isLoading: isSearchableLoading } = useQuery(
    ['moviesAndShowesList', searchVal],
    () => fetchGetRequests(`${BASE_URL_SEARCH}&query=${searchVal}`),
    {
      keepPreviousData: true,
      staleTime: 5000,
      enabled: searchVal.length ? true : false,
      onSuccess: (data) => setResultList(data?.response?.results),
    }
  );

  const filterOptions = [
    {
      label: 'Movie',
      value: 'movie',
    },
    {
      label: 'Tv',
      value: 'tv',
    },
    {
      label: 'Person',
      value: 'person',
    },
  ];

  const onSearch = (e) => {
    setSearchVal(e.target.value);
    setFilterVal('');
  };

  const onFilter = (e) => {
    setFilterVal(e.target.value);
  };

  useEffect(() => {
    if (filterVal.length) {
      const data = searchVal.lemgth
        ? apiSearchedList?.response?.results
        : apiList?.response?.results;
      const filterList = data?.filter((item) => item.media_type === filterVal);
      setResultList([...filterList]);
    }
  }, [filterVal]);

  return (
    <div className='home-wrapper'>
      <div className='header-wrapper'>
        <div className='search-wrapper'>
          <Search value={searchVal} onSearch={onSearch} />
        </div>
        <div className='filter-wrapper'>
          <Filter
            onChange={onFilter}
            value={filterVal}
            defaultValue='Media type'
            options={filterOptions}
          />
        </div>
      </div>
      {isLoading || isSearchableLoading ? (
        <Loading />
      ) : (
        <div className='content'>
          <h3 className='title'>Latest Movies & Tv Showes</h3>
          <div className='result-list'>
            {resultList.length ? (
              resultList?.map((item) => (
                <Card key={item.id} item={item} baseURL={BASE_URL} />
              ))
            ) : (
              <p>No items to show..</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
