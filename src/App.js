import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [movies, getMovies] = useState([]);
  const [type, setType] = useState('top_rated');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=fa73fc5e116e4f5899e71120fa20d4de&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => getMovies([data]));
  }, [type]);

  return (
    <div className="App">
      <header>
        <h1>THE MOVIE DATABASE</h1>
        <div className='nav-links'>
          <button onClick={() => { setType('top_rated')}}>Top Rated</button>
          <button onClick={() => { setType('popular') }}>Popular</button>
          <button onClick={() => { setType('upcoming') }}>Upcoming</button>
        </div>
      </header>
      <div className='items'>
        {
          movies.map((mov) => {
            console.log(mov)
            return (
              Object.values(mov.results).map((movie) => {
                const { id, title, poster_path, popularity, vote_average } = movie;
                console.log(poster_path)
                return (
                  <Card key={id} name={title} vote={vote_average} img={poster_path} popularity={popularity} />
                )
              })
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
