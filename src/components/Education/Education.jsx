import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-10 md:px-[10vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0f0f17] to-[#1a1a2e] text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-transparent bg-clip-text">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-0" />

        {/* Education Cards */}
        <div className="space-y-20">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 bg-[#8245ec] border-[6px] border-gray-800 w-8 h-8 rounded-full z-10 shadow-md" />

              {/* Card Content */}
              <div
                className={`bg-[#1f1f2f] border border-[#2f2f4a] backdrop-blur-xl shadow-xl rounded-2xl p-6 sm:p-8 w-full sm:w-[80%] md:w-[65%] z-20 ${
                  index % 2 === 0
                    ? "sm:ml-16 sm:text-left"
                    : "sm:mr-16 sm:text-right"
                } hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Header: School Logo + Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Grade and Description */}
                <p className="text-sm sm:text-base text-purple-300 font-medium mb-2">
                  🎓 Grade: {edu.grade}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
