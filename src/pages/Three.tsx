import React, { useRef, useState } from 'react'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
const hi = 'hi'

const Three = () => {
  return (
    <div className=''>
      <ParallaxProvider>
        <Parallax speed={+5}>
          <img
            src='/img/g2.jpg'
            className='h-screen w-full object-cover object-[0_20%]'
            alt='da'
          />
        </Parallax>
        <Parallax aria-busy='true' speed={+20}>
          <section className='text-gray-600 body-font'>
            <div className=' px-5 py-24 mx-auto'>
              <div className='flex flex-wrap -m-4'>
                <div className='p-4 lg:w-1/3'>
                  <div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      CATEGORY
                    </h2>
                    <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'>
                      Raclette Blueberry Nextious Level
                    </h1>
                    <p className='leading-relaxed mb-3'>
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className='text-indigo-500 inline-flex items-center'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                      <span className='text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                          <circle cx='12' cy='12' r='3'></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
                <div className='p-4 lg:w-1/3'>
                  <div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      CATEGORY
                    </h2>
                    <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'>
                      Ennui Snackwave Thundercats
                    </h1>
                    <p className='leading-relaxed mb-3'>
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className='text-indigo-500 inline-flex items-center'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                      <span className='text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                          <circle cx='12' cy='12' r='3'></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
                <div className='p-4 lg:w-1/3'>
                  <div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      CATEGORY
                    </h2>
                    <h1 className='title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3'>
                      Selvage Poke Waistcoat Godard
                    </h1>
                    <p className='leading-relaxed mb-3'>
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <a className='text-indigo-500 inline-flex items-center'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <div className='text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4'>
                      <span className='text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                          <circle cx='12' cy='12' r='3'></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                        <svg
                          className='w-4 h-4 mr-1'
                          stroke='currentColor'
                          stroke-width='2'
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          viewBox='0 0 24 24'
                        >
                          <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>
        <Parallax
          opacity={[0.9, 1]}
          speed={1}
          easing={[1, 0.25, 0.9, 1]}
          scale={[0.8, 1.1]}
        >
          <section className='text-gray-400 mb-10 bg-gray-900 body-font overflow-hidden'>
            <div className=' px-5 py-24 mx-auto'>
              <div className='flex flex-wrap -m-12'>
                <div className='p-12 md:w-1/2 flex flex-col items-start'>
                  <span className='inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest'>
                    CATEGORY
                  </span>
                  <h2 className='sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4'>
                    Roof party normcore before they sold out, cornhole vape
                  </h2>
                  <p className='leading-relaxed mb-8'>
                    Live-edge letterpress cliche, salvia fanny pack humblebrag
                    narwhal portland. VHS man braid palo santo hoodie brunch
                    trust fund. Bitters hashtag waistcoat fashion axe chia
                    unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.
                    Cray pug you probably haven't heard of them hexagon
                    kickstarter craft beer pork chic.
                  </p>
                  <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full'>
                    <a className='text-indigo-400 inline-flex items-center'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <span className='text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className='text-gray-500 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      6
                    </span>
                  </div>
                  <a className='inline-flex items-center'>
                    <img
                      alt='blog'
                      src='https://dummyimage.com/104x104'
                      className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                    />
                    <span className='flex-grow flex flex-col pl-4'>
                      <span className='title-font font-medium text-white'>
                        Holden Caulfield
                      </span>
                      <span className='text-gray-500 text-xs tracking-widest mt-0.5'>
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
                <div className='p-12 md:w-1/2 flex flex-col items-start'>
                  <span className='inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest'>
                    CATEGORY
                  </span>
                  <h2 className='sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4'>
                    Pinterest DIY dreamcatcher gentrify single-origin coffee
                  </h2>
                  <p className='leading-relaxed mb-8'>
                    Live-edge letterpress cliche, salvia fanny pack humblebrag
                    narwhal portland. VHS man braid palo santo hoodie brunch
                    trust fund. Bitters hashtag waistcoat fashion axe chia
                    unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.
                  </p>
                  <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full'>
                    <a className='text-indigo-400 inline-flex items-center'>
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <span className='text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className='text-gray-500 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      6
                    </span>
                  </div>
                  <a className='inline-flex items-center'>
                    <img
                      alt='blog'
                      src='https://dummyimage.com/103x103'
                      className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                    />
                    <span className='flex-grow flex flex-col pl-4'>
                      <span className='title-font font-medium text-white'>
                        Alper Kamu
                      </span>
                      <span className='text-gray-500 text-xs tracking-widest mt-0.5'>
                        DESIGNER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Parallax>
        <Parallax speed={+10}>
          <section className='text-gray-400 bg-gray-900 body-font'>
            <div className=' px-5 py-24 mx-auto'>
              <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
                <div className='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='sm:w-16 sm:h-16 w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                  </svg>
                </div>
                <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  <h2 className='text-white text-lg title-font font-medium mb-2'>
                    Shooting Stars
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className='mt-3 text-indigo-400 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
                <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  <h2 className='text-white text-lg title-font font-medium mb-2'>
                    The Catalyzer
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className='mt-3 text-indigo-400 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
                <div className='sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='sm:w-16 sm:h-16 w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <circle cx='6' cy='6' r='3'></circle>
                    <circle cx='6' cy='18' r='3'></circle>
                    <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                  </svg>
                </div>
              </div>
              <div className='flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col'>
                <div className='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='sm:w-16 sm:h-16 w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                </div>
                <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  <h2 className='text-white text-lg title-font font-medium mb-2'>
                    The 400 Blows
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className='mt-3 text-indigo-400 inline-flex items-center'>
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
              <button className='flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Button
              </button>
            </div>
          </section>
        </Parallax>
        <Parallax speed={-5}>
          <section className='text-gray-400 bg-gray-900 body-font relative'>
            <div className='absolute inset-0 bg-gray-900'>
              <iframe
                title='map'
                width='100%'
                height='100%'
                scrolling='no'
                src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C6%B3zmir+(My%20Business%2Name)&amp;ie=UTF8&amp;t=&amp;z=20&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
            <div className=' px-5 py-24 mx-auto flex'>
              <div className='lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10'>
                <h2 className='text-white text-lg mb-1 font-medium title-font'>
                  Feedback
                </h2>
                <p className='leading-relaxed mb-5'>
                  Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div className='relative mb-4'>
                  <label className='leading-7 text-sm text-gray-400'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='relative mb-4'>
                  <label className='leading-7 text-sm text-gray-400'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
                <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Button
                </button>
                <p className='text-xs text-gray-400 text-opacity-90 mt-3'>
                  Chicharrones blog helvetica normcore iceland tousled brook
                  viral artisan.
                </p>
              </div>
            </div>
          </section>
        </Parallax>
        <Parallax speed={5}>
          <img
            src='/img/g1.jpg'
            className='h-[400px] mt-10 w-full object-cover object-[0_20%]'
            alt='da'
          />
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}

export default Three
