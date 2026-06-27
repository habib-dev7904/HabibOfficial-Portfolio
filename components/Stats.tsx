"use client";

import { motion } from "framer-motion";


const stats = [

{
number:"5+",
title:"Projects Built",
icon:"🚀"
},

{
number:"10+",
title:"Technologies",
icon:"⚡"
},

{
number:"1+",
title:"Years Learning",
icon:"📚"
},

{
number:"100%",
title:"Dedication",
icon:"🔥"
}

];



export default function Stats(){


return (

<section

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
text-red-400
tracking-widest
uppercase
">

Achievements

</p>


<h2 className="
text-5xl
font-bold
mt-3
">

Numbers That

<span className="
text-orange-400
">

 Speak

</span>

</h2>


</motion.div>







<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"

>


{stats.map((item,index)=>(



<motion.div


key={item.title}


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
delay:index*0.2
}}


whileHover={{
scale:1.08,
y:-10
}}



className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
text-center
"

>



<div className="
text-4xl
mb-4
">

{item.icon}

</div>



<h3 className="
text-5xl
font-bold
bg-gradient-to-r
from-red-400
to-orange-400
bg-clip-text
text-transparent
">

{item.number}

</h3>




<p className="
mt-3
text-gray-400
">

{item.title}

</p>



</motion.div>



))}




</div>





</div>


</section>


)

}