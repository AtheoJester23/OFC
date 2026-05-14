import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <main className="bg-main h-screen">
        <header>
            <Navbar/>
        </header>
        
        <section>
          <input type="file" />
        </section>
    </main>
  )
}

export default Home
