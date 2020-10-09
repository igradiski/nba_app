import React, { Component } from 'react';


//css
import './layout.css'

// komponente
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

export class Layout extends Component {
    state = {
        showNav:false  
      }
  
      toggleSidenav = (action) =>{
          this.setState({
              showNav:action
          })
      }



    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;