import Hello from './Hello.jsx'
import Bye from './Bye'
import MainArticle from './MainArticle.jsx'
import Section from './Section';
import Sidebar from './Sidebar';
const section1Content = 'This is the content of section 1.';
const section2Content = 'This is the content of section 2.';
const article1Title = 'Article 1';
const article1Text = 'Content of Article 1.';
const sidebarContent = 'Sidebar content goes here.';
function MainContent() {
  return (<div className='main'>
    <Hello name="Renan" msg="Good job!" />
    <Hello name="White" msg="Adequite job!" />
    <Section heading="Section 1" content={section1Content} />
    <MainArticle title={article1Title} text={article1Text} />
    <Sidebar content={sidebarContent} />
    <Section heading="Section 2" content={section2Content} />
    <Bye />
  </div>)
}

export default MainContent
