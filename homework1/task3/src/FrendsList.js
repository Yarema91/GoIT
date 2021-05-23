// import friends from './friends.json';
import Style from './App.css';


// {
// "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
// "name": "Mango",
// "isOnline": true,
// "id": 1812
// }




const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">{friends.map(friend => (<li className="item" >
        <span className="status" >{friend.isOnline === true ? 'online': null}</span>
        <img className="avatar" src={friend.avatar} alt="" width="48" />
        <p className="name">{friend.name}</p>
    </li>))}
            
        </ul>
    )
}

export default FriendList;