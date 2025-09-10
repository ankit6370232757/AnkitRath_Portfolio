import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/Ankit_profileimg.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans bg-[#0f0f17] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        
        {/* Left Side Content with Animation */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent">
            Ankit Kumar Rath
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            <span className="mr-2">I am a</span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'App Developer',
                'UI/UX Designer',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#a855f7]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-4">
            I’m a versatile <span className="text-white font-semibold">Full Stack Developer</span> passionate about
            building scalable, elegant web applications. My expertise includes frontend tools like{' '}
            <span className="text-white font-semibold">HTML, CSS, JavaScript, React</span>, and backend technologies
            such as <span className="text-white font-semibold">Node.js and Java</span>. I also work with databases like{' '}
            <span className="text-white font-semibold">MongoDB, MySQL, and PostgreSQL</span>.
            <br /><br />
            I enjoy solving real-world problems, collaborating with cross-functional teams, and staying curious to
            learn new technologies that drive impactful solutions.
          </p>

          <div className="pt-6">
            <a
              href="https://drive.google.com/file/d/1cBAkb-mF4pb2LX-oic2AH26dIQgMi6tV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              }}
            >
              📄 Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Side Profile Image with Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-700 shadow-2xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Profile of Ankit Kumar Rath"
              className="w-full h-full rounded-full object-cover shadow-[0_20px_30px_rgba(130,69,236,0.4)] hover:scale-105 transition-transform duration-500"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
