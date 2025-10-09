 import React from "react"
 import Navbar from "@/components/Navbar";
 import Hero from "@/components/Hero";
 import Services from "@/components/Services";
 import Resume from "@/components/Resume";
 import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {

 


  return (
    <div className="" style={{paddingTop:"10px"}}>
         <Navbar />
          <Hero />
          <Services />
          <Resume />
          <Projects />
          <Testimonials />
          <Contact/>
          <Footer/>
     
      
    </div>
  );
}
