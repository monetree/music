import React from 'react';
import FirstHeader from '../../components/first-header/first-header.component';
import SecondHeader from '../../components/second-header/second-header.component';


class MainHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            secondheader:true,
        }
        this.firstheader = React.createRef()
    }

    handleSuccess = () => {
        this.firstheader.current.handleSuccess()
    }



    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if(window.location.pathname === "/album"){
            return
        }
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
        
        {
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
                    <FirstHeader ref={this.firstheader}/>
                    {
                        this.state.secondheader ?
                        (
                            <SecondHeader />
                        ):(
                            ''
                        )
                    }
                    
                </header>
                
            </div>
        )
    }
}

export default MainHeader;