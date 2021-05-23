import './App.css';
import Statistics from './Statistics';
import statisticalData from  './Statistic-data.json';

function App() {
  return (
    <div className="App">
      <Statistics title="Upload stats" stats={statisticalData}/>
    </div>
  );
}

export default App;
