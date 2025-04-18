import {
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaDiscord as Discord,
} from "react-icons/fa";
import ToggleTheme from "./components/darkMode";
import { Typewriter } from "react-simple-typewriter";
import  StarsBackground  from "./components/particles";

function App() {
  return (
    <>
      <ToggleTheme />
      <StarsBackground/>
      <img className="avatar" src="src/img1.png" />
      <div className="main">
        <p className="heading1">Heya 👋 ! I'm</p>
        <span className="heading2">
          <Typewriter
            words={["Prabhas Gunda."]}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            className="heading2"
          />
        </span>
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
      </div>
    </>
  );
}

export default App;
