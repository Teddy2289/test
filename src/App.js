import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import OurService from "./components/OurService/OurService";
import Accordion from "./components/AccordionPart/Accordion";
import HowItWork from "./components/HowItWork/HowItWork";

function App() {
    return (
        <>
            <Navbar/>
            <Banner/>
            <HowItWork/>
            <OurService/>
            <Accordion/>
        </>
    );
}

export default App;
