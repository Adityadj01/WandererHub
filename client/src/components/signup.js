
  <body>

    <center>
      <h2>Explore Hubli</h2>

      <button
        onclick="document.getElementById('id01').style.display='block'"
        style="width: auto"
      >
        Sign Up
      </button>
      <button
        onclick="document.getElementById('id02').style.display='block'"
        style="width: auto"
      >
        login
      </button>
    </center>

    <div id="id01" class="modal">
      <span
        onclick="document.getElementById('id01').style.display='none'"
        class="close"
        title="Close Modal"
        >&times;</span
      >
      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="Name"><b>Name</b></label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label for="Phone Number"><b>Phoneno</b></label>
          <input
            type="number"
            placeholder="Enter your Phone Number"
            name="phoneno"
            required
          /><br />
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style="margin-bottom: 15px"
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
          </p>

          <div class="clearfix">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >
              Cancel
            </button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>

    <div id="id02" class="modal">
      <span
        onclick="document.getElementById('id02').style.display='none'"
        class="close"
        title="Close Modal"
        >&times;</span
      >
      <form class="modal-content" action="/">
        <div class="container">
          <h1>Login</h1>
          <p>Please fill in this to login into your account.</p>
          <hr />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style="margin-bottom: 15px"
            />
            Remember me
          </label>

          <div class="clearfix">
            <button
              type="button"
              onclick="document.getElementById('id02').style.display='none'"
              class="cancelbtn"
            >
              Cancel
            </button>
            <button type="login" class="signupbtn">Login</button>
          </div>
        </div>
      </form>
    </div>
  </body>