//import './App.css';
import './style.css';
import './bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <main>
      <ItemListContainer greeting="Tu universo de aromas"/> 
    </main>
    </div>
 
  );
}

export default App;
