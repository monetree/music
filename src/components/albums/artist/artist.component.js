import React from 'react';


class Artist extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="tim-container d-flex justify-content-center">
            <div className="col-xl-12">
              <h1 className="component-title-color">Artist to follow</h1>
              <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                  <li className="tim-album-item grid-item ui logo branding">
                    <div className="tim-isotope-grid__img effect-active">
                      <img src="static/media/album/1.jpg" alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">By The Way Rain</h4>
                        <h5 className="artist-name">Song Artist Name</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play Now</a>
                      </div>
                    </div>
                  </li>
                  <li className="tim-album-item grid-item ui design">
                    <div className="tim-isotope-grid__img">
                      <img src="static/media/album/2.jpg" alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">By The Way Rain</h4>
                        <h5 className="artist-name">Song Artist Name</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play Now</a>
                      </div>
                    </div>
                  </li>
                  <li className="tim-album-item grid-item logo">
                    <div className="tim-isotope-grid__img">
                      <img src="static/media/album/3.jpg" alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">By The Way Rain</h4>
                        <h5 className="artist-name">Song Artist Name</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play Now</a>
                      </div>
                    </div>
                  </li>
                  <li className="tim-album-item grid-item design ui">
                    <div className="tim-isotope-grid__img">
                      <img src="static/media/album/4.jpg" alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">By The Way Rain</h4>
                        <h5 className="artist-name">Song Artist Name</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play Now</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        )
    }
}


export default Artist;