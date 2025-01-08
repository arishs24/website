import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TechBox from "./TechBox";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;


  const [openSections, setOpenSections] = useState({
      patientProfile: true,
      objectives: true,
      solution: true,
      resp: true,
      learning: true,
      results: true,
    });


  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the specific section
    }));
  };

  if (!project) {
    navigate("/");
    return null;
  }

  const handleBackToProjects = () => {
    if (window.location.pathname === "/") {
      // If already on the homepage, scroll to the #projects section
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the homepage and scroll after it loads
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to allow homepage to load
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 p-4 md:p-10 bg-tertiary p-4 md:p-8 lg:p-10 rounded-lg">
      {/* Back Button */}
      <button
        onClick={handleBackToProjects}
        className="bg-[#915EFF] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg mb-4"
      >
        Back to Projects
      </button>
  
      <div>
        {/* Title Section */}
        <h2 className="text-white font-bold text-[20px] md:text-[28px] lg:text-[32px] mb-6">
          {project.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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
    Patient Profile
  </h3>
  {openSections["patientProfile"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <p className="mb-4 text-lg">
        Our patient, <strong className="text-yellow-400">Kate Austen</strong>, uses a colostomy bag and often experiences frequent detachment of her current bag during physical activities due to a failure in the snap-in mechanism.
      </p>
      <p className="mb-4 text-yellow-400 font-bold">
        The bag must remain intact during long hours of physical activity that include motions of twisting and bending at the abdomen, such as jogging. It should be comfortable and tightly secured to lessen interference with daily activities, enhancing Kate's quality of life.
      </p>
      <p className="text-lg">
        This project aims to design a modification for a colostomy bag that allows Kate to wear it during her physically demanding activities, such as jogging. The design should enable her to move comfortably without frequent adjustments, ensuring durability and comfort throughout her daily life.
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
    Establishing Objectives and Constraints
  </h3>
  {openSections["objectives"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <p className="mb-6 text-lg">
        For this milestone, the team gathered information about our unique design challenge, defined a need statement, and identified a set of objectives and constraints. These aspects were fundamental to formulating an engineering problem solution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Objectives Section */}
        <div>
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Objectives
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Should be durable</li>
            <li>Should be comfortable throughout extended use</li>
            <li>Should have a simplified process for attaching, adjusting, and detaching</li>
            <li>Should be lightweight to avoid hindering physical activity</li>
            <li>Should have an adhesive capable of withstanding elevated body temperature and physical activity</li>
          </ul>
        </div>
        {/* Constraints Section */}
        <div>
          <h4 className="text-xl font-semibold text-yellow-400 mb-4">
            Constraints
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Must be safe for the skin</li>
            <li>Must be capable of containing stool securely</li>
            <li>Must accommodate frequent movement such as bending, twisting, and jogging</li>
            <li>Must prevent the pouch from detaching during movement</li>
            <li>Must work within standard ostomy appliance sizes</li>
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
    Proposed Solution
  </h3>
  {openSections["solution"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <p className="mb-6 text-lg">
        The <span className="text-yellow-400 font-bold">Twist-Lock Ostomy</span> was designed to address coupling failure and ensure enhanced usability for users:
      </p>
      <ul className="list-decimal pl-5 space-y-6 text-lg">
        <li>
          <strong>First Component:</strong> A two-part twist-lock system with tabs for secure fitting.
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The flange includes a set of tabs that align with corresponding slots on the bag. The user fits the tabs into the slots and twists the bag into place, securely locking it.</li>
            <li>A locking indicator provides clear visual feedback to ensure proper attachment, eliminating guesswork.</li>
          </ul>
        </li>
        <li>
          <strong>Second Component:</strong> A locking indicator for added confidence.
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The locking indicator ensures users can visually confirm when the bag is securely attached, offering peace of mind and improved usability during physical activity.</li>
          </ul>
        </li>
        <li>
          <strong>Design Process:</strong>
          <p className="mt-2">
            The design process involved multiple iterations to ensure functionality and user-friendliness. The image below demonstrates one of the early concept sketches of the Twist-Lock Ostomy system:
          </p>
          <img
            src="/dp/whiteboard.png"
            alt="Design Process Sketch of the Twist-Lock Ostomy System"
            className="mt-4 w-full max-w-lg border border-gray-500 rounded-lg"
          />
        </li>
        <li>
          <strong>Final Prototype:</strong>
          <p className="mt-2">
            The image below showcases the completed prototype of the Twist n’ Go Colostomy Bag, highlighting the twist-lock mechanism and locking indicator:
          </p>
          <img
            src="/dp/finalprot.png"
            alt="Final Prototype of Twist n’ Go Colostomy Bag"
            className="mt-4 w-full max-w-lg border border-gray-500 rounded-lg"
          />
        </li>
      </ul>
    </div>
  )}
</div>



{/* Accordion Section: Responsibilities and Contributions */}
<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("resp")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    Responsibilities and Contributions
  </h3>
  {openSections["resp"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <ul className="list-disc pl-5 space-y-6 text-lg">
        {/* Team Manager Section */}
        <li>
          <strong>Team Manager:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Created weekly meeting agendas to ensure structured and efficient discussions.</li>
            <li>Delivered updates from Teaching Assistants (TAs) at the start of design meetings to align team efforts.</li>
            <li>Developed the preliminary Gantt chart to plan and track project progress effectively.</li>
          </ul>
        </li>

        {/* Written Documentation Section */}
        <li>
          <strong>Written Documentation:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Wrote the abstract to summarize the project's goals, methodology, and outcomes.</li>
          </ul>
        </li>

        {/* Prototyping and Video Section */}
        <li>
          <strong>Prototyping and Video:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Played a leading role in the low-fidelity prototype video, contributing both on-screen and behind the scenes.</li>
            <li>Cut and prepared materials required for constructing the low-fidelity prototype.</li>
          </ul>
        </li>
      </ul>
    </div>
  )}
</div>


{/* Accordion Section: Project Learning Opportunities and Challenges */}
<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("learning")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    💭 Project Learning Opportunities and Challenges
  </h3>
  {openSections["learning"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <ul className="list-disc pl-5 space-y-6 text-lg">
        {/* Project Learning Section */}
        <li>
          <strong>Project Learning Opportunities and Challenges:</strong>
          <p className="mt-2">
            During the early stages of the project, one of the main challenges
            was ensuring all tasks were organized and completed on time. As the
            manager, I had to oversee team progress and create the preliminary
            Gantt chart, which required identifying and accounting for each
            task’s duration and dependencies. This process taught me the
            importance of detailed planning and clear communication in
            maintaining project momentum, especially when working with a tight
            schedule.
          </p>
          <img
            src="/dp/w2.png"
            alt="Concept Design Iteration"
            className="mt-4 w-full max-w-lg border border-gray-500 rounded-lg"
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            <strong>Fig. 3:</strong> Concept design iteration showing previous ideas which we considered.
          </p>
        </li>

        {/* Preliminary Concept Design Section */}
        <li>
          <strong>Preliminary Concept Design:</strong>
          <p className="mt-2">
            Developing the twist-and-lock system was an iterative process.
            While the initial design was promising, discussions revealed the
            need to refine certain aspects to enhance functionality and
            usability. For example, we evaluated potential issues related to bag
            detachment during physical activity and adjusted the design to
            include a locking indicator for added confidence. This taught me
            the value of revisiting initial concepts and incorporating feedback
            to achieve a more effective solution.
          </p>
        </li>

        {/* Prototyping Process Section */}
        <li>
          <strong>Prototyping Process:</strong>
          <p className="mt-2">
            The construction of the low-fidelity prototype provided valuable
            insights into the design’s feasibility. Cutting and preparing the
            materials for the prototype highlighted potential improvements
            needed for durability and usability. Additionally, the prototyping
            process reinforced the importance of hands-on testing and
            demonstrated that a well-executed prototype is essential for
            identifying and addressing design flaws before moving forward.
          </p>
          <img
            src="/dp/proty.jpg"
            alt="Low-Fidelity Prototype Construction"
            className="mt-4 w-full max-w-lg border border-gray-500 rounded-lg"
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            <strong>Fig. 4:</strong> Low-fidelity prototype showcasing the construction process and initial design tests.
          </p>
        </li>
      </ul>
    </div>
  )}
</div>



          {/* Accordion Section: Final Results */}
<div
  className="border border-gray-700 rounded-lg mb-6"
  onClick={() => toggleSection("results")}
>
  <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">
    Final Results, Thoughts, & Regrets
  </h3>
  {openSections["results"] && (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <p className="italic text-yellow-400 mb-6">
        "We do not learn from experience... we learn from reflecting on experience." – John Dewey
      </p>
      <ul className="list-disc pl-5 space-y-6 text-lg">
        {/* Early Challenges Section */}
        <li>
          <strong>Early Challenges:</strong>
          <p className="mt-2">
            One of the first challenges was defining clear design constraints.
            I questioned whether our scope was realistic, especially as we focused on the twist-and-lock mechanism. Through discussions and feedback, we incorporated a locking indicator, balancing innovation with practicality and improving usability for patients.
          </p>
        </li>

        {/* Prototyping and Adaptability Section */}
        <li>
          <strong>Prototyping and Adaptability:</strong>
          <p className="mt-2">
            While cutting materials for the low-fidelity prototype, slight misalignments in the tabs and slots revealed the need for refined measurements. This iterative process reinforced the importance of adaptability and precision in engineering design.
          </p>
        </li>

        {/* Time Management Section */}
        <li>
          <strong>Time Management:</strong>
          <p className="mt-2">
            Balancing weekly agendas, TA updates, and project milestones taught me to prioritize collaboration and flexibility. I often questioned whether I had allowed enough time for problem-solving, but the iterative approach helped us address challenges effectively.
          </p>
        </li>

        {/* Final Reflections Section */}
        <li>
          <strong>Final Reflections:</strong>
          <p className="mt-2">
            The <em>Twist n’ Go Colostomy Bag</em> demonstrated the value of questioning, testing, and adapting. This project solidified my understanding that engineering solutions require a dynamic process of reflection and continuous improvement. By staying open to alternatives, our team successfully created a prototype that met the majority of our objectives.
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

export default ProjectDetails;
