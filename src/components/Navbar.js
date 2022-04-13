
const Navbar = () => {


    return (
        <header class="w-full px-5 py-4 body-font bg-inherit md:fill-transparent ">
            <div class="mx-auto flex flex-wrap lg:px-5 flex-col md:flex-row items-center ">
                <div class="flex flex-wrap title-font bg-inherit font-medium text-5xl items-center justify-center text-text1Light mb-6 md:mb-0">
                    <span class="text-3xl justify-center items-center">Cooserv Group</span>
                </div>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href='/' class="mx-4 text-lg md:mr-4 text-primary dark:text-backgroundColor md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all ">Home</a>
                    <a href='/' class="mx-4 text-lg md:mr-4 text-primary dark:text-backgroundColor md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Services</a>
                    <a href='/' class="mx-4 text-lg text-primary dark:text-backgroundColor md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Contact</a>
                    <button class="group rounded-md border-2 border-primary dark:border-backgroundColor hover:border-secondary items-center transition-all" value="light">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-backgroundColor cursor-pointer group-hover:text-secondary transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> 
                    </button>
                    
                </nav>
            </div>
        </header>
    )
}

// class Navbar extends React.Component{
//     componentDidMount(){
//         window.onscroll  = function () {
//             if(window.pageYOffset === 0){
                
//             }
//         }
//     }

//     componentWillUnmount() {
//         window.onscroll = null;
//     }

//     render() {
//         return (
//             <header class="w-full px-5 py-4 text-white body-font bg-transparent bg-white md:fill-transparent ">
//                 <div class="mx-auto flex flex-wrap lg:px-5 flex-col md:flex-row items-center ">
//                     <a href='/' class="flex flex-wrap title-font font-medium items-center justify-center text-primary mb-6 md:mb-0 hover:text-smokyblue hover:font-normal transition-all">
//                         <span class="text-2xl justify-center items-center">Cooserv Group</span>
//                     </a>
//                     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//                         <a href='/' class="mx-4 text-lg md:mr-4 text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all ">Home</a>
//                         <a href='/' class="mx-4 text-lg md:mr-4 text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">About</a>
//                         <a href='/' class="mx-4 text-lg text-primary md:hover:text-secondary md:hover:underline hover:underline-offset-2 transition-all">Contact</a>
//                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden text-white cursor-pointer hover:text-secondary transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                         </svg>
//                         <button class=
//                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black cursor-pointer hover:text-secondary transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                         </svg>
//                     </nav>
//                 </div>
//             </header>
//         )
//     }
// }

export default Navbar