import { CircularProgress } from '@mui/material';
import './style.css';
const Loading = () => {
  return (
    <div className='loading-wrapper'>
      <CircularProgress />
    </div>
  );
};

export default Loading;
