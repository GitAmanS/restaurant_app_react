import logo from './logo.svg';
import './App.css';
import Header from './components/UI/Header';
import Summary from './components/UI/Summary';
import ItemList from './components/UI/ItemList';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App-content'>
      <Summary/>
      <ItemList/>
      </div>
      
    </div>
  );
}

export default App;
