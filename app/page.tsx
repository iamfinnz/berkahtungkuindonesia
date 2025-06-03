import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
// import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Projects />
      <FAQ />
      {/* <ContactForm /> */}
      <CTA />
      <Footer />
    </main>
  )
}