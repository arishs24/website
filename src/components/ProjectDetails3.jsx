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
    computing: true,
    responsibilities: true,
    learningChallenges: true,
    reflection: true,
  });

  const [showComputingDetails, setShowComputingDetails] = useState(false);

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

        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-[#915EFF] mb-10 shadow-lg">
          <h3 className="text-white text-[22px] font-bold mb-3">🔍 Project Overview</h3>

            {/* 💡 Insert image here */}
  <img
    src="/dp/dp3.jpg"

    alt="FlexAid Device Overview"
    className="rounded-lg shadow-md mb-4 w-full max-h-[400px] object-contain"
  />

<p className="text-sm text-gray-400 mt-2">Fig 1: Final design and version of FlexAid.</p>


          <p className="text-white text-[18px] leading-relaxed">
            <span className="text-yellow-300 font-semibold">FlexAid</span> is a wearable rehabilitation device designed to guide users through upper-limb recovery exercises by detecting motion in real time, providing personalized resistance, and offering immediate visual feedback. 
            <br /><br />
            As <span className="text-secondary font-semibold">Project Coordinator</span> and a member of the <span className="text-secondary font-semibold">Computing Subteam</span>, I led development of the backend logic for servo-triggered feedback, real-time calibration, and graphical data visualization using Python and Tkinter. I also organized our team’s meetings, tracked progress logs, and ensured deliverables were aligned.
            <br /><br />
            This page breaks down our problem statement, objectives, proposed solution, technical challenges, and the growth I experienced throughout the engineering design process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Role */}
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md">
  <h3 className="text-secondary font-semibold text-[20px] mb-3">Role:</h3>
  <p className="text-white text-[18px] leading-relaxed">
    <span className="font-semibold text-yellow-300">Project Coordinator</span> , I was responsible for leading and scheduling all team meetings outside of Design Studio, recording discussion notes during official sessions, and maintaining clear communication with our TA throughout the design process. I also compiled and submitted the final Logbook documenting all non-studio meetings to ensure alignment across all subteams.
  </p>

  {/* Toggle Button */}
  <button
    onClick={() => setShowComputingDetails(!showComputingDetails)}
    className="mt-4 text-sm text-blue-400 hover:text-blue-200 underline"
  >
    {showComputingDetails ? "Hide Computing Subteam Details ▲" : "Show Computing Subteam Details ▼"}
  </button>

  {/* Expandable Bullet-Point Computing Section */}
  {showComputingDetails && (
    <div className="mt-4 text-white text-[16px] leading-relaxed bg-gray-700 p-4 rounded-lg border border-gray-600">
      <h4 className="text-blue-300 font-semibold text-[17px] mb-2">Computing Subteam Contributions:</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Programmed logic to adjust servo resistance based on real-time orientation thresholds.
        </li>
        <li>
          Built a Python-based GUI using <code>Tkinter</code> that provided dynamic graphing and live feedback.
        </li>
        <li>
          Integrated sensor input with servo output to enable closed-loop feedback for rehabilitation.
        </li>
        <li>
          Optimized performance to ensure smooth operation on a Raspberry Pi.
        </li>
        <li>
          Collaborated closely with hardware and mechanical teams to align software logic with physical constraints.
        </li>
      </ul>
    </div>
  )}
</div>



            {/* Skills */}
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-white">Skills:</h2>
              {/* Soft Skills */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Soft Skills:</h3>
                <div className="flex flex-wrap gap-5">
                  {project.softSkills.map((skill, idx) => (
                    <TechBox key={idx} name={skill} index={idx} size="large" />
                  ))}
                </div>
              </div>
              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Technical Skills:</h3>
                <div className="flex flex-wrap gap-5">
                  {project.technicalSkills.map((skill, idx) => (
                    <TechBox key={idx} name={skill} index={idx} size="large" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-9 space-y-6">
            {renderSection("Patient Profile", "patientProfile", openSections, toggleSection, (
              <p className="text-[18px] text-white leading-relaxed">
                Our patient demographic included adults recovering from upper limb injuries. The major challenge was ensuring correct rehab form without external support. Our solution aimed to offer real-time correction, data visualization, and guided rehab,bridging gaps in solo physiotherapy sessions.
              </p>
            ))}

            {renderSection("Establishing Objectives and Constraints", "objectives", openSections, toggleSection, (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-2">Objectives</h4>
                  <ul className="list-disc pl-5 text-[17px] text-white">
                    <li>Detect and respond to poor rehab form</li>
                    <li>Customize resistance levels using ML logic</li>
                    <li>Ensure long-term tracking through GUI feedback</li>
                    <li>Remain lightweight, wearable, and user-friendly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-2">Constraints</h4>
                  <ul className="list-disc pl-5 text-[17px] text-white">
                    <li>Device must fit a range of users</li>
                    <li>Hardware must be Raspberry Pi-compatible</li>
                    <li>Only course-approved components could be used</li>
                    <li>Data processing needed to run in real time</li>
                  </ul>
                </div>
              </div>
            ))}

            {renderSection("Proposed Solution", "solution", openSections, toggleSection, (
              <>
                <p className="mb-4 text-[18px] text-white leading-relaxed">
                  FlexAid is a smart rehab band that combines machine learning, sensors, and servo resistance for personalized feedback. It monitors arm orientation during rehab exercises, adjusts resistance based on calibration, and gives real-time UI updates to guide recovery.
                </p>
    {/* 🎥 Embed your demo video here */}
    <div className="my-6 rounded-lg overflow-hidden shadow-lg">
      <video
        controls
        className="w-full max-h-[480px] rounded-lg"
      >
        <source src="/dp/dp3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-white">
                  <li>Orientation sensor captures motion during exercise</li>
                  <li>Servo provides user-specific resistance during bicep curls</li>
                  <li>Real-time alert system identifies improper form</li>
                  <li>UI gives live feedback and performance tracking</li>
                </ul>
              </>
            ))}

            {renderSection("Computing & Integration Highlights", "computing", openSections, toggleSection, (
              <>
                <ul className="list-disc pl-6 space-y-2 text-[17px] text-white">
                  <li>Developed personalized resistance algorithm using calibration thresholds</li>
                  <li>Implemented real-time feedback logic tied to FSR and orientation data</li>
                  <li>Built a Tkinter-based GUI to guide users and visualize sensor output</li>
                  <li>Handled data transmission from sensors to Raspberry Pi backend</li>

                  <img
      src="/dp/graph.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
                  <p className="text-sm text-gray-400 mt-2">Fig 2: Data transmission from Raspberry Pi to frontend, displaying on graph using Matplotlib and Tkinter.</p>

                </ul>
              </>
            ))}

            {renderSection("Responsibilities and Contributions", "responsibilities", openSections, toggleSection, (
              <ul className="list-disc pl-6 space-y-2 text-[17px] text-white">
                <li>Organized external meetings and submitted logbook documentation</li>
                <li>Served as Note-Taker and primary TA liaison during studio</li>
                <li>Led computing subteam in developing machine learning backend</li>
                <li>Created and integrated the full user interface (Tkinter)</li>
                <li>Processed live sensor data and connected feedback loops</li>
                <li>Printed final product ID, sourced Expo materials, and edited the video deliverable</li>
                <li>Contributed technical insights to the industry memo</li>
              </ul>
            ))}

{renderSection("💻 Explore the Code", "codeViewer", openSections, toggleSection, (
  <div className="space-y-4 text-[17px] text-white leading-relaxed">
<p>
  This section of the code manages real-time motion tracking and feedback logic. It reads continuous orientation data, compares it against personalized calibration thresholds, and triggers servo motor responses or buzzer alerts when improper form is detected. It also updates the graphical interface using Tkinter and Matplotlib, allowing users to monitor their exercise progress live.
</p>

    <div className="max-h-[500px] overflow-y-scroll bg-gray-900 rounded-md p-4 border border-gray-700">
      <pre className="language-python text-sm">
        <code className="language-python">
{`# Excerpt from Team_6_DP3_PythonProgram.py

def adjust_servo_resistance(y_avg, angular_velocity, min_flexion, max_flexion, servo):
    if min_flexion is None or max_flexion is None:
        print("⚠️ Error: Flexion range not set. Skipping resistance adjustment.")
        return 0  

    if abs(angular_velocity) > 2.5:
        print("⚠️ TOO FAST! Restricting movement.")
        servo.mid()  
        return 0

    resistance = (y_avg - min_flexion) / (max_flexion - min_flexion)
    resistance = max(0, min(1, resistance))  

    if resistance < 0.3:
        servo.min()
    elif resistance > 0.7:
        servo.max()
    else:
        servo.mid()

    return resistance
`}
        </code>
      </pre>
    </div>
    <p className="text-sm text-gray-400 italic">
      ⚠️ View is scrollable. Full source available in GitHub or local download.
    </p>
  </div>
))}


{renderSection("🔄 Design Process & Iterations", "designProcess", openSections, toggleSection, (
  <div className="space-y-6 text-[17px] text-white leading-relaxed">
    <p>
      <strong>Iteration 1 – Conceptual Framework:</strong><br />
      Our earliest design was focused on simply tracking motion without feedback. It involved a basic orientation sensor and servo, but lacked logic for correcting form. We quickly realized this didn’t provide the personalized rehab support our patient needed.
    </p>

    <img
      src="/dp/g_iteration.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
                  <p className="text-sm text-gray-400 mt-2">Fig 4: Gear Iteration, comparing prelim, with final.</p>


    <p>
      <strong>Iteration 2 – Form Correction Logic:</strong><br />
      After collecting test data, I added a rule-based system to detect incorrect bicep curl angles. This version introduced a buzzer alert but had hardcoded thresholds that didn’t adjust for different users. Feedback showed it was too rigid for varying patient needs.
    </p>

    <p>
      <strong>Iteration 3 – Calibration Phase + ML Logic:</strong><br />
      We then introduced a calibration phase that captured the user’s full range of motion and used it to generate personalized thresholds. This allowed us to adjust servo resistance and alert timing dynamically. I led the development of this logic and integrated it with real-time sensor data.
    </p>

    <img
      src="/dp/c_iteration.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />

<p className="text-sm text-gray-400 mt-2">Fig5 : Showing quick run down of initial code iteration, with basic commands.</p>


    <p>
      <strong>Iteration 4 – GUI & Patient Feedback:</strong><br />
      I designed and integrated a Tkinter GUI to visualize form tracking and feedback. Patient testers found this version more helpful, and we refined the layout using <code>matplotlib</code> to show motion graphs and resistance trends. Final tweaks were made to optimize for low-lag performance on Raspberry Pi.
    </p>

    <img
      src="/dp/UI.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />

<p className="text-sm text-gray-400 mt-2">Fig 6: Tkinter UI, showing patient info page.</p>


    <p>
      These iterations emphasized user-centered design and data-informed refinement. Each version brought us closer to a solution that was not only technically functional but also intuitive and motivating for patients to use independently.
    </p>
  </div>
))}

{renderSection("💭 Learning Opportunities & Challenges", "learningChallenges", openSections, toggleSection, (
  <div className="space-y-6 text-[17px] text-white leading-relaxed">
    <aside>
      👤 One of the biggest realizations I had during this project was that designing for rehabilitation isn't just about the tech , it's about <strong>timing, comfort, and clarity.</strong> Every time I asked myself, “Would I actually trust this device to guide my recovery?”, I discovered new gaps in how we presented feedback or structured our data flow. The complexity of integrating real-time servo motion with user-specific sensor data pushed me to rethink how feedback loops should feel , not just how they should function. It wasn’t enough to get a signal; we had to <strong>translate</strong> it in a way that was actionable and smooth for the user.
    </aside>

    <p>
      <strong>Machine Learning & Personalized Resistance:</strong><br />
      One of the most technically rewarding yet demanding components of this project was implementing a machine learning-inspired logic system that adjusted servo motor resistance based on individual user calibration. Leading this part of the system, I had to translate sensor data into meaningful mechanical response, balancing accuracy, responsiveness, and user safety. Debugging involved extensive iteration as I refined how the servo responded to sensor-detected movement in real-time.
    </p>

    <p>
      <strong>Graphical Interface & Real-Time Feedback:</strong><br />
      Creating the GUI using Tkinter involved integrating real-time orientation sensor data with graphical feedback. I designed a clean layout that could dynamically display form tracking and motion graphs using <code>matplotlib</code>. The challenge lay in building a responsive interface that wouldn’t lag while rendering live values. This part taught me to optimize data processing and UI responsiveness under Raspberry Pi limitations. I kept asking myself: <strong>Is this readable during a workout? Will the average user know what to do next?</strong>
    </p>

    <p>
      <strong>Cross-Subteam Integration:</strong><br />
      Working with teammates from mechanical and electrical subteams exposed the importance of technical translation,converting abstract computing logic into practical control for motors and gears. I learned to align my backend systems with physical limitations, bridging the computing subteam’s goals with the mechanical constraints of the build.
    </p>

    <p>
      <strong>Coordinator Perspective:</strong><br />
      Managing our team outside of Design Studio while developing a core system made me juggle roles I wasn’t used to. I had to shift quickly between discussing servo torque limits, debugging Raspberry Pi GPIO logic, and documenting our project updates for the TA. That kind of task-switching taught me a lot about prioritization, empathy, and cross-functional thinking.
    </p>
  </div>
))}

{renderSection("Final Reflections", "reflection", openSections, toggleSection, (
  <>
    <p className="italic text-yellow-400 mb-4">
      "The best way to predict the future is to invent it." – Alan Kay
    </p>

    <div className="space-y-6 text-[17px] text-white leading-relaxed">
      <aside>
        🧠 This project wasn’t just about building a prototype,it was about learning how to bring code, components, and people together toward one goal. And often, that meant unlearning what I thought I knew. There were countless moments I’d revisit my logic and ask, <strong>Is this really the cleanest way? Is there a better method that makes this more modular, readable, or user-safe?</strong> One of the biggest wins was when we restructured our calibration logic around a flexible threshold range instead of relying on strict positional checks. That change alone simplified our flow and boosted accuracy significantly.
      </aside>

      <img
      src="/dp/gear.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
                  <p className="text-sm text-gray-400 mt-2">Fig 7: Initial hurdle with gear sizing and placement.</p>

      <p>
        <strong>Initial Hurdles:</strong><br />
        In the early development stages, aligning the orientation sensor values with consistent thresholds was difficult. Noise, drift, and inconsistent arm movement made it hard to establish a baseline. Rather than giving up, I focused on smoothing techniques and logical conditions to eliminate false alerts. Our breakthrough came from redefining the threshold not as a fixed point, but as a window.
      </p>




      <p>
        <strong>Backend Complexity & Physical Constraints:</strong><br />
        Building real-time feedback systems required handling GPIO delays, buffering sensor reads, and syncing them with servo output. The feedback loop needed to be both fast and safe,an ongoing challenge as we balanced performance with control precision. I learned to debug across hardware and software layers simultaneously, building stronger problem-solving habits.
      </p>

      <img
      src="/dp/fix.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
                  <p className="text-sm text-gray-400 mt-2">Fig 8: Initial code idea, which was scrapped as did not work well with actual idea, used JSON.</p>


      <p>
        <strong>Team Collaboration & Technical Communication:</strong><br />
        In addition to leading the computing logic, I served as the Project Coordinator, organizing meetings, maintaining logs, and managing communications with the TA. Balancing these organizational duties with a heavy technical workload pushed me to improve both my technical writing and time management.
      </p>

      <p>
        <strong>Growth & Takeaways:</strong><br />
        I walked away from FlexAid with more than just a working prototype, I walked away with a deeper respect for collaborative systems engineering. I’ve learned that iteration is not a sign of failure but a signal that you’re moving closer to a solution that actually works.
      </p>

      <p className="text-yellow-300">
        <strong>What I Could’ve Done Better:</strong> I could have allocated more time for early-stage testing, particularly for the servo-triggered feedback system.<br />
        <strong>Outcome:</strong> This would’ve exposed integration bugs sooner, allowing for a smoother calibration experience and improved performance leading up to Expo.
      </p>
    </div>
  </>
))}


          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable toggle section
const renderSection = (title, key, openSections, toggleSection, content) => (
  <div className="border border-gray-700 rounded-lg" onClick={() => toggleSection(key)}>
    <h3 className="text-lg font-semibold p-4 text-secondary cursor-pointer">{title}</h3>
    {openSections[key] && <div className="p-6 bg-gray-800">{content}</div>}
  </div>
);

export default ProjectDetails3;
