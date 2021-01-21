import React from 'react';
import { Button } from 'reactstrap';
class JStudios extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return(
      <div className="row text-center">
      <div className="col-8 offset-2">
        <img className="studio-logo" src="/studio.png"/>
        <div className="fee-text">
              <p>Contact &nbsp;&nbsp;for &nbsp;&nbsp; professional &nbsp;&nbsp;studio &nbsp;&nbsp; recording</p>
              
              </div>
        <Button outline color="danger"><a style={{color: "black"}} href="tel:9560641314">Call Now</a></Button>
      </div>
      </div>
      )
  }

}
export default JStudios