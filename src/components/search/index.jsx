import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

const Search = ({ onSearch, value }) => {
  return (
    <div className='search'>
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className='search-input'
        placeholder='Find Movies / Tv Showes and More...'
        inputProps={{ 'aria-label': 'Find Movies / Tv Showes and More...' }}
        onChange={onSearch}
        value={value}
      />
    </div>
  );
};

export default Search;
