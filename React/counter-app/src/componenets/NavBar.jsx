import React, { Component } from 'react';

class NavBar extends Component {
   
    render() { 
        return ( 
           <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href=".">Sticky top</a>
                </nav>
            </div>

         );
    }
}
 
export default NavBar;
