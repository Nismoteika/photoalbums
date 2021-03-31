import { useEffect } from 'react';

function PhotoGridItem({ photo }) {
  useEffect(() => {
  }, [])

  return (
    <li>
      <h5>{photo.title}</h5>
      <img src={photo.thumbnailUrl} alt="" />
    </li>
  );
}

export default PhotoGridItem;