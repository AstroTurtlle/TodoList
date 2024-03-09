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

//TODO: 1. Create a new component called "Checkbox" to customize the checkbox
//TODO: 2. Create a new component called "Item"