import React from 'react';
import MainHeader from '../../components/main-header/main-header.component';
import Player from '../../components/player/player.component';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
            <div id="site">
        <MainHeader />
        <section id="banner-one">
          <div className="swiper-container banner-slider-two" data-swiper-config="{&quot;loop&quot;: true, &quot;effect&quot;: &quot;slide&quot;, &quot;prevButton&quot;:&quot;#banner-nav-prev&quot;, &quot;nextButton&quot;: &quot;#banner-nav-next&quot;, &quot;speed&quot;: 700, &quot;autoplay&quot;: 500000, &quot;paginationClickable&quot;: true}">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/5.jpg")` }}
               data-parallax="image">
                <div className="slider-content-two content-three" data-animate="fadeIn">
                  <img src="static/media/banner/1.png" alt="Music" />
                  <div className="content text-center">
                    <h3 data-animate="fadeInUp">Artist Feel You</h3>
                    <h2 data-animate="fadeInUp" data-delay="0.5s">
                      Happy Rythem of Life
                    </h2>
                    <p data-animate="fadeInUp" data-delay="0.9s">
                      There are many variations of passages of Lorem Ipsum available but<br /> the majority have to an suffered alteration.
                    </p>
                    <a href="#" className="store-btn" data-animate="fadeInLeft" data-delay="0.9s">
                      <i className="tim-playstore" />
                      Google Play
                    </a>
                    <a href="#" className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                      <i className="tim-apple-logo" />
                      Apple Store
                    </a>
                  </div>
                </div>
                {/* /.slider-content */}
              </div>
              <div className="swiper-slide" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/6.jpg")` }} data-parallax="image">
                <div className="slider-content-two text-left" data-animate="fadeIn">
                  <img src="media/banner/2.png" alt="Music" />
                  <h3 data-animate="fadeInUp">Artist Feel You</h3>
                  <h2 data-animate="fadeInUp" data-delay="0.5s">
                    Happy Rythem of Life
                  </h2>
                  <p data-animate="fadeInUp" data-delay="0.9s">
                    There are many variations of passages of Lorem Ipsum available but<br /> the majority have to an suffered alteration.
                  </p>
                  <a href="#" className="tim-btn" data-animate="fadeInLeft" data-delay="0.9s">
                    Explore More
                  </a>
                  <a href="#" className="video-btn-two" data-animate="fadeInRight" data-delay="0.9s">
                    <i className="fa fa-play" />
                    Watch video
                  </a>
                </div>
                {/* /.slider-content */}
              </div>
            </div>
            <Player />
          </div>
        </section>

      </div>
            </div>
        )
    }
}

export default Home;