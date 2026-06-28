// "use client";

// import { motion } from "framer-motion";


// const experience = [

//   {
//     date: "Apr 2026 - May 2026",
//     role: "Frontend Developer Intern",
//     company: "Decodlabs",
//     description:
//       "Developed responsive web interfaces, created reusable React components, improved UI/UX, and worked with modern frontend technologies."
//   },


//   {
//     date: "Jun 2026 - Present",
//     role: "Full Stack Developer Intern",
//     company: "CodeAlpha",
//     description:
//       "Building full stack applications, working with frontend, backend APIs, databases, authentication and modern development workflows."
//   }

// ];



// export default function Experience() {


// return (

// <section

// id="experience"

// className="
// py-24
// px-6
// bg-gradient-to-b
// from-gray-950
// to-black
// text-white
// "

// >


// <div className="
// max-w-6xl
// mx-auto
// ">


// {/* Header */}


// <motion.div

// initial={{
// opacity:0,
// y:50
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// className="
// text-center
// mb-16
// "

// >


// <p className="
// text-red-400
// tracking-widest
// uppercase
// ">

// Experience

// </p>



// <h2 className="
// text-5xl
// font-bold
// mt-3
// ">

// My Developer

// <span className="
// text-orange-400
// ">

//  Journey

// </span>


// </h2>


// <p className="
// mt-4
// text-gray-400
// ">

// My professional growth and internship experience

// </p>



// </motion.div>







// {/* Timeline */}



// <div className="
// relative
// max-w-4xl
// mx-auto
// ">


// {/* Line */}

// <div className="
// absolute
// left-5
// top-0
// h-full
// w-1
// bg-gradient-to-b
// from-red-500
// to-orange-500
// "

// ></div>





// <div className="
// space-y-12
// ">


// {experience.map((item,index)=>(


// <motion.div


// key={item.role}


// initial={{
// opacity:0,
// x:-60
// }}


// whileInView={{
// opacity:1,
// x:0
// }}


// viewport={{
// once:true
// }}


// transition={{
// duration:0.6,
// delay:index*0.2
// }}



// className="
// relative
// pl-16
// "

// >



// {/* Timeline Circle */}

// <div className="
// absolute
// left-0
// top-6
// w-10
// h-10
// rounded-full
// bg-gradient-to-r
// from-red-500
// to-orange-500
// shadow-xl
// "

// ></div>








// {/* Card */}


// <div className="
// bg-white/5
// backdrop-blur-xl
// border
// border-white/10
// rounded-3xl
// p-8
// hover:border-red-500/50
// transition
// "


// >


// <div className="
// flex
// justify-between
// items-start
// flex-wrap
// gap-4
// ">


// <div>


// <h3 className="
// text-2xl
// font-bold
// ">

// {item.role}

// </h3>


// <h4 className="
// mt-2
// text-red-400
// font-semibold
// ">

// {item.company}

// </h4>


// </div>





// <span className="
// px-4
// py-2
// rounded-full
// bg-orange-500/20
// text-orange-400
// text-sm
// "

// >

// {item.date}

// </span>



// </div>





// <p className="
// mt-5
// text-gray-400
// leading-7
// ">

// {item.description}

// </p>




// <div className="
// mt-6
// flex
// gap-3
// flex-wrap
// ">


// <span className="
// px-4
// py-2
// rounded-full
// bg-white/10
// text-sm
// ">

// Node.js

// </span>


// <span className="
// px-4
// py-2
// rounded-full
// bg-white/10
// text-sm
// ">

// Next.js

// </span>


// <span className="
// px-4
// py-2
// rounded-full
// bg-white/10
// text-sm
// ">

// Express.js

// </span>
// <span className="
// px-4
// py-2
// rounded-full
// bg-white/10
// text-sm
// ">

// MongoDB

// </span>



// </div>




// </div>





// </motion.div>



// ))}



// </div>



// </div>



// </div>


// </section>


// )

// }
"use client";

import { motion } from "framer-motion";


const experience = [

  {
    date: "Apr 2026 - May 2026",
    role: "Frontend Developer Intern",
    company: "Decodeslab",
    description:
      "Developed responsive web interfaces using React, Next.js and Tailwind CSS. Created reusable components, improved UI/UX and built modern frontend experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Next.js",
      "Supabase"
    ]
  },


  {
    date: "May 2026 - Present",
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    description:
      "Building full stack applications with frontend, backend APIs, databases and authentication systems using modern development technologies.",
    skills: [
      "Next.js",
      "Node.js",
      "Express.js",
      "SQL",
      "MySQL",
      "Supabase"
    ]
  }

];




export default function Experience() {


return (

<section

id="experience"

className="
py-24
px-6
bg-gradient-to-b
from-gray-950
to-black
text-white
"


>


<div className="
max-w-6xl
mx-auto
">



{/* Header */}


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
text-orange-400
tracking-widest
uppercase
">

Experience

</p>



<h2 className="
text-5xl
font-bold
mt-3
">

My Developer

<span className="
text-orange-500
">

 Journey

</span>

</h2>



<p className="
mt-4
text-gray-400
">

My professional growth and internship experience

</p>


</motion.div>





{/* Timeline */}



<div className="
relative
max-w-4xl
mx-auto
">



<div className="
absolute
left-5
top-0
h-full
w-1
bg-gradient-to-b
from-orange-500
to-red-500
">

</div>





<div className="
space-y-12
">


{experience.map((item,index)=>(



<motion.div


key={item.role}


initial={{
opacity:0,
x:-60
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:0.6,
delay:index*0.2
}}



className="
relative
pl-16
"

>





{/* Circle */}

<div className="
absolute
left-0
top-6
w-10
h-10
rounded-full
bg-gradient-to-r
from-orange-500
to-red-500
shadow-xl
">

</div>





{/* Card */}



<div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:border-orange-500/50
transition
">





<div className="
flex
justify-between
items-start
flex-wrap
gap-4
">



<div>


<h3 className="
text-2xl
font-bold
">

{item.role}

</h3>



<h4 className="
mt-2
text-orange-400
font-semibold
">

{item.company}

</h4>


</div>





<span className="
px-4
py-2
rounded-full
bg-orange-500/20
text-orange-400
text-sm
">

{item.date}

</span>



</div>







<p className="
mt-5
text-gray-400
leading-7
">

{item.description}

</p>






{/* Skills */}


<div className="
mt-6
flex
gap-3
flex-wrap
">


{item.skills.map((skill)=>(


<span

key={skill}

className="
px-4
py-2
rounded-full
bg-white/10
text-sm
hover:bg-orange-500/20
transition
"

>

{skill}

</span>


))}



</div>





</div>






</motion.div>


))}



</div>



</div>



</div>


</section>


)

}