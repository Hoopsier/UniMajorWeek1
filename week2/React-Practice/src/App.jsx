import './App.css'
import MainContent from './MainContent.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
const appTitle = 'JSX and Props Showcase';

const footerText = 'Copyright © 2026 JSX Props App';



function App() {
  return (
    <>
      <Header title={appTitle} />
      <MainContent />
      <Footer text={footerText} />
    </>
  )
}

export default App
