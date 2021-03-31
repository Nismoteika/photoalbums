import React, { useEffect } from 'react';

function PhotoGridItem({ photo }) {
  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <h5>{photo.title}</h5>
      <img src={photo.thumbnailUrl} alt="" />
    </React.Fragment>
  );
}

export default PhotoGridItem;