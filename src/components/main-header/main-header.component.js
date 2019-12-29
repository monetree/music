import React from 'react';
import FirstHeader from '../../components/first-header/first-header.component';
import SecondHeader from '../../components/second-header/second-header.component';
import FirstHeaderMobile from '../../components/first-header-mobile/first-header-mobile';
import SecondHeaderMobile from '../../components/second-header-mobile/second-header-mobile';


class MainHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            secondheader:true,
        }
    }




    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if(window.location.pathname === "/album"){
            return
        }
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            this.setState({
                secondheader:false
            })
        } else {
            this.setState({
                secondheader:true
            })  
        }
    }

    render(){
        return (
            <div>
                <header className="header" style={{ position:'fixed' }}>
                    <FirstHeader />
                    {
                        this.state.secondheader ?
                        (
                            <SecondHeader />
                        ):(
                            ''
                        )
                    }
                    
                </header>
                <FirstHeaderMobile />
                <SecondHeaderMobile />
            </div>
        )
    }
}

export default MainHeader;