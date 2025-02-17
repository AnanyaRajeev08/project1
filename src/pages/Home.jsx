import React from 'react'
import {FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import elipseImage1 from "../assets/Images/Ellipse 1.png";
import elipseImage2 from "../assets/Images/Ellipse 2.png";
import elipseImage3 from "../assets/Images/Ellipse 3.png";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import "./Home.css";
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <div>
        {/* SECTION-1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white
                        '>
            <Link to={"/signup"}>
                <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit shadow-md shadow-pure-greys-500'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                SparkEd: Your Gateway to Skillful
                <HighlightText text={"FUTURE"} />
            </div>

            <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            Embark on a Transformative Coding Journey with SparkEd: Where Affordability Meets Ambition. Break Free from Financial Barriers – Ignite Your Passion, Unleash Your Potential, and Secure a Skillful Future through Budget-Friendly Courses Tailored Just for You. 
            </div>

            <div className='flex flex-col relative items-center gap-7  mt-32 mb-10'>
                <div className='flex flex-row gap-7 mt-10 absolute lg:z-50 bottom-[100%]'>
                    <CTAButton active={true} linkto={"/about"}> 
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/signup"}> 
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-caribbeangreen-100 -z-10s relative vid1'>
                    <div > 
                        <img src = {elipseImage2} width={"102%"}
                        className='absolute bottom-[1%] -z-10 ' 
                        alt='elipse ' />
                        <img src = {elipseImage1} width={"100%"}
                        className='absolute right-[12%] top-[3%] -z-10'
                        alt='elipse ' />
                        
                    </div>
                    <video muted loop autoPlay >
                        <source  src={Banner} type="video/mp4" />
                    </video> 
                    
                </div>
            </div>



            {/* CODE-SECTION-1 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    // imgPos = {"-top-[40%] right-[8%]"}
                    heading={
                        <div className='text-4xl font-semibold'>
                           Code, Collaborate, Create  
                            {" "} with our <HighlightText text={"CoDeveloper"}/>
                        </div>
                    }
                    subheading = {
                        "India's first Real-time Collaborative Coding technology, offering a virtual room that allows you to code and grow together, breaking down geographical barriers"
                    }
                    ctabtn1={
                         {
                            btnText: "Try it Yourself",
                            linkto: "http://localhost:3000",
                            active: true,
                            
                        }
                        
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/about",
                            active: false,
                        }
                    }

                    // codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
                    codeblock={[`<!DOCTYPE html>`,`<html>\nhead><title>Welcome to SparkEd</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`,`h1><ahref="/">Courses that cost Rs.1/day</a>\n/h1>\nnav><ahref="one/">Get</a><ahref="two/">Ready</a><ahref="three/">to Learn</a>\n/nav>`]}
                    codeColor={"text-yellow-25"}
                    // backgroudGradient={elipseImage3}
                    backgroudGradient={<div className="codeblock1 absolute"></div>}


                />
            </div>

            {/* CODE-SECTION-2 */}
            <div> 
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    // imgPos = {"-top-[40%] right-[66%]"}
                    heading={
                        <div className='text-4xl font-semibold'>
                            Having
                            <HighlightText text={`Dream`}/>
                            <br />of being
                            <HighlightText text={` a Coder?`}/>
                        </div>
                    }
                    subheading = {
                        "Don't worry, we've got your back! Dive into the world of coding with courses that cost less than a cup of tea per day – affordable, accessible, and your key to unlocking a bright coding future."
                    }
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/catalog/android",
                            active: true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "learn more",
                            linkto: "/about",
                            active: false,
                        }
                    }

                    codeblock={[`<!DOCTYPE html>`,`<html>\nhead><title>Affordable Courses</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>`,`h1><ahref="/">Non-stop Learning</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`]}
                    codeColor={"text-yellow-25"}
                    // backgroudGradient={elipseImage2}
                    backgroudGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>

            <ExploreMore />

        </div>

        {/* Section 2 */}
        <div className="bg-pure-greys-5 text-richblack-700">
            <div className="homepage_bg h-[320px]">
            {/* Explore Full Catagory Section */}
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                <div className="lg:h-[150px]"></div>
                <div className="flex flex-row gap-7 text-white lg:mt-8">
                <CTAButton active={true} linkto={"/catalog/android"}>
                    <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                    </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Learn More
                </CTAButton>
                </div>
            </div>
            </div>

            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
            {/* Job that is in Demand - Section 1 */}
            <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                <div className="text-4xl font-semibold lg:w-[45%] ">
                Get the skills you need for a{" "}
                <HighlightText text={"job that is in demand."} />
                </div>
                <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px]">
                SparkEd is more than just a platform; it's a catalyst for educational empowerment.
                </div>
                <CTAButton active={true} linkto={"/about"}>
                    <div className="">Learn More</div>
                </CTAButton>
                </div>
            </div>

            {/* Timeline Section - Section 2 */}
            <TimelineSection />

            {/* Learning Language Section - Section 3 */}
            <LearningLanguageSection />
            </div>
        </div>

        {/* Section 3 */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
            {/* Become a instructor section */}
            <InstructorSection />

            {/* Reviws from Other Learner */}
            <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
            </h1>
            <ReviewSlider />
        </div>

        {/* FOOTER */}
        <Footer />
        
    </div>
  )
}

export default Home 
