import React from 'react'
import aboutImg from '../images/about-image.svg';
import home from '../images/housebg.png';
import leaf from '../images/leaf2bg.png';
import glass from '../images/glassbg.png';
import secu from '../images/secur.png';

import aboutBanner1 from '../images/about-banner-1.png';
import aboutBanner2 from '../images/about-banner-2.jpg';

export default function About() {
  return (
    <section className="about py-16" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">

        <figure className="relative mb-10 lg:mb-0 lg:mr-10 w-full lg:w-1/2">
          <img src={aboutBanner1} alt="House interior" className="w-full" />
          <img 
            src={aboutBanner2} 
            alt="House interior" 
            className="absolute bottom-24 left-4 w-1/2 rounded" 
          />
        </figure>

        <div className="about-content w-full lg:w-1/2">

        <div className="bg-blue-100 rounded-full px-4 py-2 inline-block mb-14">
  <p className="text-xl text-blue-500">About Us</p>
</div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">The Leading Real Estate Rental Marketplace.</h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage,
            combined with specialist services.
          </p>

          <ul className="about-list mb-6">
            <li className="about-item flex items-center gap-4 mb-4">
              <div className="about-item-icon bg-blue-100 h-12 w-12 rounded-full flex justify-center items-center">
              <img src={home} alt="Smart Home Design" className="h-10 w-10 object-cover" />
              </div>
              <p className="text-gray-600 text-base">Smart Home Design</p>
            </li>
            <li className="about-item flex items-center gap-4 mb-4">
              <div className="about-item-icon bg-blue-100 h-12 w-12 rounded-full flex justify-center items-center">
              <img src={leaf} alt="Smart Home Design" className="h-6 w-6 object-cover" />
              </div>
              <p className="text-gray-600 text-base">Beautiful Scene Around</p>
            </li>
            <li className="about-item flex items-center gap-4 mb-4">
              <div className="about-item-icon bg-blue-100 h-12 w-12 rounded-full flex justify-center items-center">
              <img src={glass} alt="Smart Home Design" className="h-6 w-6 object-cover" />
              </div>
              <p className="text-gray-600 text-base">Exceptional Lifestyle</p>
            </li>
            <li className="about-item flex items-center gap-4 mb-4">
              <div className="about-item-icon bg-blue-100 h-12 w-12 rounded-full flex justify-center items-center">
              <img src={secu} alt="Smart Home Design" className="h-6 w-6 object-cover" />
              </div>
              <p className="text-gray-600 text-base">Complete 24/7 Security</p>
            </li>
          </ul>

          <p className="callout bg-blue-50 text-gray-600 text-base font-medium leading-relaxed p-6 border-l-4 border-blue-600 mb-10">
          "Discover your dream home effortlessly with our extensive and user-friendly listings."
          </p>

         
        </div>

      </div>
    </section>
  );
}
