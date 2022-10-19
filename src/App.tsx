import './App.css';
import Fetcher from './services/rest.service';

function App() {
  console.log('==REACT_APP_API_URL', process.env.REACT_APP_API_URL);
  console.log('==REACT_APP_API_KEY', process.env.REACT_APP_API_KEY);

  const test = async () => {
    const rest = await Fetcher.get('/?s=marvel&page=2');
    // const rest = await Fetcher.get('/');
    console.log('===rest: ', rest);
  }

  return (
    <div className="App">
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
