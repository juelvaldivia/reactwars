



import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { starwarsServiceApi } from './ducks/starwars.ducks';

function App() {

  const dispatch = useDispatch();
  const { starwars } = useSelector(state => state);

  useEffect( () => {
    console.log('esto es como el constructor')

    starwarsServiceApi.getPeople(dispatch)
  },[dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
            starwars.people.results.length <= 0 
            ?
            <span>No hay información</span>
            :
            starwars.people.results.map((person, index) => {
              return (
                <div key={index}>
                  <code>{person.name}</code>
                  <br/>
                </div>
              )
            })
          }
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
