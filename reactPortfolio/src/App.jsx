import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section id="about" title="About Me">
        <p>
          Привет! Я занимаюсь веб-разработкой, люблю чистый код, дизайн и новые
          технологии. Моя цель — создавать интерфейсы, которые сочетают
          удобство, стиль и производительность.
        </p>
      </Section>

      <Projects />

      <Section id="skills" title="Skills">
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React, Vite, Tailwind</li>
          <li>Git / GitHub</li>
          <li>UI/UX basics</li>
        </ul>
      </Section>

      <Section id="contacts" title="Contacts">
        <p>Свяжись со мной удобным способом:</p>
        <ul>
          <li>Email: example@mail.com</li>
          <li>Telegram: @yourhandle</li>
          <li>GitHub: github.com/yourprofile</li>
        </ul>
      </Section>

      <Footer />
    </>
  );
}

export default App;
