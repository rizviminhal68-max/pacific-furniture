import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import FloatingContactButtons from './components/FloatingContactButtons'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ServiceAreas from './components/ServiceAreas'
import Services from './components/Services'
import TrustBenefits from './components/TrustBenefits'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBenefits />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <ServiceAreas />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  )
}

export default App