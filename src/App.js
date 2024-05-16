import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Content from './components/content/content';
import Intro from './components/content/intro';
import Projects from './components/content/projects';
import Skills from './components/content/skills';
import Contact from './components/content/contact';
// import { ThemeProvider } from './components/themecontext/themecontext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary" background-color="purple" sticky="top">
        <Container>
          <Navbar.Brand href="#home">TODO: put a pfp here</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#intro">Intro</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<Intro />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
