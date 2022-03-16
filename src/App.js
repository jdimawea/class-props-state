import logo from './logo.svg';
import './App.css'; 
import TVShow from './components/TVShow'
import TVShowObj from './components/TVShowObj'

function App() {
  const tvshow1 = {title: "Friends", episodes: 236, hashtags:["sit-com", "classic"]}
  return (
    <div className="App">
      < TVShow title="The Witcher" episodes={8} hashtags={[ "Fantasy", "Monsters", "hmmmmm" ]}/>
      < TVShow title="The Expanse" episodes={70} hashtags={[ "Sci-Fi", "Space", "Aliens" ]}/>
      < TVShowObj tvshow={tvshow1} />
    </div>
  );
}

export default App
