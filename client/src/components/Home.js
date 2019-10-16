import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';


class Home extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <Content />
            </div>
        );
    };
}

export default Home;