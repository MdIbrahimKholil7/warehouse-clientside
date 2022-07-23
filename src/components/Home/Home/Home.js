import React from 'react';
import Contact from '../../Contact/Contact';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import TopScroll from '../../TopScroll/TopScroll';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Service from '../Service/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <PageTitle title='Home' />
            <Banner />
            <Explore />
            <Service />
            <Team />
            <Contact />
            <TopScroll />
        </div>
    );
};

export default Home;