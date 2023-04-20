import React from 'react';
import Showcase from './Showcase';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView();
  return (
    <div
      id="about"
      className="mt-10 flex flex-col items-center md:mt-16"
      ref={ref}
    >
      <div className={`${inView ? 'animate-to-right' : ''}`}>
        <h1 className="mb-2 text-center text-4xl font-bold">About</h1>
        <p className="max-w-md text-center text-base font-normal  text-gray-400">
          Hi there, I'm Sulaiman, a software engineering student with a passion
          for web development. With my expertise in HTML, CSS, JavaScript, and
          React. I specialize in creating fully responsive and SEO-friendly
          websites.
        </p>
      </div>
      <div
        className={`flex ${
          inView ? 'animate-to-left' : ''
        } mt-5 flex-wrap items-center justify-center gap-4 p-5`}
      >
        <Showcase
          value="Mehar Sulaiman"
          title="Whatsapp"
          iconProp="fa-brands fa-whatsapp"
          link="https://wa.me/+92307037784"
        />
        <Showcase
          value="03457026416"
          title="Phone"
          iconProp="fa-solid fa-phone"
          link="tel:+923457026416"
        />
        <Showcase
          value="mehar.sulaiman31"
          title="Facebook"
          iconProp="fa-brands fa-facebook"
          link="https://www.facebook.com/mehar.sulaiman31"
        />
        <Showcase
          value="sulaimanshabbir31"
          title="Email"
          iconProp="fa-solid fa-envelope"
          link="mailto:sulaimanshabbir31@gmail.com"
        />
        <Showcase
          value="meharsuleiman"
          title="Git Hub"
          iconProp="fa-brands fa-github"
          link="https://github.com/meharsuleiman"
        />
      </div>
    </div>
  );
};

export default About;
