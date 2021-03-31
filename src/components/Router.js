import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Album from '../pages/Album';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />

      <Route exact path="/album/:id" component={Album} />

    </Switch>
  );
}

export default Router;
