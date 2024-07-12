import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import bgImg from '../images/hero-bg.jpg'; 
import icon1 from '../images/u-1.png';
import icon2 from '../images/u-2.png';
import icon3 from '../images/u-3.png';
import icon4 from '../images/u-4.png';
import service2Icon from '../images/rentbg.png';
import service3Icon from '../images/soldbg.png';
import service1Icon from '../images/buybg.png';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="w-full h-[90vh] flex justify-start items-start relative bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: '50% 100%', backgroundPosition: 'right' }}
      >
        <div className="flex flex-col py-10 sm:py-20 mt-10 ml-5 sm:ml-20 w md:text-left self-start">
          <h1 className="md:text-7xl text-blue-800 font-extrabold text-4xl sm:text-6xl">
            <span className="text-blue-900">Serene</span>
            <br />
            <span className="text-blue-700">Living</span>
            <br />
            <span className="text-blue-700">Estates</span>
          </h1>
          <br/>
          <div className='text-black-200 text-xs sm:text-sm md:text-1xl text-4xl'>
  "Discover your dream home, <br className='sm:hidden' />
  from city apartments <br className='sm:hidden' />
  to suburban estates, <br className='sm:hidden' />
  on our trusted platform."
</div>
          <div className="w-full h-20 sm:h-40 flex items-center cursor-pointer">
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                <Link
                  to={'/search'}
                  className="text-xs sm:text-sm text-blue-600 font-bold hover:text-white hover:underline mt-4"
                >
                  Let's get started...
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Listing results for offer, sale, and rent */}
      <div className='max-w-6xl mx-auto p-3 my-10'>
        <div className='flex flex-col md:flex-row gap-8'>
          {offerListings && offerListings.length > 0 && (
            <div className='w-full md:w-1/3'>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div className='w-full md:w-1/3'>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div className='w-full md:w-1/3'>
              <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Services Section */}
      <section className="service bg-slate-100 py-20" id="service">
        <div className="container mx-auto text-center">
          <div className="bg-blue-100 rounded-full px-4 py-2 inline-block mb-14">
            <p className="text-xl text-blue-700">Our Services</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">Our Main Focus</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <li className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-lg text-center py-8 px-6 h-90 w-full sm:w-80">
                <div className="mb-6">
                  <img src={service1Icon} alt="Service icon" className="mx-auto h-28 w-28" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="#" className="hover:text-blue-600">Buy a home</a>
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  With over 1 million+ homes available for purchase on our website, we can match you with a house you will want to call home.
                </p>
                <a
      href="#"
      className="relative inline-block font-semibold text-white bg-black rounded-full py-3 px-4 sm:py-4 sm:px-5 cursor-pointer border-none overflow-hidden transform transition-all duration-300 hover:bg-blue-600 active:scale-95"
    >
      <span className="flex items-center">
        Start Finding
        <svg
          viewBox="0 0 19.9 19.7"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 ml-2 stroke-current"
          aria-labelledby="title desc"
          role="img"
        >
          <title>Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g stroke="currentColor" fill="none" className="search-path">
            <path d="M18.5 18.3l-5.4-5.4" strokeLinecap="square"></path>
            <circle r="7" cy="8" cx="8"></circle>
          </g>
        </svg>
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-100 opacity-0 transform origin-left skew-x-45 transition-opacity duration-300 hover:opacity-40"></span>
    </a>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-lg text-center py-8 px-6 h-90 w-full sm:w-80">
                <div className="mb-6">
                  <img src={service2Icon} alt="Service icon" className="mx-auto h-28 w-28" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="#" className="hover:text-blue-600">Rent a home</a>
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  With over 1 million+ homes available for rent on our website, we can match you with a place you will want to call home.
                </p>
                <a
      href="#"
      className="relative inline-block font-semibold text-white bg-black rounded-full py-3 px-4 sm:py-4 sm:px-5 cursor-pointer border-none overflow-hidden transform transition-all duration-300 hover:bg-blue-600 active:scale-95"
    >
      <span className="flex items-center">
        Start Finding
        <svg
          viewBox="0 0 19.9 19.7"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 ml-2 stroke-current"
          aria-labelledby="title desc"
          role="img"
        >
          <title>Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g stroke="currentColor" fill="none" className="search-path">
            <path d="M18.5 18.3l-5.4-5.4" strokeLinecap="square"></path>
            <circle r="7" cy="8" cx="8"></circle>
          </g>
        </svg>
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-100 opacity-0 transform origin-left skew-x-45 transition-opacity duration-300 hover:opacity-40"></span>
    </a>
              </div>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow-lg text-center py-8 px-6 h-90 w-full sm:w-80">
                <div className="mb-6">
                  <img src={service3Icon} alt="Service icon" className="mx-auto h-28 w-28" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  <a href="#" className="hover:text-blue-600">Sell a home</a>
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  With over 1 million+ homes sold through our website, we can help you find the perfect buyer for the house you call home.
                </p>
                <a
      href="#"
      className="relative inline-block font-semibold text-white bg-black rounded-full py-3 px-4 sm:py-4 sm:px-5 cursor-pointer border-none overflow-hidden transform transition-all duration-300 hover:bg-blue-600 active:scale-95"
    >
      <span className="flex items-center">
        Start Finding
        <svg
          viewBox="0 0 19.9 19.7"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 ml-2 stroke-current"
          aria-labelledby="title desc"
          role="img"
        >
          <title>Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g stroke="currentColor" fill="none" className="search-path">
            <path d="M18.5 18.3l-5.4-5.4" strokeLinecap="square"></path>
            <circle r="7" cy="8" cx="8"></circle>
          </g>
        </svg>
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-blue-100 opacity-0 transform origin-left skew-x-45 transition-opacity duration-300 hover:opacity-40"></span>
    </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="us_section py-7 bg-blue-900">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-white">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <img src={icon1} alt="Years of House" className="mx-auto h-16 w-16 mb-4" />
              <p className="text-xl font-bold text-white">1000+</p>
              <p className="text-gray-300">Years of House</p>
            </div>
            <div className="p-4 text-center">
              <img src={icon2} alt="Projects Delivered" className="mx-auto h-16 w-16 mb-4" />
              <p className="text-xl font-bold text-white">20000+</p>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="p-4 text-center">
              <img src={icon3} alt="Satisfied Customers" className="mx-auto h-16 w-16 mb-4" />
              <p className="text-xl font-bold text-white">10000+</p>
              <p className="text-gray-300">Satisfied Customers</p>
            </div>
            <div className="p-4 text-center">
              <img src={icon4} alt="Cheap Rates" className="mx-auto h-16 w-16 mb-4" />
              <p className="text-xl font-bold text-white">1500+</p>
              <p className="text-gray-300">Cheap Rates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}