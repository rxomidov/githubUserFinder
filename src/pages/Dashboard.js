import React from 'react';
import {Info, Repos, User, Search, Navbar} from '../components';
import loadingImage from '../images/preloader.gif';
import {GithubContext} from '../context/context';
import styled from "styled-components";

const Dashboard = () => {
    const {loading} = React.useContext(GithubContext);
    if (loading) {
        return (
            <Wrapper>
                <Navbar/>
                <Search/>
                <div className="loading">
                    <img src={loadingImage} alt="loading"/>
                </div>
            </Wrapper>
        )
    }
    return (
        <main>
            <Navbar/>
            <Search/>
            <Info/>
            <User/>
            <Repos/>
        </main>
    );
};

const Wrapper = styled.main`
  .loading {
    display: flex;
    justify-content:center;
    img{
      width: 100px;
      margin: 4rem 0;
    }
  }
`

export default Dashboard;
