import logo from './logo.svg';
import './App.css';
import Homepage from './pages/HomePage'
import { Switch, Route, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';


const NavBar = () => {
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ marginRight: 20, marginLeft: 10 }}>
      <NavLink to="/" style={{ fontSize: 20 }}>Home</NavLink>
    </div>
    <div style={{ marginRight: 20, marginLeft: 10 }}>
      <NavLink style={{ fontSize: 20 }} to="/login">Login</NavLink>
    </div>
    <div style={{ marginRight: 20, marginLeft: 10 }}>
      <NavLink style={{ fontSize: 20 }} to="/signup">Signup</NavLink>
    </div>
    <div style={{ marginRight: 20, marginLeft: 10 }}>
      <NavLink style={{ fontSize: 20 }} to="/newPost">Create a Post</NavLink>
    </div>
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
