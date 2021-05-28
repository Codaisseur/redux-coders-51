import './App.css';
import Homepage from './pages/HomePage'
import { Switch, Route, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from './store/user/selectors';
import { logout } from './store/user/actions';

// 1. Hello message with name
// 2. Adjust navbar (hide login and signup, show create a post)
// 3. logout button

const NavBar = () => {
  const profile = useSelector(getUserProfile);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: 20, marginLeft: 10 }}>
        <NavLink to="/" style={{ fontSize: 20 }}>Home</NavLink>
      </div>
      {!profile ? (
      <>
        <div style={{ marginRight: 20, marginLeft: 10 }}>
         <NavLink style={{ fontSize: 20 }} to="/login">Login</NavLink>
        </div>
        <div style={{ marginRight: 20, marginLeft: 10 }}>
          <NavLink style={{ fontSize: 20 }} to="/signup">Signup</NavLink>
        </div>
      </>
      ) : (
        <>
        <div style={{ marginRight: 20, marginLeft: 10 }}>
          <NavLink style={{ fontSize: 20 }} to="/newPost">Create a Post</NavLink>
        </div>
        <div>
          <h3>Hello {profile.name}!</h3> 
        </div>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/newPost" component={CreatePost} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
