import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import Hero from "./components/Hero/Hero"
import InfoSection from "./components/InfoSection/InfoSection"

const App = () =>{
  return (
    <>
      <Hero />
      <main>
        <InfoSection />
        <FeaturesSection />
      </main>
    </>
  )
}

export default App