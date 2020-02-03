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
              <h1 className="component-title-color" >Artists to follow</h1>
              <div className="tim-isotope tim-isotope-1 wow fadeInUp" data-wow-delay="0.8s">
                <ul className="tim-filter-items tim-album-items grid">
                  <li className="tim-album-item grid-item ui logo branding">
                    <div className="tim-isotope-grid__img effect-active">
                      <img src="static/media/album/1.jpg" alt="album thumb" />
                    </div>
                    <div className="album_details_wrap">
                      <div className="album-info">
                        <a className="popup-modal" href="static/media/album/1.jpg"><i className="iconsmind-Magnifi-Glass" /></a>
                        <h4 className="album-title">Starboy</h4>
                        <h5 className="artist-name">The Weeknd</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play </a>
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
                        <h4 className="album-title">A head full of Dreams</h4>
                        <h5 className="artist-name">Coldplay</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play </a>
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
                        <h4 className="album-title">Recovery</h4>
                        <h5 className="artist-name">Eminem</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play </a>
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
                        <h4 className="album-title">Thank u, next</h4>
                        <h5 className="artist-name">Ariana Grande</h5>
                        <a href="#" className="tim-btn tim-btn-bgt">Play </a>
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