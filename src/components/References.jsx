// src/components/Testimonials.jsx
import React from "react";

const feedbacks = [
  {
    text: "Arish played a pivotal role in engineering the complex backend logic of our prototype. His ability to write clean, functional code while coordinating a smooth construction process was invaluable. His creativity and analytical thinking elevated our project from idea to reality.",
    source: "DP4 Teammate",
  },
  {
    text: "Arish consistently demonstrated initiative and technical expertise, especially in programming. His proactive mindset and clear communication made him a pleasure to work with, and his reliability ensured consistent team progress.",
    source: "DP3 Group Member",
  },
  {
    text: "Arish maintained a high bar for quality and helped drive the team toward excellence. He cultivated an inclusive, collaborative atmosphere that empowered others to contribute ideas and learn from one another.",
    source: "DP4 Collaborator",
  },
  {
    text: "Arish's CAD design and technical problem-solving consistently exceeded expectations. He brought not only strong skills, but also a calm, thoughtful presence that helped steer the team through complex design challenges.",
    source: "Project Peer",
  },
  {
    text: "At DECA ICDC, Arish led our team with a rare combination of strategic thinking and interdisciplinary knowledge. His ability to merge healthcare insight with business innovation made a lasting impression on both judges and peers.",
    source: "DECA Teammate",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-12 px-4">
      <h2 className="text-3xl text-white font-bold text-center mb-10">
        💬 What Teammates & Peers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {feedbacks.map((feedback, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col justify-between h-full"
          >
            <p className="italic mb-4 leading-relaxed">“{feedback.text}”</p>
            <p className="text-yellow-300 font-medium mt-auto">— {feedback.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
