import React from 'react';


class RecentlyPlayed extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleRecentSong = (id) => {
     let element = document.getElementById(id).childNodes[1];
     element.classList.remove("display-none")
     element.classList.add("display-block")
    }

    hideRecentSong = (id) => {
      let element = document.getElementById(id).childNodes[1];
      element.classList.remove("display-block")
      element.classList.add("display-none")
    }

    render(){
        return (
            <div className="footer-blog-inner">
            <h1 className="component-title-color" style={{ textAlign:'left' }}>Recently Played</h1>
            <br/>
                <div className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="r1" onMouseLeave={() => this.hideRecentSong("r1")} onMouseOver={() => this.handleRecentSong("r1")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Jackson breit</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Tell Me Something Good...</p>
                      <span style={{ color:'lightgrey',fontSize:'12px' }}>
                      <i class="fa fa-play" aria-hidden="true"></i> 7.79m &nbsp;
                      <i class="fa fa-heart" aria-hidden="true"></i> 180k &nbsp;
                      <i class="fa fa-comment" aria-hidden="true"></i> &nbsp;956 &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;10.8k &nbsp;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="r2" onMouseLeave={() => this.hideRecentSong("r2")} onMouseOver={() => this.handleRecentSong("r2")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5" />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Jackson breit</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Tell Me Something Good...</p>
                      <span style={{ color:'lightgrey',fontSize:'12px' }}>
                      <i class="fa fa-play" aria-hidden="true"></i> 7.79m &nbsp;
                      <i class="fa fa-heart" aria-hidden="true"></i> 180k &nbsp;
                      <i class="fa fa-comment" aria-hidden="true"></i> &nbsp;956 &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;10.8k &nbsp;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="r3" onMouseLeave={() => this.hideRecentSong("r3")} onMouseOver={() => this.handleRecentSong("r3")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Jackson breit</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Tell Me Something Good...</p>
                      <span style={{ color:'lightgrey',fontSize:'12px' }}>
                      <i class="fa fa-play" aria-hidden="true"></i> 7.79m &nbsp;
                      <i class="fa fa-heart" aria-hidden="true"></i> 180k &nbsp;
                      <i class="fa fa-comment" aria-hidden="true"></i> &nbsp;956 &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;10.8k &nbsp;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="r4" onMouseLeave={() => this.hideRecentSong("r4")} onMouseOver={() => this.handleRecentSong("r4")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Jackson breit</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Tell Me Something Good...</p>
                      <span style={{ color:'lightgrey',fontSize:'12px' }}>
                      <i class="fa fa-play" aria-hidden="true"></i> 7.79m &nbsp;
                      <i class="fa fa-heart" aria-hidden="true"></i> 180k &nbsp;
                      <i class="fa fa-comment" aria-hidden="true"></i> &nbsp;956 &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;10.8k &nbsp;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

         
          
        )
    }
}


export default RecentlyPlayed;