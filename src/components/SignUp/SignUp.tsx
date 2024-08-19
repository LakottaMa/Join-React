import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Button from '../common/Button';


const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-container-signup">
            <div className="signup-container">
                <h1>Sign up</h1>
                <form className='login-form'>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Confirm password" />

                    <div className='auth-checkbox'>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">I accept the </label>
                        <Link to="/privacy-policy">Privacy policy</Link>
                    </div>

                    <div className="login-buttons">
                        <Button type="submit"
                            label="Sign up"
                            onClick={() => navigate('/login')}
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
export default SignUp