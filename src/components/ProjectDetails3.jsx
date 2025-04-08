import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TechBox from "./TechBox";

const ProjectDetails3 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  const [openSections, setOpenSections] = useState({
    patientProfile: true,
    objectives: true,
    solution: true,
    materials: true,
    responsibilities: true,
    learningChallenges: true,
    reflection: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!project) {
    navigate("/");
    return null;
  }

  const handleBackToProjects = () => {
    if (window.location.pathname === "/") {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 p-4 md:p-10 bg-tertiary p-4 md:p-8 lg:p-10 rounded-lg">
      <button
        onClick={handleBackToProjects}
        className="bg-[#915EFF] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg mb-4"
      >
        Back to Projects
      </button>

      <div className="bg-tertiary p-10 rounded-lg">
        <h2 className="text-white font-bold text-[32px] mb-6">
          {project.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
  {/* Left Column: Role + Skills */}
  <div className="lg:col-span-4">
    <div className="mb-6">
      <h3 className="text-secondary font-semibold text-[20px] mb-2">
        Role:
      </h3>
      <p className="text-white">
        Subject Matter Expert (SME) — I led the creation and refinement of 3D CAD components including servo holders, gear mechanisms, and structural mounts. I collaborated closely with both the software and mechanical teams to ensure proper integration of components. I also played a key role in the physical assembly, gear testing, and documentation of our final prototype.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Soft Skills:</h3>
        <div className="flex flex-wrap gap-4">
          {project.softSkills.map((skill, idx) => (
            <TechBox key={idx} name={skill} index={idx} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Technical Skills:</h3>
        <div className="flex flex-wrap gap-4">
          {project.technicalSkills.map((skill, idx) => (
            <TechBox key={idx} name={skill} index={idx} />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Right Column: Content Sections */}
  <div className="lg:col-span-8">
            {/* Patient Profile */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("patientProfile")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Patient Profile
              </h3>
              {openSections["patientProfile"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <p className="text-lg">
                    The target demographic includes adults (18+) recovering from muscle injuries such as strains, overuse injuries, or partial tears. These users range from casual gym-goers to athletes. The biggest challenge they face is maintaining proper form during recovery exercises, which can lead to reinjury if not corrected. FlexAid provides real-time feedback and guided assistance to support a safer, more effective rehabilitation process.
                  </p>
                </div>
              )}
            </div>

            {/* Objectives and Constraints */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("objectives")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Establishing Objectives and Constraints
              </h3>
              {openSections["objectives"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold text-yellow-400 mb-2">Objectives</h4>
                      <ul className="list-disc pl-5">
                        <li>Guide users through proper rehabilitation form</li>
                        <li>Provide adjustable resistance using servo motors</li>
                        <li>Offer real-time motion tracking and alerts</li>
                        <li>Track rehabilitation data over time</li>
                        <li>Remain wearable, comfortable, and user-friendly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-yellow-400 mb-2">Constraints</h4>
                      <ul className="list-disc pl-5">
                        <li>Must fit varying arm sizes</li>
                        <li>Compatible with Raspberry Pi processing</li>
                        <li>Only approved components allowed</li>
                        <li>Mechanism must be printable using PLA</li>
                        <li>Safe for repetitive use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Proposed Solution */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("solution")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Proposed Solution
              </h3>
              {openSections["solution"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <p className="mb-4 text-lg">
                    FlexAid is a wearable rehabilitation assistant that includes a servo-driven resistance system, an orientation sensor for tracking range of motion, and a Raspberry Pi-based processor for data handling and UI.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Servo system provides resistance with bevel gears</li>
                    <li>Orientation sensor monitors movement and triggers alerts if improper form is detected</li>
                    <li>3D printed casing holds all mechanical and electrical components securely</li>
                    <li>GUI with real-time feedback and tracking display</li>
                    <li>Designed to be lightweight, durable, and easy to adjust</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Material Selection */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("materials")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Material Selection
              </h3>
              {openSections["materials"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>PLA Filament:</strong> Used for all structural components due to accessibility and print strength</li>
                    <li><strong>Bevel Gears:</strong> Provide rotational motion from the servo to the resistance arm</li>
                    <li><strong>Metal Rods:</strong> Used as the central axle for load-bearing support</li>
                    <li><strong>Orientation Sensor:</strong> Tracks real-time angular displacement</li>
                    <li><strong>Raspberry Pi:</strong> Acts as the control and feedback center of the system</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Responsibilities */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("responsibilities")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Responsibilities and Contributions
              </h3>
              {openSections["responsibilities"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Designed CAD models for servo casing, gear holders, and the Pi mount</li>
                    <li>Oversaw 3D printing and hardware integration</li>
                    <li>Helped refine gear alignment and stability post-print</li>
                    <li>Documented all updates in the DHF and helped prepare the industry memo</li>
                    <li>Supported team communication and iteration planning</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Learning Challenges */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("learningChallenges")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                💭 Learning Opportunities & Challenges
              </h3>
              {openSections["learningChallenges"] && (
                <div className="p-6 bg-gray-800 text-white space-y-4">
                  <p>
                    Designing a multi-part servo housing system taught me the importance of tolerancing and dimensional accuracy. Prototyping with gears showed how small misalignments can compromise motion quality.
                  </p>
                  <p>
                    Working alongside the software team to ensure mechanical integration required constant feedback and adjustment. I gained confidence in using Inventor, iterating designs, and problem-solving during prototype testing.
                  </p>
                </div>
              )}
            </div>

            {/* Final Reflection */}
            <div
              className="border border-gray-700 rounded-lg mb-6"
              onClick={() => toggleSection("reflection")}
            >
              <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
                Final Reflections
              </h3>
              {openSections["reflection"] && (
                <div className="p-6 bg-gray-800 text-white">
                  <p className="italic text-yellow-400 mb-4">
                    "Success is stumbling from failure to failure with no loss of enthusiasm." – Winston Churchill
                  </p>
                  <p className="mb-4">
                    The FlexAid project taught me that even the best-designed parts can fall short without testing. Early 3D prints exposed flaws in gear ratios and fitment. These issues became learning opportunities that made our final system stronger.
                  </p>
                  <p className="text-yellow-300">
                    <strong>What I Could’ve Done Better:</strong> I would have allocated more time for physical testing before moving to higher-fidelity designs.<br />
                    <strong>Outcome:</strong> This would’ve ensured smoother performance and improved durability before final assembly.
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

export default ProjectDetails3;
