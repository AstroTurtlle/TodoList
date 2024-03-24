import './App.css';
import List from './Components/List';
import { Helmet } from 'react-helmet';

function App() {
  const TITLE = 'Todo App';
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <header className="App-header">
        ciau
        <button>Click me</button>
      </header>
      <List />
    </div>
  );
}

export default App;
