import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TechBox from "./TechBox";

const ProjectDetails2 = () => {
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
    <div className="w-full min-h-screen bg-gray-900 p-4 md:p-10 bg-tertiary p-4 md:p-8 lg:p-10 rounded-lg">
      {/* Back Button */}
      <button
        onClick={() => navigate("/#projects")}
        className="bg-[#915EFF] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg mb-4"
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


            {/* {project.image && (
              <img
                src={project.image}
                alt="Project Visual"
                className="rounded-lg w-full h-auto mb-6"
              />
            )} */}
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
    <div className="p-6 bg-gray-800 text-white">
      <ul className="list-disc pl-6 space-y-6">
        <li>
          <strong>Symptoms:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Severe hip, thigh, and groin pain</li>
            <li>Morning stiffness and discomfort when sitting or walking</li>
            <li>Nodules on toes</li>
          </ul>
        </li>
        <li>
          <strong>Clinical Findings:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Elevated ESR (38 mm/h)</li>
            <li>WBC count (30,200)</li>
            <li>CCP levels (28 u/mL)</li>
            <li>
              X-rays showing bone erosion and reduced joint space (Fig. 1 and
              Fig. 2)
            </li>
          </ul>
        </li>
        <li>
          <strong>Miscellaneous Notes:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Allergic to metal</li>
            <li>Athletic lifestyle</li>
          </ul>
        </li>
        <li>
          <strong>Patient Final Diagnosis:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Bilateral Rheumatoid Arthritis (RA):</strong> Based on
              symptoms, inflammatory markers, CCP levels, and imaging findings.
            </li>
          </ul>
        </li>
      </ul>
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
                      <li>Durable enough for physical activity</li>
    <li>Reduces hip/joint pain</li>
    <li>Comfortable for daily tasks (e.g., walking, sitting)</li>
    <li>Ensures high longevity of the hip implant</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">
                        Constraints:
                      </h4>
                      <ul className="list-disc pl-5">
                      <li>Bilateral replacement for both hips</li>
    <li>Biocompatible and free of allergenic metals</li>
    <li>Must replace worn-out joints and alleviate pain</li>
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
        The <span className="text-yellow-400 font-bold">PEEKformance</span>{" "}
        hip implant solution was designed to address the patient’s unique needs
        by modifying key components of the hip implant:
      </p>
      <ul className="list-decimal pl-5 space-y-4">
        <li>
          <strong>Femoral Stem:</strong>
          <ul className="list-disc pl-5">
            <li>Designed with <strong>anti-rotational fins</strong> to prevent micromotion and ensure stability during physical activity.</li>
            <li>Features an <strong>anterior bow curve</strong> that mimics the natural femoral curvature to reduce stress during implantation.</li>
            <li>Constructed with <strong>Zirconia with Diamond-Like Carbon (DLC) Coating</strong> to provide durability, fracture resistance, and a low-friction surface.</li>
          </ul>
        </li>
        <li>
          <strong>Acetabular Cup:</strong>
          <ul className="list-disc pl-5">
            <li>Crafted from <strong>semi-crystalline polymer</strong>, offering low wear and high biocompatibility.</li>
            <li>Features a <strong>textured surface</strong> for better grip and improved bone stability.</li>
            <li>Includes screw holes for enhanced anchorage during surgical fixation.</li>
            <li>Reduces wear and friction for long-term durability.</li>
          </ul>
        </li>
        <li>
          <strong>Screws:</strong>
          <ul className="list-disc pl-5">
            <li>
              <strong>Hydroxyapatite-coated screws:</strong> Designed to promote bone growth, reduce micromotion, and enhance implant stability.
            </li>
          </ul>
        </li>
        <li>
          <strong>Why PEEKformance?</strong>
          <ul className="list-disc pl-5">
            <li><strong>Metal-Free:</strong> Utilizes polymer and ceramic materials to eliminate allergic reactions and improve biocompatibility.</li>
            <li><strong>Stress Reduction:</strong> PEEK material reduces stress shielding and improves weight distribution across the implant.</li>
            <li><strong>Durability and Comfort:</strong> Zirconia with DLC coating provides fracture resistance and longevity, while shock-absorbing liners enhance patient comfort during physical activity.</li>
          </ul>
        </li>
      </ul>
    </div>
  )}
</div>
<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("materials")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    Material Selection:
  </h3>
  {activeSection === "materials" && (
    <div className="p-4 bg-gray-800 text-white">
      <p className="mb-4">
        The <span className="text-yellow-400 font-bold">PEEKformance</span>{" "}
        solution incorporates the following advanced materials:
      </p>
      <ul className="list-decimal pl-5 space-y-4">
        <li>
          <strong>Polyetheretherketone (PEEK):</strong> A biocompatible polymer with reinforced carbon fibers to reduce stress shielding and match bone elasticity.
        </li>
        <li>
          <strong>Hydroxyapatite Coating:</strong> Applied to screw threads and surfaces to promote osseointegration and bone growth.
        </li>
        <li>
          <strong>Vitamin E-Infused Polyethylene (VEHXPE):</strong> Enhances wear resistance, reduces implant degradation, and improves longevity.
        </li>
        <li>
          <strong>Zirconia with Diamond-Like Carbon (DLC) Coating:</strong> Provides durability, fracture resistance, and a low-friction surface for improved performance and comfort.
        </li>
      </ul>
    </div>
  )}
</div>

<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("responsibilities")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    Responsibilities and Contributions:
  </h3>
  {activeSection === "responsibilities" && (
    <div className="p-4 bg-gray-800 text-white">
      <ul className="list-decimal pl-5 space-y-4">
        <li>
          I was assigned the role of <strong>Subject Matter Expert</strong> and
          was responsible for creating the <strong>final reference page</strong> to document research findings.
        </li>
        <li>
          I was in charge of <strong>creating the solid CAD model</strong> for
          the acetabular cup, liner, and ball joint, ensuring accurate dimensions and designs.
        </li>
        <li>
          Conducted in-depth research on <strong>Rheumatoid Arthritis (RA)</strong> to determine the most efficient materials for surgical fixation.
        </li>
        <li>
          Completed the <strong>CAD designs</strong> with the necessary measurements and technical details.
        </li>
        <li>
          Performed <strong>vital research for the poster board</strong> and was responsible for designing and printing the final presentation poster.
        </li>
      </ul>
    </div>
  )}
</div>

<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("learningChallenges")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    💭 Project Learning Opportunities and Challenges
  </h3>
  {activeSection === "learningChallenges" && (
    <div className="p-4 bg-gray-800 text-white">
      <ul className="list-decimal pl-5 space-y-4">
        <li>
          <strong>CAD Modeling and Material Selection:</strong>
          <p className="mt-2">
            One of the main challenges I encountered was ensuring the{" "}
            <strong>accuracy and precision of the CAD model</strong> for the
            acetabular cup, liner, and ball joint. Since the design had to meet
            specific patient needs, such as biocompatibility and fracture
            resistance, it required extensive research on material properties,
            including <strong>Rheumatoid Arthritis (RA)</strong> and its effects
            on bone strength. Incorporating optimal implant dimensions while
            adhering to these constraints involved a significant amount of trial
            and error. However, by applying feedback from team discussions and
            mentors, I was able to refine the model and select the most
            efficient materials for surgical fixation.
          </p>
        </li>
        <li>
          <strong>Poster Development:</strong>
          <p className="mt-2">
            This project provided me with valuable experience in translating
            technical designs into a{" "}
            <strong>clear and visually appealing poster presentation.</strong>{" "}
            Designing the final poster required me to summarize complex research
            findings and showcase the <strong>CAD models</strong> in a way that
            highlighted their functionality. Balancing technical accuracy with
            accessibility for the audience taught me the importance of effective
            visual communication.
          </p>
        </li>
      </ul>
    </div>
  )}
</div>


            {/* Accordion Section: Final Results */}
            <div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("reflection")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    Reflecting on the Project
  </h3>
  {activeSection === "reflection" && (
    <div className="p-4 bg-gray-800 text-white">
      <p className="italic text-yellow-400 mb-4">
        "Success is stumbling from failure to failure with no loss of
        enthusiasm." – Winston Churchill
      </p>
      <p className="mb-4">
        This project embodied this sentiment, as each challenge became an
        opportunity to adapt and improve.
      </p>
      <ul className="list-decimal pl-5 space-y-4">
        <li>
          <strong>Early Challenges:</strong>
          <p className="mt-2">
            Researching <strong>Rheumatoid Arthritis (RA)</strong> and selecting
            suitable materials required balancing biocompatibility, durability,
            and patient-specific needs. This process forced me to critically
            evaluate whether our designs addressed the patient’s symptoms and
            surgical requirements.
          </p>
        </li>
        <li>
          <strong>Design and Prototyping:</strong>
          <p className="mt-2">
            Refining the <strong>CAD models</strong> for the acetabular cup and
            liner taught me the importance of precision and adaptability.
            Iterations based on team feedback ensured that the models met both
            functional and anatomical needs.
          </p>
        </li>
        <li>
          <strong>Collaboration and Presentation:</strong>
          <p className="mt-2">
            Balancing <strong>technical responsibilities</strong> with the
            creation of a cohesive poster presentation emphasized the importance
            of teamwork. Clear communication allowed us to effectively integrate
            our findings into a polished final deliverable.
          </p>
        </li>
        <li>
          <strong>Final Reflections:</strong>
          <p className="mt-2">
            This project reinforced that innovation arises from iterative
            learning and collaboration. The{" "}
            <strong>PEEKformance implant</strong> showcases how challenges can
            be transformed into meaningful solutions through persistence and
            adaptability.
          </p>
        </li>
      </ul>
    </div>
  )}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
