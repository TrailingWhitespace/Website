import {
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaDiscord as Discord,
} from "react-icons/fa";
import CycleThemes from "./components/Themes";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ParallaxReveal from "./components/Scroll";

function App() {
  return (
    <>

      <CycleThemes />
      <img className="avatar" src="src/img1.png" />
      <div className="main">
      <motion.div
         initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move 50px down
         animate={{ opacity: 1, y: 0 }}  // Fade to full opacity and move to original position
         transition={{ duration: 1, ease: "easeOut" }} // Duration of the animation
    >
        <p className="heading1">Heya 👋 ! I'm</p>
        <span className="heading2">
          <Typewriter
            words={["Prabhas Gunda."]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            className="heading2"
          />
        </span>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Add delay for the second section
      >
        <p className="heading3">
          A first-year computer science student that likes
          <br></br>
          <a href="#" className="Underline">
            Neovim
          </a>
          , <a className="Underline">Python</a> and anything tech.<br></br>
          <br></br>I've started to lean more towards web development as of late
          but I try to maintain a balance between the things I do.
        </p>
        </motion.div>
 <ParallaxReveal>
        <h1 className="heading4">Where can you find me?</h1>
        <div className="socials">
          <a
            href="https://linkedin.com/in/prabhasgunda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-10 h-10 text-blue-500 hover:text-blue-300" />
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com/TrailingWhitespace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-10 h-10 text-blue-500 hover:text-blue-300" />
            <span>Github</span>
          </a>
          <a
            href="https://instagram.com/perhapsimalogicalsimp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-10 h-10 text-blue-500 hover:text-blue-300" />
            <span>Instagram</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Discord className="w-10 h-10 text-blue-500 hover:text-blue-300" />
            <span>@perhapsimalogicalsimp</span>
          </a>
        </div>
        </ParallaxReveal>
      </div>
    

    </>
  );
}

export default App;
