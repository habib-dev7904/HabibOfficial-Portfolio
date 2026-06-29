"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {


return (

<section
id="home"
className="
min-h-screen
pt-32
px-6
bg-gradient-to-br
from-black
via-gray-950
to-red-950
text-white
overflow-hidden
"
>


<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
"
>



{/* LEFT SIDE */}


<motion.div

initial={{
opacity:0,
x:-80
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<p
className="
text-red-400
font-semibold
mb-4
"
>

👋 Welcome to my portfolio

</p>




<h1
className="
text-6xl
md:text-7xl
font-bold
leading-tight
"
>

Building

<span className="
text-transparent
bg-clip-text
bg-gradient-to-r
from-red-400
to-orange-400
">

 Digital

</span>

<br />

Experiences


</h1>




<p
className="
mt-6
text-gray-400
text-lg
max-w-xl
"
>

I'm Habib Mohammed, a Full Stack Developer
creating modern web applications,
AI tools and scalable digital products.

</p>





<div
className="
mt-8
flex
gap-5
"
>


<a

href="https://github.com/habib-dev7904/habib-dev7904"

className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-red-500
to-orange-500
"

>

View Projects

</a>



<a

href="#contact"

className="
px-8
py-3
rounded-full
border
border-white/20
"

>

Contact

</a>



</div>






{/* Mini stats */}


<div
className="
mt-12
grid
grid-cols-3
gap-5
"
>


<div>
<h3 className="text-3xl font-bold">
5+
</h3>
<p className="text-gray-400">
Projects
</p>
</div>


<div>
<h3 className="text-3xl font-bold">
10+
</h3>
<p className="text-gray-400">
Skills
</p>
</div>


<div>
<h3 className="text-3xl font-bold">
14
</h3>
<p className="text-gray-400">
Years old
</p>
</div>


</div>




</motion.div>









{/* IMAGE */}


<motion.div

initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8
}}

className="
flex
justify-center
"

>



<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
relative
w-80
h-80
"

>


<div
className="
absolute
inset-0
rounded-full
bg-gradient-to-r
from-red-500
to-orange-500
blur-2xl
opacity-40
"
/>



<div
className="
relative
w-full
h-full
rounded-full
overflow-hidden
border-4
border-white/20
"
>

<Image

src="/images/profile.png"

alt="Habib profile"

fill

sizes="320px"

className="object-cover"

/>


</div>


</motion.div>


</motion.div>




</div>



</section>


)

}