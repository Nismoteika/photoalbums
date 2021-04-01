import { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header({ location }) {
  const [viewHomeBtn, setViewHomeBtn] = useState(false);

  useEffect(() => {
    if(location.pathname.split('/')[1] === 'album')
      setViewHomeBtn(true)
    else
      setViewHomeBtn(false)
  }, [location])
  return (
    <header className="header">
      { viewHomeBtn &&
        <Link
          to="/"
          className="header__link">
          &lt; Все альбомы
        </Link>
      }
      <h2>Photos albums</h2>
    </header>
  );
}

export default withRouter(Header);
