"use client";

import { motion } from "framer-motion";


export default function About() {


return (

<section
id="about"
className="
py-24
px-6
bg-gradient-to-b
from-gray-950
to-black
text-white
"
>


<div
className="
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


<p
className="
text-red-400
uppercase
tracking-widest
"
>

About Me

</p>


<h2
className="
text-5xl
font-bold
mt-3
"
>

The Developer

<span className="text-red-500">
 Story
</span>


</h2>


<p
className="
mt-4
text-gray-400
"
>

My journey, experience and passion for technology

</p>


</motion.div>








<div
className="
grid
md:grid-cols-2
gap-8
"
>






{/* Story Card */}


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
bg-white/5
backdrop-blur-xl
rounded-3xl
p-8
border
border-white/10
"


>


<h3
className="
text-2xl
font-bold
mb-5
"
>

Who I Am

</h3>



<p
className="
text-gray-400
leading-8
"
>

I'm Habib Mohammed, a Full Stack Developer
focused on building clean, scalable and
beautiful applications.

I enjoy creating products using modern
technologies and solving real problems.

</p>



<div
className="
mt-8
grid
grid-cols-2
gap-5
"
>


<div
className="
bg-black/40
rounded-xl
p-5
"
>

<h4 className="
text-3xl
font-bold
text-red-400
">
5+
</h4>

<p className="text-gray-400">
Projects
</p>

</div>



<div
className="
bg-black/40
rounded-xl
p-5
"
>

<h4 className="
text-3xl
font-bold
text-orange-400
">
10+
</h4>

<p className="text-gray-400">
Technologies
</p>

</div>


</div>



</motion.div>









{/* Journey */}



<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
bg-gradient-to-br
from-red-500/20
to-orange-500/10
rounded-3xl
p-8
border
border-white/10
"

>


<h3
className="
text-2xl
font-bold
mb-6
"
>

My Journey

</h3>



<div className="
space-y-6
"
>


<div>

<h4 className="
font-semibold
text-red-400
">

Frontend Development

</h4>

<p className="
text-gray-400
"
>

React, Next.js, TypeScript and modern UI

</p>

</div>




<div>

<h4 className="
font-semibold
text-red-400
">

Backend Development

</h4>

<p className="
text-gray-400
">

Node.js, APIs and databases

</p>

</div>





<div>

<h4 className="
font-semibold
text-red-400
">

AI Integration

</h4>

<p className="
text-gray-400
">

Building smart AI-powered applications

</p>

</div>



</div>


</motion.div>






</div>


</div>


</section>

)

}