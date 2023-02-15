import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import PostItemLarge from '../components/PostItemLarge';
import { getOne } from '../models/PostModel';

function PostDetail() {
  //Ta emot ett id för att hämta ett inlägg posts/:id
  const [post, setPost] = useState({});
  const params = useParams();
  const postId = params.id;
  useEffect(() => {
    getOne(postId).then((post) => setPost(post));
  }, [postId]);
  console.log(post);

  return (
    <>
      {post ? (
        <>
          <PostItemLarge post={post} />
          <CommentList comments={post.comments} />
        </>
      ) : (
        <p>Inget inlägg att visa</p>
      )}

      <Button variant="filled">
        <Link to={`/posts/${postId}/edit`}>Ändra</Link>
      </Button>
      <Button variant="filled">Ta bort</Button>
    </>
  );
}

export default PostDetail;
