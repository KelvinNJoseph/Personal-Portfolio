import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Kelvin <br/>
        Joseph a Software Engineer from Kenya
      </SectionTitle>
      <SectionText>
      I specialize in front-end development, crafting visually stunning and highly interactive web applications. My expertise includes HTML, CSS, JavaScript, and TypeScript, along with modern frameworks and libraries like React, Next.js, Tailwind CSS, Bootstrap, and Material UI. I am passionate about building seamless, responsive, and high-performance user experiences. Always eager to learn and innovate, I aim to create impactful digital solutions that stand out.
      </SectionText>
      <Button onClick={() =>window.location="https://github.com/KelvinNJoseph"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;