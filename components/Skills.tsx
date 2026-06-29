"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNpm,
  SiMongodb,
} from "react-icons/si";


import {
  MdCode
} from "react-icons/md";

const skillGroups = [

{
  title:"Frontend Development",
  skills:[
    {name:"HTML5", icon:SiHtml5},
    {name:"CSS3", icon:SiCss},
    {name:"JavaScript", icon:SiJavascript},
    {name:"React.js", icon:SiReact},
    {name:"Next.js", icon:SiNextdotjs},
    {name:"Tailwind CSS", icon:SiTailwindcss},
  ]
},


{
  title:"Backend Development",
  skills:[
    {name:"Node.js", icon:SiNodedotjs},
    {name:"Express.js", icon:SiExpress},
    {name:"Next.js", icon:SiNextdotjs},
  ]
},


{
  title:"Database",
  skills:[
    {name:"MySQL", icon:SiMysql},
    {name:"MongoDB", icon:SiMongodb},
    {name:"Supabase", icon:SiSupabase},
  ]
},


{
  title:"Tools",
  skills:[
    {name:"Git", icon:SiGit},
    {name:"GitHub", icon:SiGithub},
    {name:"VS Code", icon:MdCode},
    {name:"npm", icon:SiNpm},
  ]
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
">


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
uppercase
tracking-widest
">

Skills

</p>



<h2 className="
text-5xl
font-bold
mt-3
">

My Tech Stack

</h2>


<p className="
text-gray-400
mt-4
">

Technologies I use to build modern applications

</p>


</motion.div>





<div className="space-y-12">


{skillGroups.map((group)=>(


<div key={group.title}>


<h3 className="
text-2xl
font-bold
mb-6
text-orange-400
">

{group.title}

</h3>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">


{group.skills.map((skill,index)=>{


const Icon = skill.icon;


return (

<motion.div

key={skill.name}

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
delay:index*0.1
}}


whileHover={{
y:-10,
scale:1.05
}}



className="
bg-white/5
backdrop-blur-xl
rounded-3xl
p-6

border
border-white/10

shadow-xl
shadow-orange-500/20

hover:border-orange-500
hover:shadow-orange-500/60

transition-all
duration-300
"


>


<div className="
flex
justify-center
mb-4
text-orange-400
">

<Icon size={42}/>

</div>



<p className="
text-center
font-semibold
">

{skill.name}

</p>



</motion.div>


)


})}


</div>



</div>


))}


</div>



</div>


</section>

)

}