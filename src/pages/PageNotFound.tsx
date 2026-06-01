import React from 'react'
import {Link} from "react-router-dom"

const PageNotFound = () => {
  return (
    <main className="h-screen bg-main flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-3xl">Oops... page not found</p>
        <p>This page is probably broken or non existent yet.</p>
        <Link to="/" className="mt-3 bg-black text-white font-bold px-5 py-3 rounded -translate-y-1 hover:translate-none duration-200">Go back home</Link>
    </main>
  )
}

export default PageNotFound
