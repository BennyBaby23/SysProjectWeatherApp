import React from 'react';

function Registration() {
  return (
    <html>
      <head>
        <title>Group one | Registration</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        <style>
          {`
          body {
            background-image: url('pixel81.jpg');
            background-size: cover;
          }
          .form-container {
            background: rgba(255, 255, 255, 0.8);
            padding: 30px;
            border-radius: 10px;
          }
          .form-down {
            margin-top: 150px;
          }
          label {
            color: grey;
          }
          input {
            color: black;
          }
          .text-muted {
            color: white;
          }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 form-container form-down">
            <form action="https://spectrummenu.com/weatherapp/scripts/registration.php" method="post">
                <h1 className="text-center">Registration</h1>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Phone Number</label>
                  <input type="text" className="form-control" id="number" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                  <p className="text-muted">Please use the format 555-555-5555</p>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form> 
              <div className="text-center" style={{ marginTop: '10px' }}>
                <a href="/login">Already have an account? Login here</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Registration;
