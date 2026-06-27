"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const projects = [

{
title:"PrepWise AI Planner",

description:
"AI powered study planner that creates personalized learning plans and saves progress.",

tech:
"Next.js • Supabase • Groq AI",

image:"/images/prepwise.png",

github:"https://github.com/habib-dev7904/prep-wise_ai",



},


{
title:"Ecommerce Website",

description:
"Full stack social platform with authentication, posts, likes and comments.",

tech:
"React • Node.js • Express • MongoDB",

image:"/images/ecommerce.png",

github:"https://github.com/habib-dev7904/CodeAlpha_Full-StackEcommerce",

},


{
title:"Developer Portfolio",

description:
"Modern responsive portfolio with animations and premium UI design.",

tech:
"Next.js • TypeScript • Tailwind",

image:"/images/portfolio.png",

github:"https://github.com/habib-dev7904/HabibOfficial-Portfolio",



}

];





export default function Projects(){


return (

<section

id="projects"

className="
py-24
px-6
bg-gradient-to-b
from-black
to-gray-950
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
mb-16
"

>


<p className="
text-red-400
tracking-widest
uppercase
">

Portfolio

</p>


<h2 className="
text-5xl
font-bold
mt-3
">

Projects That

<span className="
text-orange-400
">

 Matter

</span>


</h2>



<p className="
mt-4
text-gray-400
">

Some applications I have built

</p>


</motion.div>







<div className="
grid
md:grid-cols-3
gap-8
"
>




{projects.map((project,index)=>(



<motion.div


key={project.title}


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*0.2
}}


whileHover={{
y:-12
}}



className="
group
bg-white/5
backdrop-blur-xl
rounded-3xl
overflow-hidden
border
border-white/10
"

>




<div className="
relative
h-56
overflow-hidden
">


<Image

src={project.image}

alt={project.title}

fill

sizes="
(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw
"

className="object-cover"

/>


</div>







<div className="
p-6
"
>


<h3 className="
text-2xl
font-bold
mb-3
">

{project.title}

</h3>



<p className="
text-gray-400
mb-5
">

{project.description}

</p>



<p className="
text-orange-400
text-sm
mb-6
">

{project.tech}

</p>




<div className="
flex
gap-3
">


<a

href={project.github}

className="
px-5
py-2
rounded-full
bg-white/10
hover:bg-white/20
"

>

GitHub

</a>







</div>



</div>






</motion.div>



))}





</div>






</div>



</section>


)

}