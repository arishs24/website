import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TechBox from "./TechBox";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 p-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-[#915EFF] text-white px-4 py-2 rounded-lg absolute top-5 left-5"
      >
        Back to Projects
      </button>

      <div className="bg-tertiary p-10 rounded-lg">
        {/* Title Section */}
        <h2 className="text-white font-bold text-[32px] mb-6">
          {project.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Role, Skills, Image */}
          <div className="col-span-2">
            {/* Role */}
            <div className="mb-6">
              <h3 className="text-secondary font-semibold text-[20px] mb-2">
                Role:
              </h3>
              <p className="text-white">{project.role}</p>
            </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills:</h2>

            {/* Soft Skills */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Soft Skills:</h3>
              <div className="flex flex-wrap gap-4">
                {project.softSkills.map((skill, idx) => (
                  <TechBox key={idx} name={skill} index={idx} />
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills:</h3>
              <div className="flex flex-wrap gap-4">
                {project.technicalSkills.map((skill, idx) => (
                  <TechBox key={idx} name={skill} index={idx} />
                ))}
              </div>
            </div>
          </div>

            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt="Project Visual"
                className="rounded-lg w-full h-auto mb-6"
              />
            )}
          </div>

          {/* Right Column: Informative Sections */}
          <div className="col-span-3">
            {/* Accordion Section: Patient Profile */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("patientProfile")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Patient Profile:
              </h3>
              {activeSection === "patientProfile" && (
                <div className="p-4 bg-gray-800 text-white">
                  <p className="mb-4">
                    Our patient, Tahani Al-Jamil, has an ostomy and uses a
                    two-piece drainable system. She has a very physically
                    demanding job that requires frequent twisting and bending
                    of the abdomen. Unfortunately, during these types of
                    activities, Tahani experiences a{" "}
                    <span className="text-yellow-400 font-bold">
                      frequent failure of the snap-in coupling of the flange
                      and the pouch.
                    </span>
                  </p>
                  <p>
                    This project aimed to design a modification for a colostomy
                    bag for Tahani to wear in her physically demanding work
                    environment, allowing her to move comfortably without
                    frequent adjustments.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion Section: Objectives and Constraints */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("objectives")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Establishing Objectives and Constraints:
              </h3>
              {activeSection === "objectives" && (
                <div className="p-4 bg-gray-800 text-white">
                  <p className="mb-4">
                  For this milestone, the team had to gather information based on our unique design challenge, define a need statement, and identify a set of objectives and constraints. These were aspects of the fundamental concepts of engineering problem solutions. 
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">
                        Objectives:
                      </h4>
                      <ul className="list-disc pl-5">
                        <li>Should be flexible</li>
                        <li>Stay fixed during exercise</li>
                        <li>Withstand twisting and bending</li>
                        <li>Adjustable to various stoma sizes</li>
                        <li>Comfortable for long periods</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">
                        Constraints:
                      </h4>
                      <ul className="list-disc pl-5">
                        <li>Must conform to two-piece system standards</li>
                        <li>Biocompatible materials</li>
                        <li>Comfortable for over an hour</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Section: Proposed Solution */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("solution")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Proposed Solution:
              </h3>
              {activeSection === "solution" && (
                <div className="p-4 bg-gray-800 text-white">
                  <p className="mb-4">
                    The <span className="text-yellow-400 font-bold">
                      Twist-Lock Ostomy
                    </span>{" "}
                    was designed to address coupling failure:
                  </p>
                  <ul className="list-decimal pl-5 space-y-4">
                    <li>
                      <strong>First Component:</strong> A two-part twist-lock
                      system with tabs for secure fitting.

                      Our solution consists of two main components:

1. **First Component:** two-part twist-lock system.
    1. the flange has a set of tabs that can be fitted into the slots present on the bag. The bag will then have to be fitted to the flange and twisted down so it locks in place. 
    2. Further supported by velcro attachments (see Figure 2)
                    </li>
                    <li>
                      <strong>Second Component:</strong> An elastic strap with
                      clips for stabilization.
                      2. **Second Component:** an elastic strap to stabilize the bag.
    1. two clips on either side of the elastic band will then allow the user to secure the ends to the waistband of their pants in a desired position.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion Section: Final Results */}
            <div
              className="border border-gray-700 rounded-lg"
              onClick={() => toggleSection("results")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Final Results:
              </h3>
              {activeSection === "results" && (
                <div className="p-4 bg-gray-800 text-white">
                  <p>
                  Overall, I am really happy with the outcome of our final design. There is always room for improvement; however, I am proud of the way our team was able to develop and communicate ideas that led to the creation of a unique prototype to meet our patients' needs.

The  {" "}
                    <strong>challenges</strong>, we had faced along the way had given way to several learning opportunities that contributed to the iterative nature of the project, emphasizing the importance of adaptability, through testing, and continuous refinement in the engineering design process.

This project helped reinforce the importance of time management and organization, as many milestones and conceptual designs required the team to meet outside of class hours. There was also a significant emphasis on problem-solving throughout the project. This is because developing an engineering solution is often iterative and dynamic, involving several stages of adjustments and modifications. Our team was ultimately able to address these challenges in our final design and create a product that met the majority of the objectives we had identified.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
