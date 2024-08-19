import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Button from '../common/Button';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="login-header">
        <span>Not a Join user?</span>
        <Button type="button" label="Sign up"
          onClick={() => navigate('/signup')} />
      </div>

      <div className="login-container">
        <h1>Log in</h1>
        <form className='login-form'>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <div className='auth-checkbox'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className="login-buttons">
            <Button type="submit"
              label="Log in"
              onClick={() => navigate('/summary')}
            />
            <Button
              type="button"
              label="Guest login"
              onClick={() => navigate('/summary')}
            />
          </div>

        </form>
      </div>

      <div className="login-footer">
        <Link to="/privacy-policy">Privacy policy</Link>
        <Link to="/legal-notice">Legal notice</Link>
      </div>
    </div>
  );
};

export default Login;