import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import HeroNav from '../../Components/Hero/HeroNav'

export default function Pricing() {
    return (
        <Fragment>
            <HeroNav></HeroNav>
<section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto" style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We know college students are broke. Use for free now.</p>
      {/* <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
        <button class="py-1 px-4 focus:outline-none">Annually</button>
      </div> */}
    </div>
   
        {/* Second Start */}

        <div class="p-4 xl:w-1/4 md:w-1/2 w-full" >
        <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Free</span>
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Starting</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$0</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Redesigned Canvas
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>View Todo and Annoucements
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Check Grades
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Help us develop better product
          </p>

          <Link to="/login">

         
          <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Get Started
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <p class="text-xs text-gray-500 mt-3">We'll start charging low monthly fee if needed*</p>
        </div>
      </div>
{/* Second Ends */}
<p class="text-xs text-gray-500 mt-3">*I don't plan to make money out of this app. So, we will never charge you a lot of money. Only enough to get the servers going. </p>
{/* <p class="text-xs text-gray-500 mt-3">Made with Love, by a college student ❤️  </p> */}
    </div>

</section>
        </Fragment>
    )
}


// 