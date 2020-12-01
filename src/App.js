import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = "bc5b9997";
  const APP_KEY = "6b9ce657f7ddb1bfb45c22296711d712";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
