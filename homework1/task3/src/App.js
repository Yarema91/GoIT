import './App.css';
import FriendList from './FrendsList';
import friends from './friends.json';
import './index.css';


function App() {
  return (
    <div className="App">
      <FriendList friends={friends}/>
    </div>
  );
}

export default App;
