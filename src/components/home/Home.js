import React from 'react';
import { Button } from 'reactstrap';

class Home extends React.Component {

  render() {
    return(
    <div>
      <div className="row text-center">
          <div className="col-8 offset-2">
            <img className="landing-logo" src="/logo.jpg"/>
            <p className="landing-text">Learn. &nbsp;&nbsp; Play. &nbsp;&nbsp; Jam. &nbsp;&nbsp; Perform !</p>
            <Button outline color="danger"><a style={{color: "black"}} href="tel:9560641314">Start Your Musical Journey Now</a></Button>
          </div>
      </div>
     
    </div>
    )
  }

}
export default Home