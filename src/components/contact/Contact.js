import React from 'react';
import { Button } from 'reactstrap';

class Contact extends React.Component {

  render() {
    return(
    <div>
      <div className="row text-center">
      
        <div className="col-6" style={{marginTop:120}}>
        <div className="fb-page" data-href="https://www.facebook.com/MaestroMusicClub/" data-tabs="timeline" data-width="500" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/MaestroMusicClub/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/MaestroMusicClub/">Maestro Music Club - Music Academy</a></blockquote></div>
        </div>

      <div className="col-6">
      <div className="mapouter"><div className="gmap_canvas"><iframe width="800" height="768" id="gmap_canvas" src="https://maps.google.com/maps?q=maestro%20music%20club&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
      </div>
      </div>
    </div>
    )
  }

}
export default Contact










