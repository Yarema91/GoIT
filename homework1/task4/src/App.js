import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory';
import './App.css';

function App() {
  return (
    <div className="App">
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
