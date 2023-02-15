import { useEffect, useState } from 'react';
import { getAll } from '../models/PostModel';
import PostItemSmall from './PostItemSmall';

function PostList({ path }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll(path).then((posts) => setPosts(posts));
  }, [path]);

  return (
    <ul>
      {posts &&
        posts.map((post) => {
          return (
            <li key={`postId_${post.id}`}>
              <PostItemSmall post={post} />
            </li>
          );
        })}
    </ul>
  );
}

export default PostList;
