import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TechBox from "./TechBox";

const ProjectDetails4 = () => {
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
    <div className="w-full min-h-screen bg-gray-900 p-4 md:p-10 bg-tertiary rounded-lg">
      <button
        onClick={handleBackToProjects}
        className="bg-[#915EFF] text-white px-4 py-2 rounded-lg mb-4"
      >
        Back to Projects
      </button>

      <div className="bg-tertiary p-10 rounded-lg">
        <h2 className="text-white font-bold text-[32px] mb-6">
          {project.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Role + Skills */}
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-secondary font-semibold text-[20px] mb-2">
                Role:
              </h3>
              <p className="text-white">
                Subject Matter Expert — I led the CAD design of the gear mount, FSR housing, and chain casing.
                I worked closely on system assembly and tested various gait cycles for proper assistance.
                I also contributed heavily to the DHF, references, and team memo.
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

          {/* Right Column: Project Info */}
          <div className="col-span-3">
            <Section
              title="Patient Profile"
              open={openSections["patientProfile"]}
              toggle={() => toggleSection("patientProfile")}
              content={
                <p>
                  Bradley, an adult diagnosed with Multiple Sclerosis (MS), experiences foot drop in his left leg,
                  limiting his ability to run — an activity vital to his physical and mental health. He needs
                  a device to assist with foot flexion during running.
                </p>
              }
            />

            <Section
              title="Establishing Objectives and Constraints"
              open={openSections["objectives"]}
              toggle={() => toggleSection("objectives")}
              content={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Objectives</h4>
                    <ul className="list-disc pl-5">
                      <li>Support foot flexion during running</li>
                      <li>Remain lightweight and wearable</li>
                      <li>Provide accurate cadence feedback</li>
                      <li>Allow smooth integration with footwear</li>
                      <li>Offer reliable motion correction in real-time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Constraints</h4>
                    <ul className="list-disc pl-5">
                      <li>Use only approved components</li>
                      <li>Gear/servo system must be low-latency</li>
                      <li>Print all structures in PLA</li>
                      <li>Must be safe for repeated heel strikes</li>
                      <li>System needs to align with FSR inputs</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <Section
              title="Proposed Solution"
              open={openSections["solution"]}
              toggle={() => toggleSection("solution")}
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chain and gear mechanism inspired by bike design</li>
                  <li>Servo motor drives lift motion based on sensor timing</li>
                  <li>Two FSR sensors placed under heel and ball of foot</li>
                  <li>Designed to attach to shoes and be adjustable</li>
                  <li>App GUI shows step count, cadence, alerts</li>
                </ul>
              }
            />

            <Section
              title="Material Selection"
              open={openSections["materials"]}
              toggle={() => toggleSection("materials")}
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>PLA:</strong> Used for structural components</li>
                  <li><strong>TPU Strap:</strong> Adjustable fit and durability</li>
                  <li><strong>Servo:</strong> Core lifting mechanism</li>
                  <li><strong>Chain & Gears:</strong> Inspired by bicycle drivetrain</li>
                  <li><strong>FSRs:</strong> Detect gait timing under foot</li>
                  <li><strong>Raspberry Pi:</strong> Process control + UI feedback</li>
                </ul>
              }
            />

            <Section
              title="Responsibilities and Contributions"
              open={openSections["responsibilities"]}
              toggle={() => toggleSection("responsibilities")}
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>CAD design of gear mount and sensor holders</li>
                  <li>Tested servo output with multiple gait patterns</li>
                  <li>Refined housing for gear alignment and safety</li>
                  <li>Created DHF and wrote summary memo content</li>
                </ul>
              }
            />

            <Section
              title="💭 Learning Opportunities & Challenges"
              open={openSections["learningChallenges"]}
              toggle={() => toggleSection("learningChallenges")}
              content={
                <div className="space-y-4">
                  <p>We learned that optimal force application and minimal friction are critical when supporting joint motion dynamically.</p>
                  <p>I developed a better understanding of mechanical tolerancing and the importance of gear ratio optimization under physical load.</p>
                </div>
              }
            />

            <Section
              title="Final Reflections"
              open={openSections["reflection"]}
              toggle={() => toggleSection("reflection")}
              content={
                <div>
                  <p className="italic text-yellow-400 mb-4">
                    “Let’s get Bradley running again!”
                  </p>
                  <p className="mb-4">
                    This project showed me how small mechanical inefficiencies can compound during testing.
                    We had to iterate several gear alignments to avoid jamming. Future improvements include
                    reducing servo delay and increasing comfort for long-term wear.
                  </p>
                  <p className="text-yellow-300">
                    <strong>What I Could’ve Done Better:</strong> More testing early in design stages.
                    <br />
                    <strong>Outcome:</strong> Reduced last-minute fixes and improved final fit.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, open, toggle, content }) => (
  <div className="border border-gray-700 rounded-lg mb-6" onClick={toggle}>
    <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
      {title}
    </h3>
    {open && <div className="p-6 bg-gray-800 text-white">{content}</div>}
  </div>
);

export default ProjectDetails4;
