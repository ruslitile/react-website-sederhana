import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 
import Courses from "../components/Courses"
import Tutor from "../components/Tutor"
import Partner from "../components/Partner"
import Contact from "../components/Contact"
import { HomeSection } from "../data/HomeSection"
import {tutorsList } from "../data/TutorsSection"
import {partnersList } from "../data/PartnerSection"

import parse from 'html-react-parser';
import '../styles/Home.css'
function Home() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
    <section id="home">
            <img src={HomeSection.Image}/>
            <div className="kolom">
               {parse(HomeSection.content)}
            </div>
        </section>
    <Courses />
    <Tutor tutorsList={tutorsList}/>
    <Partner partnersList={partnersList}/>
    <Contact />
    </div>
    <Footer />
    
    </>
  )
}

export default Home
