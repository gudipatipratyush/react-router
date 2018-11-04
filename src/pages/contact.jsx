import React, { Component } from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
class  Contact extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron title="contact" subtitle="the Contact subtitle" />
                <div className="container">
                    <h1 className="m-t-20">Contact</h1>
                    <p>
                        A Contact page or a start page is the initial or main web page of a website or a browser.
                         The initial page of a website is sometimes called main page as well
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;