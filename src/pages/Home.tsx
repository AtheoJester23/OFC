import { FilmIcon, Image, MusicIcon } from "lucide-react"
import OptionCard from "./OptionCard"

const Home = () => {
  return (
    <main className="bg-main h-[100vh] mt-19 gap-0">        
      <section className="p-5 bg-blue-500 px-20 shadow border border-x-0 border-3 border-blue-600">
        <h1 className="font-bold text-3xl text-white">Free converter</h1>
        <p className="text-white">Convert files to different formats easily and for free.</p>
      </section>
      
      <section className="pt-20 flex grid place-items-center grid-cols-3">
        <OptionCard title="Video Converter" message="Convert videos to different formats" page="/vidConverter" Icon={FilmIcon}/>
        <OptionCard title="Audio Converter" message="Convert audio files to different formats" page="/audioConverter" Icon={MusicIcon}/>
        <OptionCard title="Image Converter" message="Convert images to different formats" page="/imageConverter" Icon={Image}/>
      </section>
    </main>
  )
}

export default Home
