import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles(theme => ({}));

const responseGoogle = response => console.log(response);

function RegisterScreen() {
  
  
  return (<GoogleLogin
    clientId="162546037438-6o0bor7m2d26q2p1eo3n37r2lcahmcot.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} >This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />);
}

export { RegisterScreen };
