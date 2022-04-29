
import { Lock, UserAdmin } from 'grommet-icons';

function Login() {

  const render = () => {
    return (
      <div className="Access-Layout__Card-Content">
        <div>
          <h1 className="Title-Text mb-20">Sign in</h1>
          <div className="Textfield-With-Icon w-70">
            <UserAdmin />
            <input
              type="email"
              name="user_email"
              placeholder="Type your email"
            />
          </div>
          <div className="Textfield-With-Icon w-70 mt-10">
            <Lock />
            <input
              type="password"
              name="user_email"
              placeholder="Type your password"
            />
          </div>
          <button className="Button Button__Primary w-70 mt-20">Sign in</button>
          <p className="Link-Text mt-30">Or create an account here.</p>
        </div>

        <div className="bg-primary_light">
          a
        </div>
      </div>
    );
  }

  return render();
}

export default Login;