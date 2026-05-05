import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Importing components
import Navbar from "../components/navbar/Navbar"; // Import the Navbar component
import Footer from "../components/footer/Footer";
import Background from "../components/background/Background";
import "../components/background/Background.css";

// Importing images
import ahmadImg from "../assets/ahmad.jpg";
import wahajImg from "../assets/wahaj.jpg";
import miraalImg from "../assets/miraal.jpg";
import muneebImg from "../assets/muneeb.jpg";
import hashimImg from "../assets/hashim.jpeg";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const AboutUsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white">
      {/* Navbar */}
      <Navbar />

      <div
        className="home-hero"
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <Background />

        <div />
        <section className="h-1/4 flex flex-col justify-center text-center py-8 px-4 ">
          <MotionH1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-3"
          >
            About SkillSwap
          </MotionH1>
          <MotionP
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold italic font-light max-w-xl mx-auto"
          >
            A futuristic peer-to-peer skill exchange platform, connecting
            learners and experts worldwide.
          </MotionP>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Block */}
          <div>
            <MotionDiv
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-white ">
                To empower individuals to grow through collaborative learning
                and skill-sharing communities.
              </p>
            </MotionDiv>
          </div>

          {/* Vision Block */}
          <div>
            <MotionDiv
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
            >
              <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
              <p className="text-white">
                A global network where anyone can teach and learn any
                skill—seamlessly, affordably, and quickly.
              </p>
            </MotionDiv>
          </div>
        </section>

        

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-white-300 via-blue-500 to-blue-400 text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            Join the Skill Revolution
          </h2>
          <p className="mb-6 text-lg italic">
            Start teaching, learning, and growing with the global SkillSwap
            community.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Skills
          </button>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
