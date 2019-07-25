import React from 'react';
import { Button } from 'reactstrap';

class Home extends React.Component {

  render() {
    return(
      <div className="row">
              <div className="col-md-3 col-md-offset-3 col-xs-12" style={{float: 'none',margin: 'auto'}}>
                <img className="landing-logo" src="/logo.jpg"/>
                <p className="landing-text">ALL THE MUSIC IS WITHIN YOU</p>
                <Button outline color="danger" size="lg">Start Your Musical Journey Now</Button>
              </div>
        </div>
    )
  }

}
export default Home