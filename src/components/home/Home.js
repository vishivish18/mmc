import React from 'react';
import { Button } from 'reactstrap';

class Home extends React.Component {

  render() {
    return(
    <div>
      <div className="row text-center">
          <div className="col-8 offset-2">
            <img className="landing-logo" src="/logo.jpg"/>
            <p className="landing-text">ALL THE MUSIC IS WITHIN YOU</p>
            <Button outline color="danger">Start Your Musical Journey Now</Button>
          </div>
      </div>
     
    </div>
    )
  }

}
export default Home