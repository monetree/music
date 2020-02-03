import React from 'react';


class ListedSongs extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    handleListedSong = (id) => {
      let element = document.getElementById(id).childNodes[1];
      element.classList.remove("display-none")
      element.classList.add("display-block")
     }
 
     hideListedSong = (id) => {
       let element = document.getElementById(id).childNodes[1];
       element.classList.remove("display-block")
       element.classList.add("display-none")
     }

    render(){
        return (
            <div className="footer-blog-inner">
              {
                this.props.title ? 
                (
                  <h5 className="component-title-color" style={{ textAlign:'left' }}>{this.props.title}</h5>
                ):(
                  <h1 className="component-title-color" style={{ textAlign:'left' }}>Liked Songs</h1>
                )
              }
          
            <br/>
            <div className="footer-blog">
                  <div className="widget-latest-post">
                    <a href="#" className="fea-image" id="l1" onMouseLeave={() => this.hideListedSong("l1")} onMouseOver={() => this.handleListedSong("l1")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Alicia Keys</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Its on Again..</p>
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
                    <a href="#" className="fea-image" id="l2" onMouseLeave={() => this.hideListedSong("l2")} onMouseOver={() => this.handleListedSong("l2")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Andrew Applepie</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Antarctica</p>
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
                    <a href="#" className="fea-image" id="l3" onMouseLeave={() => this.hideListedSong("l3")} onMouseOver={() => this.handleListedSong("l3")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">The Chainsmokers</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Sick Boy</p>
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
                    <a href="#" className="fea-image" id="l4" onMouseLeave={() => this.hideListedSong("l4")} onMouseOver={() => this.handleListedSong("l4")}>
                      <img src="static/media/blog/f1.jpg" alt="Thumb" className="br5"  />
                      <div className="play-icon display-none"><i class="fa fa-play" aria-hidden="true"></i></div>
                    </a>
                    <div className="content">
                    <a href="#" className="meta">Eminem</a>
                      <p style={{ fontSize:'12px', lineHeight:'15px',marginBottom:'-5px' }}>Rap God</p>
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


export default ListedSongs;