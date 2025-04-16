import { Instagram, Linkedin, Github } from "lucide-react";

function App() {
  return (
    <>
      <img class="avatar" src="src/img1.png" />
      <div class="main">
        <p class="heading1">Heya 👋 ! I'm</p>
        <h1 class="heading2">Prabhas Gunda.</h1>
        <p class="heading3">
          A first-year computer science student that likes
          <br></br>
          <a href="#" class="Underline">
            Neovim
          </a>
          , <a class="Underline">Python</a> and anything tech.<br></br>
          <br></br>I've started to lean more towards web development as of late
          but I try to maintain a balance between the things I do.
        </p>
        <h1 class="heading4">Where can you find me?</h1>
        <div class="socials">
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
        </div>
      </div>
    </>
  );
}

export default App;
