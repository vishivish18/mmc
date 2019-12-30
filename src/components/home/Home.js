import React from 'react';
import { Button } from 'reactstrap';
import {Link } from 'react-router-dom';
class Home extends React.Component {

  render() {
    return(
    <div>
      <div className="row text-center">
          <div className="col-8 offset-2">
            <img className="landing-logo" src="/logo.jpg"/>
            <p className="landing-text">Learn!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Play!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Jam!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Perform!</p>
            <Link to="/courses">
            <Button outline color="danger">Start Your Musical Journey Now</Button>
            </Link>
          </div>
      </div>
    </div>
    )
  }

}
export default Home