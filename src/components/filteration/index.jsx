import { MenuItem, Select } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import './style.css';
const Filter = ({ value, onChange, defaultValue, options }) => {
  return (
    <div className='filter-wrapper'>
      <FilterListIcon className='filter-icon' />
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        className='select'
      >
        <MenuItem disabled value=''>
          {defaultValue}
        </MenuItem>
        {options?.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Filter;
