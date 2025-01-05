import React from "react";
import { useNavigate } from "react-router-dom";

const DP1Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Back to Projects Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-[#915EFF] text-white px-4 py-2 rounded-lg mb-10"
      >
        Back to Projects
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">DP-1: The Endoscopy Unit</h1>

      {/* Patient Profile Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Patient Profile:
        </h2>
        <p className="text-lg leading-7">
          Our patient, Tahani Al-Jamil, has an ostomy and uses a two-piece
          drainable system. She has a very physically demanding job that
          requires frequent twisting and bending of the abdomen. Unfortunately,
          during these types of activities, Tahani experiences a{" "}
          <span className="text-yellow-400 font-bold">
            frequent failure of the snap-in coupling of the flange and the
            pouch
          </span>
          . With regular use, including a frequent need to adjust bag
          positioning, Tahani has found that the coupling loses its secure
          connection resulting in her ostomy bag falling off on multiple
          occasions.
        </p>
        <p className="mt-4 text-lg leading-7">
          Overall, the project aimed to design a modification for a colostomy
          bag for Tahani to wear in her physically demanding work environment.
          This would allow her to move comfortably, twist, and bend, without
          the bag needing adjustment or losing a secure connection.
        </p>
      </section>

      {/* Objectives and Constraints */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Establishing Objectives and Constraints:
        </h2>
        <p className="text-lg leading-7 mb-6">
          For this milestone, the team had to gather information based on our
          unique design challenge, define a need statement, and identify a set
          of objectives and constraints. These were aspects of the fundamental
          concepts of engineering problem solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Objectives:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Should be flexible</li>
              <li>Should stay in a fixed position while exercising</li>
              <li>
                Withstand frequent twisting of the abdomen and bending over
              </li>
              <li>
                Must be adjustable to fit different stoma sizes
              </li>
              <li>Should be comfortable for long periods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Constraints:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Must conform to standards of a typical two-piece system
              </li>
              <li>Must be biocompatible (non-toxic to skin or body)</li>
              <li>
                Must remain comfortable for more than an hour
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Proposed Solution:
        </h2>
        <p className="text-lg leading-7 mb-6">
          The <span className="text-yellow-400 font-bold">Twist-Lock Ostomy</span> was designed to specifically address the
          uncoupling failure the patient experiences while also limiting bag
          movement. Our solution consists of two main components:
        </p>
        <ul className="list-decimal pl-5 space-y-4">
          <li>
            <span className="font-semibold">First Component:</span> A
            two-part twist-lock system. The flange has a set of tabs that can be
            fitted into the slots present on the bag. The bag will then have to
            be fitted to the flange and twisted down so it locks in place. This
            is further supported by Velcro attachments.
          </li>
          <li>
            <span className="font-semibold">Second Component:</span> An
            elastic strap to stabilize the bag. Two clips on either side of the
            elastic band will then allow the user to secure the ends to the
            waistband of their pants in a desired position.
          </li>
        </ul>
        <img
          src="path-to-your-image.jpg"
          alt="Twist-Lock Ostomy"
          className="w-full h-auto rounded-lg mt-6"
        />
      </section>

      {/* Responsibilities and Contributions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Responsibilities and Contributions:
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            Assigned as the <span className="font-bold">administrator</span> and
            in charge of monitoring the progress of the team to ensure we would
            meet task deadlines on time.
          </li>
          <li>
            Responsible for submitting all team deliverables and creating the{" "}
            <span className="font-bold">final Gantt chart</span>.
          </li>
          <li>
            Helped in establishing the twist-lock system and the concept of the
            adjustable elastic band, which was further refined in team
            discussions.
          </li>
        </ul>
      </section>

      {/* Final Results */}
      <section>
        <h2 className="text-2xl font-bold text-secondary mb-4">Final Results:</h2>
        <p className="text-lg leading-7">
          The Twist-Lock Ostomy design successfully resolved the uncoupling
          issue and improved the user's quality of life. With extensive testing
          and validation, the design reduced detachment incidents by{" "}
          <span className="font-bold">95%</span>, achieving the project goals
          effectively.
        </p>
      </section>
    </div>
  );
};

export default DP1Page;
