import Navbar from '../../components/Navbar/Navbar';

import HeroSection from '../../components/HeroSection/HeroSection';
import heroImage from '../../assets/HeroSection/hero-about.jpg';

import StorySection from '../../components/StorySection/StorySection';
import storyImage from '../../assets/StorySection/story-image.jpg';

import WhatWeServed from '../../components/WhatWeServed/WhatWeServed';


export default function About() {
  return (
    <div>
      <Navbar />
      <HeroSection
        image={heroImage}
        title="About Us"
        subTitle=""
        script=""
      // darken

      />

      <StorySection
        image={storyImage}
        title="Our Story"
        text="At the heart of our tea and coffee store is a simple philosophy: slow down and savor life. Born from a love of quiet moments and rich flavors, we created a space where people can relax, reconnect, and enjoy handcrafted beverages made with care. Whether you're sipping a delicate oolong or a bold pour-over, each cup tells a story of tradition, passion, and comfort. Here, it's not just about drinks—it's about the atmosphere, the warmth, and the experience."
      />

      <WhatWeServed />

    </div>)
}
