import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { apiBase } from '../api';

function AlbumGridItem({ album }) {
  const [countPics, setCountPics] = useState(0);
  const [thumbUrl, setThumbUrl] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/albums/${album.id}/photos`)
      .then(res => res.json())
      .then(data => {
        setCountPics(data.length);

        var thumbUrl = data[0].thumbnailUrl;
        thumbUrl.replace('https', 'http');
        setThumbUrl(thumbUrl);
      })
  }, [])

  return (
    <li>
      <Link to={`/album/${album.id}`} className="grid-list__item">
        <h5>{album.title}</h5>
        <img src={thumbUrl} alt="" />
        <span>Картинок: {countPics}</span>
      </Link>
    </li>
  );
}

export default AlbumGridItem;