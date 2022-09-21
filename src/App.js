//import './App.css';
import './style.css';
import './bootstrap.min.css';

import NavBar from './components/NavBar';
import Cuerpo from './components/Cuerpo';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <main>
      <ListContainer></ListContainer>   
      <Cuerpo/>
    </main>
    </div>
 
  );
}

export default App;
