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
              <div className="swiper-slide" style={{ backgroundImage:`url("https://themeim.com/demo/milando/media/banner/3.jpg")` }}
               data-parallax="image">
                <div className="slider-content-two content-three" data-animate="fadeIn">
                 
                  <div className="content text-center">
                    
                    <h2 data-animate="fadeInUp" data-delay="0.5s">
                    Bringing people together by music
                    </h2>
                    <p data-animate="fadeInUp" data-delay="0.9s">
                    Find us on
                    </p>
                    <a href="https://www.facebook.com/usamaahmed1997" target="_blank" className="store-btn" data-animate="fadeInLeft" data-delay="0.9s">
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/usamaahmed97" target="_blank" className="store-btn ml__15" data-animate="fadeInRight" data-delay="0.9s">
                      Instagram
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