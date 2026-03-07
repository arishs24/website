import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import styles from "../styles";

const roles = ["Biomedical Engineer", "Medical Researcher", "Software Engineer", "Aspiring Neurosurgeon"];

const useTypewriter = (words, loop = true, speed = 150, delay = 800) => {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      setText(prev => deleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1));

      if (!deleting && text === currentWord) {
        setTimeout(() => setDeleting(true), delay);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }

      const typingSpeed = deleting ? speed / 2 : speed;
      timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    };

    timeoutRef.current = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [text, deleting, wordIndex, words, speed, delay]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(roles);

  return (
    <section className="relative w-full h-[60vh] mx-auto flex items-center overflow-hidden">
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-32 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`text-5xl sm:text-6xl font-black text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Arish</span>
          </h1>
          <p className={`text-xl sm:text-2xl mt-2 text-white-100`}>
            <span>{typedText}</span>
          </p>

          {/* Buttons Section with Icons */}
          <div className="mt-6 flex gap-4 relative z-10">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/arishshahab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl bg-blue-600 hover:bg-blue-500 p-2.5 rounded-full transition-colors"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/arishs24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl bg-gray-800 hover:bg-gray-700 p-2.5 rounded-full transition-colors"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl bg-green-600 hover:bg-green-500 p-2.5 rounded-full transition-colors"
              title="Open Resume"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
