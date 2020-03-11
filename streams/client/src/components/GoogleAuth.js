import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1077507501656-9jhfsn89cmopkivg9ba21k2bk1ch4unn.apps.googleusercontent.com', 
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;