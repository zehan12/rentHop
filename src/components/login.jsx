import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();
    let d = {
      email: "test@gmail.com",
      password: 12345678
    }
    console.log(email, password);
    const res = await fetch("http://139.59.81.203/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d)
    });
    console.log(res, "res");
    const data = await res.json()

    console.log(data)

    return;
  };

  return (
    <>
      <section className="sptb-sm">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="wrapper wrapper2 card-body p-5">
                  <form
                    onSubmit={(e) => handleLogin(e)}

                  >
                    <h3 className="font-weight-semibold2">Login</h3>
                    <div className="mail">
                      <label>Email or Username</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                      />
                    </div>
                    <div className="password">
                      <label>Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                      />
                    </div>
                    <div className="form-group row justify-content-end">
                      <div className="col-md-9">
                        <label className="custom-control form-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label text-dark">
                            Remember me
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="submit">
                      <input type="submit" value="Login" />
                    </div>
                    <p className="mb-2">
                      <a href="forgot.html">Forgot Password</a>
                    </p>
                    <p className="text-dark mb-0">
                      Don't have account?
                      <input type="submit" value="Sign Up" />
                    </p>
                  </form>
                  <div className="pt-5 mt-5 border-top">
                    <h5 className="font-weight-semibold2 text-default mb-4">
                      Social media
                    </h5>
                    <div className="">
                      <div className="btn-group">
                        <a
                          href="javascript:void(0);"
                          className="social-icon-style-circle-lg text-primary bg-primary-transparent"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="javascript:void(0);"
                          className="social-icon-style-circle-lg text-primary bg-primary-transparent"
                        >
                          <i className="fa fa-google"></i>
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="javascript:void(0);"
                          className="social-icon-style-circle-lg text-primary bg-primary-transparent"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="javascript:void(0);"
                          className="social-icon-style-circle-lg text-primary bg-primary-transparent"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                      <div className="btn-group">
                        <a
                          href="javascript:void(0);"
                          className="social-icon-style-circle-lg text-primary bg-primary-transparent"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
