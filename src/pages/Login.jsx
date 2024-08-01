import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-child" />
      <img
        className="outline-users-user"
        alt=""
        src="/outline--users--user.svg"
      />
      <img
        className="outline-users-user"
        alt=""
        src="/outline--mesages-conversation---letter.svg"
      />
      <header className="main">
        <div className="main-child" />
        <img
          className="group-84152-1"
          loading="lazy"
          alt=""
          src="/group-84152-1@2x.png"
        />
      </header>
      <section className="login-container">
        <div className="login-form">
          <img className="logo-placeholder-icon" loading="lazy" alt="" />
          <div className="credentials">
            <form className="email-input">
              <div className="email-input-child" />
              <div className="email-field">
                <div className="email-label">
                  <div className="email-box">
                    <h1 className="log-in">LOG in</h1>
                  </div>
                  <div className="enter-your-email">
                    Enter your email and password to login
                  </div>
                </div>
              </div>
              <div className="password-input">
                <div className="email">Email</div>
                <div className="password-box">
                  <div className="password-box-child" />
                  <input
                    className="enter-email"
                    placeholder="Enter Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="password-field">
                <div className="password">Password</div>
                <div className="hidden-field">
                  <div className="password-box-child" />
                  <input
                    className="password-box-inner"
                    placeholder="Enter Password"
                    type="text"
                  />
                  <img
                    className="pheye-thin-icon"
                    alt=""
                    src="/pheyethin.svg"
                  />
                </div>
              </div>
              <div className="actions">
                <button className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="sign-in">SIGN IN</div>
                </button>
                <div className="forgot-password-link">
                  <div className="forgot-password">Forgot password?</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
