import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import UserItemSmall from './UserItemSmall';

function PostItemSmall({ post }) {
  return (
    <>
      <div>
        Skrivet av:
        <UserItemSmall user={post.author} />
      </div>
      <div>
        <div>Skrivet: {post.createdAt}</div>
        <Typography variant="h5" component="h3">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </Typography>
        <img alt={post.title} height="50" width="50" src={post.imageUrl} />
        <p>{post.body}</p>
        <ul>
          {post.tags &&
            post.tags.map((tag) => {
              return (
                <li key={tag}>
                  <Tag tagName={tag} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default PostItemSmall;
