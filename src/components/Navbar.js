import { render } from '@testing-library/react';
import React from 'react'
import '../index.css';

class Navbar extends React.Component{
    componentDidMount(){
        window.onscroll  = function () {
            if(window.pageYOffset === 0){
                
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    render() {
        return (
            <header class="w-full pt-2 md:mx-3 md:p-2 text-white body-font bg-transparent bg-white md:fill-transparent ">
                <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
                    <a href='/' class="flex flex-wrap title-font font-medium items-center justify-center text-primary mb-6 md:mb-0 hover:text-smokyblue hover:font-normal transition-all">
                        <span class="text-2xl justify-center items-center">Cooserv Group</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href='/' class="mx-4 text-lg md:mr-6 text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all ">Home</a>
                        <a href='/' class="mx-4 text-lg md:mr-6 text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">About</a>
                        <a href='/' class="mx-4 text-lg md:mr-6 text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Contact</a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar