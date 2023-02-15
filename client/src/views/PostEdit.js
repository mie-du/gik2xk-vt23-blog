import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../models/PostModel';

function PostEdit() {
  const emptyPost = {
    id: 0,
    title: '',
    body: '',
    imageUrl: '',
    tags: []
  };
  const [post, setPost] = useState(emptyPost);
  const params = useParams();
  const postId = params.id;

  useEffect(() => {
    if (!isNaN(postId)) {
      getOne(postId).then((post) => setPost(post));
    } else {
      setPost(emptyPost);
    }
    // eslint-disable-next-line
  }, [postId]);

  function onChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    setPost({ ...post, [field]: value });
  }

  return (
    <form>
      <TextField
        value={post.title}
        id="title"
        name="title"
        label="Titel"
        variant="standard"
        onChange={onChange}
      />{' '}
      <br />
      <TextField
        value={post.body}
        id="body"
        name="body"
        multiline
        minRows={4}
        label="Innehåll"
        variant="standard"
        onChange={onChange}
      />{' '}
      <br />
      <TextField
        value={post.imageUrl}
        id="imageUrl"
        name="imageUrl"
        label="Url till bild"
        variant="standard"
        onChange={onChange}
      />
      <br />
      <Button variant="filled">Spara</Button>
    </form>
  );
}

export default PostEdit;
