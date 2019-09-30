import React from 'react';
import './App.css';
import Counters from './componenets/Counters';
import NavBar from './componenets/NavBar';

function App()  {
   
  
          return (
            <React.Fragment>
              <div className="App">
                    <NavBar></NavBar>
                    <main className="container">
                    <Counters></Counters>
                    </main>
              </div>
            </React.Fragment>
          );

}
export default App;
