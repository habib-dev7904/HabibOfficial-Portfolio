"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function Navbar() {

  const [open,setOpen] = useState(false);
  const {theme,setTheme}=useTheme();

const [mounted,setMounted]=useState(false);


useEffect(()=>{

setMounted(true);

},[]);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];


  return (

    <motion.nav

      initial={{
        y:-100,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:0.7
      }}


      className="
      fixed
      top-0
      w-full
      z-50
      bg-black/40
      backdrop-blur-xl
      border-b
      border-white/10
      "

    >


      <div
      className="
      max-w-6xl
      mx-auto
      px-6
      py-5
      flex
      justify-between
      items-center
      "
      >


        {/* Logo */}

        <motion.h1

        whileHover={{
          scale:1.1
        }}

        className="
        text-2xl
        font-bold
        "

        >

          <span className="text-white">Habib</span>
          <span className="text-red-500">
            .dev
          </span>


        </motion.h1>





        {/* Desktop */}

        <div
        className="
        hidden
        md:flex
        gap-8
        "
        >


        {links.map((link)=>(

          <a

          key={link}

          href={`#${link.toLowerCase()}`}

          className="
          text-gray-300
          hover:text-red-400
          transition
          "

          >

            {link}

          </a>


        ))}


        </div>






        {/* Button */}


        <button

        className="
        hidden
        md:block
        px-6
        py-2
        rounded-full
        bg-gradient-to-r
        from-red-500
        to-orange-500
        text-white
        "

        >

          <a href="#contact">Hire Me</a>
          

        </button>





        {/* Mobile button */}

        <button

        onClick={()=>setOpen(!open)}

        className="
        md:hidden
        text-2xl
        "

        >

          ☰

        </button>



      </div>





      {/* Mobile Menu */}

      {open && (

        <motion.div

        initial={{
          opacity:0,
          height:0
        }}

        animate={{
          opacity:1,
          height:"auto"
        }}

        className="
        md:hidden
        px-6
        pb-5
        flex
        flex-col
        gap-4
        "

        >

        {links.map((link)=>(

          <a

          key={link}

          onClick={()=>setOpen(false)}

          href={`#${link.toLowerCase()}`}

          className="
          text-gray-300
          "

          >

            {link}

          </a>

        ))}


        </motion.div>

      )}




    </motion.nav>

  );

}