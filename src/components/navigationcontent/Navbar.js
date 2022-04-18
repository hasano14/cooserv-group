import React from 'react'
import ThemeToggle from './ThemeToggle'
import '../../index.css'

const Navbar = () => {
    return (
        <header className="w-full px-5 py-4 body-font bg-inherit md:fill-transparent ">
            <div className="mx-auto flex flex-wrap lg:px-5 flex-col md:flex-row items-center ">
                <div className="flex flex-wrap title-font bg-inherit font-medium text-5xl items-center justify-center text-text1Light mb-6 md:mb-0">
                    <span className="text-3xl justify-center items-center text-primary dark:text-text1Dark">Cooserv Group</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href='/' className="mx-4 text-lg md:mr-4 text-primary dark:text-text2Dark md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all ">Home</a>
                    <a href='/' className="mx-4 text-lg text-primary dark:text-text2Dark md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Our Teams</a>
                    <a href='/' className="mx-4 text-lg md:mr-4 text-primary dark:text-text2Dark md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Services</a>
                    <a href='/' className="mx-4 text-lg text-primary dark:text-text2Dark md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Contact</a>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
export default Navbar