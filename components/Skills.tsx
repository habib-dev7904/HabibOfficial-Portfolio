"use client";

import { motion } from "framer-motion";


const skills = [

{
  name:"JavaScript",
  icon:"JS"
},

{
  name:"TypeScript",
  icon:"TS"
},

{
  name:"React",
  icon:"⚛️"
},

{
  name:"Next.js",
  icon:"▲"
},

{
  name:"Node.js",
  icon:"🟢"
},

{
  name:"Express",
  icon:"EX"
},

{
  name:"MongoDB",
  icon:"🍃"
},

{
  name:"Supabase",
  icon:"⚡"
},

{
  name:"Tailwind CSS",
  icon:"🎨"
},

{
  name:"Git",
  icon:"🔧"
},

{
  name:"GitHub",
  icon:"🐙"
},

{
  name:"AI Tools",
  icon:"🤖"
}

];



export default function Skills(){


return (

<section

id="skills"

className="
py-24
px-6
bg-black
text-white
"

>



<div className="
max-w-6xl
mx-auto
"
>




<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center
mb-14
"

>


<p className="
text-orange-400
tracking-widest
uppercase
">

Skills

</p>


<h2 className="
text-5xl
font-bold
mt-3
">

My Tech

<span className="
text-red-500
">

 Arsenal

</span>


</h2>


<p className="
text-gray-400
mt-4
">

Technologies I use to build modern products

</p>


</motion.div>







<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"

>


{skills.map((skill,index)=>(


<motion.div


key={skill.name}


initial={{
opacity:0,
scale:0.7
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
delay:index*0.08
}}


whileHover={{
y:-10,
scale:1.05
}}


className="
bg-white/5
backdrop-blur-xl
rounded-2xl
p-6
border
border-white/10
text-center
"


>



<div className="
text-4xl
mb-4
"
>

{skill.icon}

</div>



<h3 className="
font-semibold
text-gray-200
">

{skill.name}

</h3>



</motion.div>


))}



</div>





</div>


</section>


)


}