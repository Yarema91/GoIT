import './App.css';
import Profile from './Profile';
import user from  './user.json';

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
