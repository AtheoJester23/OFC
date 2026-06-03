import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-nav py-5 px-10 shadow-md">
      <div>
        <Link to="/" className="text-white font-bold text-3xl">Online File Converter</Link>
      </div>
    </nav>
  )
}

export default Navbar
