import logo from './logo.svg';
import { getsets } from './helpers/sets';
import './App.css';
import Setlist from './components/Setlist';

import MTGCont from './components/MTGContext';
import Booster from './components/Booster';

function App() {

  
  return (
    <MTGCont>
      <div className="App">
          <header className="App-header">
        
            <Setlist/>
            <Booster/>
          </header>
          
        </div>

    </MTGCont>
     
  );
}

export default App;
