import { Switch, Route } from 'react-router-dom';
import AllAlbums from '../pages/AllAlbums';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={AllAlbums} />

    </Switch>
  );
}

export default Router;
