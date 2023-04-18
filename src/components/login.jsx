import React from 'react';

function LoginPage() {
  return (
    <html>
      <head>
        <title>Weather Website | Login</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />
        <style>
          {`
          body {
            background-image: url('pixel81.jpg');
            background-size: cover;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .form-container {
            background: rgba(255, 255, 255, 0.8);
            padding: 30px;
            border-radius: 10px;
          }
          .form-down {
            margin-top: 150px;
          }
          h1 {
            color: white;
            text-align: center;
            margin-bottom: 40px;
            font-size: 3rem;
            text-shadow: 2px 2px 5px #000000;
          }
          label {
            color: grey;
          }
          input[type='text'],
          input[type='password'] {
            background-color: rgba(200, 200, 200, 0.8);
            color: #000000;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
          }
          input[type='text']:focus,
          input[type='password']:focus {
            background-color: rgba(200, 200, 200, 1);
            color: #000000;
            outline: none;
            box-shadow: none;
          }
          button[type='submit'] {
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            color: white;
            padding: 10px 20px;
            margin-top: 20px;
          }
          button[type='submit']:hover {
            background-color: #0069d9;
            cursor: pointer;
          }
          .text-center a {
            color: blue;
            text-decoration: underline;
          }
          `}
        </style>
      </head>
        <div className="form-container">
          <h1>Login</h1>
          <form action="https://spectrummenu.com/weatherapp/scripts/login.php" method="post">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
          <div className="text-center" style={{ marginTop: '10px' }}>
            <a href="/registration">Don't have an account? Register here</a>
          </div>
        </div>
    </html>
  );
}

export default LoginPage;
