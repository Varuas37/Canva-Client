import React, { Fragment } from 'react'
import Features from '../../Components/Features/Features'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import {connect} from 'react-redux'
import {Link, Redirect} from "react-router-dom";
const Home=({isAuthenticated})=> {
    if (isAuthenticated) {
        return <Redirect to="/Dashboard" />;
      }
    return (
        <Fragment>
            <Hero></Hero>
            <Features></Features>
            <Footer></Footer>
        </Fragment>
    )
}
Home.propTypes = {
    
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
export default connect(mapStateToProps,null)(Home);