// src/pages/Home.jsx
import Navbar from '../../components/Navbar/Navbar';

import HeroSection from '../../components/HeroSection/HeroSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import ReviewSection from '../../components/ReviewSection/ReviewSection';

import heroImage from '../../assets/HeroSection/hero-home.jpg';
import Footer from '../../components/Footer/Footer';


export default function Home() {
    return (
        
        <div>
            <Navbar />
            <HeroSection
                image={heroImage}
                title="Leisure Tea & Coffee"
                // subTitle="Enjoy a relaxing cup of tea or coffee"
                script="Welcome to"
            />
            <IntroSection />
            <GallerySection />
            <ReviewSection />
            <Footer />
        </div>
    )
}
