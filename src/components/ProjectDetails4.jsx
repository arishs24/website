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
    <div className="w-full min-h-screen bg-[#0c0c0c] p-6 md:p-12 lg:p-16">
      <button
        onClick={handleBackToProjects}
        className="text-[#9a9896] hover:text-[#e5dfd4] text-[12px] uppercase tracking-[0.25em] font-normal transition-colors duration-200 mb-6 inline-block"
      >
        Back to Projects
      </button>

      {/* Project Overview Section */}
      <div className="border-l-2 border-[#a83232] pl-6 mb-10">
        <h3 className="font-heading text-[#e5dfd4] text-[22px] font-normal mb-4">🔍 Project Overview</h3>
        <p className="text-[#b0aeac] text-[14px] leading-relaxed font-normal">
          <span className="text-[#e5dfd4] font-semibold">EZ Step</span> is a wearable foot-drop rehabilitation device designed to support patients with neurological disorders such as Multiple Sclerosis. It uses foot sensors and servo-driven actuation to assist foot lift during running while providing cadence data and step tracking. 
          <br /><br />
          As a <span className="text-secondary font-semibold">Subject Matter Expert</span>, I contributed research that influenced the design direction and mechanical choices. I also supported servo testing and mechanical iteration while leading documentation for our DHF and industry summary memo.
        </p>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Role */}
          <div className="p-6 bg-[#111111] border border-[#1a1a1a]">
            <h3 className="text-[#9a9896] text-[12px] uppercase tracking-[0.25em] font-normal mb-3">Role:</h3>
            <p className="text-[#b0aeac] text-[14px] leading-relaxed font-normal">
              <span className="text-[#e5dfd4] font-semibold">Subject Matter Expert</span> , I compiled and maintained our research database, ensuring all technical decisions were supported by credible literature. I also led the completion of our team’s written documentation, DHF entries, and project summary memo, and assisted in mechanical testing of the servo-foot interface.
            </p>
          </div>

          {/* Skills */}
          <div className="p-6 bg-[#111111] border border-[#1a1a1a]">
            <h2 className="text-[#e5dfd4] text-[14px] uppercase tracking-[0.3em] font-normal mb-5">Skills</h2>
            <div className="mb-6">
              <h3 className="text-[#9a9896] text-[12px] uppercase tracking-[0.25em] font-normal mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-5">
                {project.softSkills.map((skill, idx) => (
                  <TechBox key={idx} name={skill} index={idx} size="large" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#9a9896] text-[12px] uppercase tracking-[0.25em] font-normal mb-3 mt-5">Technical Skills</h3>
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
              Our target patient, Bradley, is an adult with Multiple Sclerosis (MS) experiencing foot drop. This condition limits his ability to flex his foot during running, a crucial part of his mental and physical routine. Our goal was to assist Bradley in regaining safe, independent motion through a form-corrective device.
            </p>
          ))}

          {renderSection("Establishing Objectives and Constraints", "objectives", openSections, toggleSection, (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#e5dfd4] text-[13px] uppercase tracking-[0.2em] font-normal mb-3">Objectives</h4>
                <ul className="list-disc pl-5 text-white text-[17px]">
                  <li>Support foot flexion during running</li>
                  <img
      src="/dp/initial.jpg"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
      <p className="text-sm text-[#9a9896] mt-2">Fig 1: Support foot flexion during running with gear chain.</p>


                  <li>Remain lightweight and wearable</li>
                  <li>Provide accurate cadence feedback</li>
                  <li>Allow smooth integration with footwear</li>
                  <li>Offer reliable motion correction in real-time</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#e5dfd4] text-[13px] uppercase tracking-[0.2em] font-normal mb-3">Constraints</h4>
                <ul className="list-disc pl-5 text-white text-[17px]">
                  <li>Use only approved components</li>
                  <li>Servo response must be low-latency</li>
                  <li>Mechanics must be 3D printable using PLA</li>
                  <li>Safe for repetitive heel strikes</li>
                  <li>System must align with FSR timing logic</li>
                </ul>
              </div>
            </div>
          ))}

          {renderSection("Proposed Solution", "solution", openSections, toggleSection, (
            <ul className="list-none space-y-3 text-[#b0aeac] text-[14px] font-normal">
              <li>Chain and gear mechanism inspired by bike drivetrain</li>
              <img
      src="/dp/chain.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
          <p className="text-sm text-[#9a9896] mt-2">Fig 2: Gear Chain CAD Model.</p>


              <li>Servo motor activates based on sensor timing</li>
              <li>Two FSR sensors under heel and ball of foot</li>
              <img
      src="/dp/fsr.jpg"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
              <p className="text-sm text-[#9a9896] mt-2">Fig 3: FSR Placement, ball and heel.</p>


              <li>App GUI visualizes step count, alerts, and cadence</li>
              <li>Adjustable housing fits various footwear types</li>

              <img
      src="/dp/dp4i.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />

<p className="text-sm text-[#9a9896] mt-2">Fig 4: Full Assembled model for adjustable housing fits.</p>

            </ul>
          ))}

{renderSection("Responsibilities and Contributions", "responsibilities", openSections, toggleSection, (
            <ul className="list-none space-y-3 text-[#b0aeac] text-[14px] font-normal">
              <li>Built research database with cited sources</li>
              <li>Wrote final industry memo and DHF summaries</li>
              <li>Supported servo testing and mechanical fitment</li>
              <li>Reviewed gait literature and foot-drop solutions</li>
              <li>Contributed feedback during Expo video and visuals</li>
            </ul>
          ))}

{renderSection("🧠 Computing & Integration Highlights", "computing", openSections, toggleSection, (
  <ul className="list-none space-y-3 text-[#b0aeac] text-[14px] font-normal">
    <li>Developed and iterated all backend logic for foot-drop detection and servo response</li>
    <li>Created frontend UI for displaying cadence and heel/toe activation status</li>
    <li>Calibrated force-sensitive resistors (FSRs) for accurate gait phase detection</li>
    <li>Enabled real-time data transfer and response using Raspberry Pi</li>
    <li>Contributed to the physical prototype assembly using campus Makerspace tools</li>
  </ul>
))}

{renderSection("🔄 Design Process & Iterations", "designProcess", openSections, toggleSection, (
  <div className="space-y-6 text-[17px] text-white leading-relaxed">
    <p><strong>Iteration 1 – Concept Mockup:</strong><br />Built a basic servo-gear prototype without FSR input. This helped us visualize motion range and gear clearance but lacked dynamic timing.</p>

    <div className="max-h-[500px] overflow-y-scroll bg-[#080808] rounded-sm p-4 border border-[#1a1a1a]">
      <pre className="language-python text-sm">
        <code className="language-python">
{`# Excerpt from Iteration2.py

from sensor_library import Force_Sensing_Resistor
from gpiozero import Servo, Device
from gpiozero.pins.pigpio import PiGPIOFactory
import time

Device.pin_factory = PiGPIOFactory()
fsr1 = Force_Sensing_Resistor(0)
fsr2 = Force_Sensing_Resistor(1)
servo = Servo(8, min_pulse_width=0.75/1000, max_pulse_width=2.25/1000)

fsr1_readings = []
fsr2_readings = []
rolling_size = 10
force_thresh = 2.0

def rolling_avg(data):
    return sum(data) / len(data) if data else 0

while True:
    val1 = fsr1.force_scaled(5)
    val2 = fsr2.force_scaled(5)

    fsr1_readings.append(val1)
    fsr2_readings.append(val2)

    if len(fsr1_readings) > rolling_size:
        fsr1_readings.pop(0)
    if len(fsr2_readings) > rolling_size:
        fsr2_readings.pop(0)

    avg1 = rolling_avg(fsr1_readings)
    avg2 = rolling_avg(fsr2_readings)

    print(f"AVG1: {avg1:.2f} | AVG2: {avg2:.2f}")

    if avg1 < force_thresh and avg2 < force_thresh:
        servo.max()
    else:
        servo.min()

    time.sleep(0.5)

`}
        </code>
      </pre>
    </div>
    <p><strong>Iteration 2 – Sensor Activation:</strong><br />Implemented FSR input logic to detect heel/toe pressure. While triggering the servo was successful, we ran into latency and delayed motion, especially at higher cadence.</p>
    <p><strong>Iteration 3 – Housing & Integration:</strong><br />We redesigned our gear mount and printed a cleaner PLA casing. We also implemented a working GUI to show cadence, alerts, and flexion status in real time, all run through the Raspberry Pi.</p>
    <p>Each iteration brought us closer to a refined, user-focused assistive device. Our final prototype merged functional coding, sensor accuracy, and physical comfort into one cohesive system.</p>
  </div>
))}



{renderSection("💭 Learning Opportunities & Challenges", "learningChallenges", openSections, toggleSection, (
  <div className="space-y-6 text-[17px] text-white leading-relaxed">
    <aside>
      👟 One of the most interesting challenges in this project was learning how <strong>sensitive</strong> movement-based assistive tech is to timing. We weren’t just building something that worked,we were building something that had to move with the user’s body. Every test left us asking: <strong>Did we lift too soon? Was the motion too jerky? Could someone with MS actually rely on this mid-run?</strong> That question shaped everything we did.
    </aside>

    <img
      src="/dp/i1.png"
      alt="Tkinter UI Screenshot"
      className="rounded-lg shadow-md my-4 w-full max-w-3xl mx-auto"
    />
                  <p className="text-sm text-[#9a9896] mt-2">Fig 5: Drawing which made us question if our design is good.</p>


    <p>
      <strong>Servo Sync & FSR Timing:</strong><br />
      The servo wasn’t the hard part,the hard part was knowing <strong>when</strong> to activate it. We started with simple FSR triggers but quickly ran into noise, debounce issues, and calibration drift. I worked closely with the mech subteam to tune our code so the chain-and-gear mechanism would lift at the precise right moment during a gait cycle, avoiding early or late lifts that threw off stride.
    </p>

    <p>
      <strong>Rethinking Gait Detection:</strong><br />
      Initially, we treated the heel and toe sensors as binary triggers. But running isn’t binary,it’s fluid. I learned to implement a small buffer window to ignore micro-fluctuations and stabilize step detection. That made our servo more predictable and drastically reduced false lifts. Each code change made me ask: <strong>Would this adjustment make the device feel smarter, or just more rigid?</strong>
    </p>

    <p>
      <strong>Mechanical Collaboration:</strong><br />
      One of our biggest bugs wasn’t in the code, it was in chain tension. Misalignment led to servo stalls and gear skipping. I helped iterate on the gear housing so that it aligned naturally with the servo shaft. This experience taught me that even perfect logic fails if physical tolerances aren’t respected.
    </p>

    <div className="my-6 rounded-lg overflow-hidden shadow-lg">
      <video
        controls
        className="w-full max-h-[480px] rounded-lg"
      >
        <source src="/dp/const.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <p>
      <strong>Human Factors & Comfort:</strong><br />
      A big turning point was testing the device while walking. The servo triggered perfectly,but it felt intrusive. I realized then that performance doesn’t equal comfort. I began approaching each hardware revision with the mindset: <strong>Would Bradley even want to wear this? Could he forget it’s there?</strong>That question became a filter for every UX decision.
    </p>
  </div>
))}


{renderSection("Final Reflections", "reflection", openSections, toggleSection, (
  <>
    <p className="italic text-[#c4b86a] mb-4">
      "Design is not just what it looks like and feels like. Design is how it works." , Steve Jobs
    </p>

    <div className="space-y-6 text-[17px] text-white leading-relaxed">
      <aside>
        🧠 EZ Step wasn’t just a device, it was a challenge in designing trust. If your device lifts a foot a fraction too late, the user loses confidence. And once that trust is gone, it’s hard to get back. This project made me realize how important it is to prototype <strong>for</strong> the user, not just <strong>around</strong> them. Every design decision needs to answer: <strong>Will the user feel supported? Will this feel natural enough to rely on every day?</strong>
      </aside>

      <p>
        <strong>Initial Calibration Challenges:</strong><br />
        Early testing was plagued by inconsistent readings from our FSR sensors. We struggled to define what a “step” looked like,heel strike? toe lift? both? Our breakthrough came when we staggered the two sensor readings and treated cadence as a rhythmic pattern, not an isolated event. It made the system smarter, more adaptable, and less prone to false triggers.
      </p>

      <p>
        <strong>Building Around Delay:</strong><br />
        One of the hardest parts was accepting that our servo <strong>would</strong> have delay. Rather than fighting it, I worked with the team to predict it,preloading signals slightly earlier to make the lift <strong>feel</strong> instantaneous. I learned that engineering isn’t always about eliminating limitations,it’s often about designing <strong>around</strong> them.
      </p>

      <p>
        <strong>Team Dynamics & Documentation:</strong><br />
        As Subject Matter Expert, I wasn’t just responsible for tech. I had to ensure our research was sound, that citations were valid, and that documentation could be handed off to future teams. It pushed me to think beyond this one prototype,how could our work set the foundation for something that actually reaches people like Bradley?
      </p>

      <p>
        <strong>Growth & Takeaways:</strong><br />
        This project pushed me to slow down and listen,to teammates, to the hardware, and to the simulated user feedback. I used to think a successful build was one that <strong>worked</strong>. Now I know it’s one that works <strong>well enough to forget it’s even there.</strong> That’s what we aimed for with EZ Step.
      </p>

      <p className="text-[#e5dfd4]">
        <strong>What I Could’ve Done Better:</strong> Started gait testing and servo timing trials much earlier in the design cycle.<br />
        <strong>Outcome:</strong> Would’ve exposed comfort issues sooner and allowed us to optimize real-time responsiveness more gradually.
      </p>
    </div>
  </>
))}

        </div>
      </div>
    </div>
  );
};

const renderSection = (title, key, openSections, toggleSection, content) => (
  <div className="border border-[#1a1a1a] mb-5" onClick={() => toggleSection(key)}>
    <h3 className="text-[#b0aeac] text-[13px] uppercase tracking-[0.25em] font-normal p-4 cursor-pointer hover:text-[#e5dfd4] transition-colors">{title}</h3>
    {openSections[key] && <div className="p-6 bg-[#111111]">{content}</div>}
  </div>
);

export default ProjectDetails4;
