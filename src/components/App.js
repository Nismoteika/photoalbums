import Header from '../components/Header';
import Router from '../components/Router';

import '../styles/App.sass';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="wrapper__content">
        <Router />
      </main>
    </div>
  );
}

export default App;
