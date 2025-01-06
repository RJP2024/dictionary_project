import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
         <a href="https://www.ruth.io/">
          Ruth Jean-Philippe
        </a>{" "}
        and is {" "}
        <a 
        href="https://github.com/RJP2024/dictionary_project">
          open-sourced on github
        </a>{" "}
          and{" "}
          <a
            href="https://gilded-cajeta-72012a.netlify.app">
            hosted on Netlify
        </a>
        </footer>
      </div>
    </div>
  );
}
