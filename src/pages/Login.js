import { useState } from 'react';
import { login } from '../store/user/actions';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, history));
  }

  return (
  <div>
    <h2>Login</h2>
    <form onSubmit={onLoginSubmit}>
      <div>
        <label style={{ marginRight: 20 }}>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/> 
      </div>
      <div>
        <label style={{ marginRight: 20 }}>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> 
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}
 
export default Login;