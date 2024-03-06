import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Summary from './components/UI/Summary';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-content'>
      <Summary/>
      </div>
      
    </div>
  );
}

export default App;
