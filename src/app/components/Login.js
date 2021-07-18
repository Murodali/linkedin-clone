import React from "react";
import { auth } from "../../firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/counter/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const [registerToggler,setRegisterToggler] = useState(false)
  const [loginToggler,setLoginToggler] = useState(true)

  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photo,
              })
            );
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (

    <div className="login">
      <div className="name_login">
        <h1>Linked</h1>
        <img src="images/linkedin.svg" alt="linkedIn"></img>
      </div>

      <div className="sign_inForm">
        <form>
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button onClick={loginUser}>Sign in</button>

          <p className="toggle_register">No account? <span onClick = {() => setRegisterToggler(true) }>Create one</span></p>
        </form>
      </div>

      {registerToggler && (

<div className="register_form">

<form>
  <input
    type="email"
    placeholder="Enter Email"
    required
    onChange={(e) => setEmail(e.target.value)}
    value={email}
  />
  <input
    type="password"
    placeholder="Enter Password"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    required
  />

  <input
    type="text"
    placeholder="Enter Name"
    onChange={(e) => setName(e.target.value)}
    value={name}
    required
  />
  <input
    type="text"
    placeholder="Enter Image Url"
    onChange={(e) => setPhoto(e.target.value)}
    value={photo}
  />

  <button onClick={loginUser}>Create an account</button>
</form>


</div>

      )}



     
    </div>
  );
}

export default Login;
