import React from 'react'
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Description from '../components/Description';

const Home = () => {
    return (
        <>
            <Seo />
            <Layout>
                <Hero />
                <Menu />
                <Testimonials />
                <Description />
            </Layout>
        </>

    );
}

export default Home;