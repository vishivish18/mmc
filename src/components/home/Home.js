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
      <div className="row">
        <div className="col-6 offset-4" style={{marginTop:120}}>
        <div className="fb-page" data-href="https://www.facebook.com/MaestroMusicClub/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MaestroMusicClub/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MaestroMusicClub/">Maestro Music Club - Music Academy</a></blockquote></div>
        </div>
      </div>
    </div>
    )
  }

}
export default Home