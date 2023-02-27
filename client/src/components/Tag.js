import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';

function Tag({ tagName }) {
  return (
    <>
      <Link to={`/tags/${tagName}/posts`}>
        <Chip
          color="secondary"
          sx={{ cursor: 'pointer' }}
          key={tagName}
          label={tagName}></Chip>
      </Link>
    </>
  );
}

export default Tag;
