import {hamburger} from '../assets/icons';
import { navLinks } from '../constants11';
const Nav = () => {
  return (
    <section>
     <div class="border rounded-lg h-[555px] bg-[#232E52]">
      <header className="padding-x py-2 absloute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <h1 className='text-white font-bold'>BLOGGA</h1>
            <ul className="flex-1 flex justify-center w-[468px] h-[90px]
            items-center gap-16 max-lg:hidden">
             {navLinks.map((item)=>(
                <li key={item.label}>
                    <a
                    href={item.href}
                    className="font-rubik leading-normal text-lg text-white"
                    >
                    {item.label}
                    </a>
                </li>
             ))}  
            </ul>
            <div className="bg-inherit hidden max-lg:block">
                <img
                 src={hamburger}
                 alt="Hamburger"
                 width={25}
                 height={25}
                />
            </div>
            <button className="bg-slate-700 text-white rounded-lg pl-4 pr-4 pt-1 pb-1.5">Subscribe</button>
        </nav>
     </header>
     <div className="text-left p-32 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28">
     <h1 className=" text-white font-rubik font-bold text-3xl sm:text-4xl ">
        <h2><button className=" rounded-md border text-white font-medium text-sm pl-2.5 pr-2.5 pt-0.5 pb-0.5 ">Design Tools</button></h2>
        <span>Insights about my personal and work</span>
        <br/><span>life, and the in-betweens</span>
     </h1>
     </div>
    </div>
  </section>
  )
}

export default Nav