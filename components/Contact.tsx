"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function Contact() {


const [sent,setSent] = useState(false);
const [loading,setLoading] = useState(false);



async function handleSubmit(
e:React.FormEvent<HTMLFormElement>
){

e.preventDefault();

setLoading(true);


const form = e.currentTarget;


const response = await fetch(

"https://formspree.io/f/mojowapb",

{
method:"POST",
body:new FormData(form),
headers:{
Accept:"application/json"
}
}

);



if(response.ok){

setSent(true);

form.reset();

}



setLoading(false);

}




return (

<>


<section

id="contact"

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





{/* Heading */}


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

Contact

</p>



<h2 className="
text-5xl
font-bold
mt-3
">

Let's Build

<span className="
text-orange-400
">

 Something

</span>

</h2>



<p className="
mt-4
text-gray-400
">

Have an idea? Let's create something amazing together.

</p>


</motion.div>








<div className="
grid
md:grid-cols-2
gap-10
">







{/* Info */}


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


<h3 className="
text-3xl
font-bold
mb-6
">

Get In Touch

</h3>




<div className="
space-y-5
text-gray-300
">


<p>
📧 anwarhabib7904@gmail.com
</p>


<p>
💻 Full Stack Developer
</p>


<p>
🌍 Available for projects
</p>


</div>







<div className="
mt-8
flex
gap-4
">


<a

href="https://github.com/habib-dev7904/habib-dev7904"

target="_blank"

className="
px-5
py-3
rounded-full
bg-white/10
hover:bg-white/20
"

>

GitHub

</a>





<a

href="https://www.linkedin.com/in/habib-m-065628385"

target="_blank"

className="
px-5
py-3
rounded-full
bg-red-500
"

>

LinkedIn

</a>



</div>



</motion.div>












{/* Form */}



<motion.form


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



onSubmit={handleSubmit}



className="
bg-white/5
backdrop-blur-xl
rounded-3xl
p-8
border
border-white/10
space-y-5
"

>





<input


name="name"


required


placeholder="Your Name"


className="
w-full
p-4
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

 />








<input


type="email"


name="email"


required


placeholder="Your Email"



className="
w-full
p-4
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

 />








<textarea


name="message"


required


placeholder="Your Message"


rows={5}


className="
w-full
p-4
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

 />









<button


type="submit"


disabled={loading}


className="
w-full
py-4
rounded-xl
bg-gradient-to-r
from-red-500
to-orange-500
font-semibold
"

>


{loading ? "Sending..." : "Send Message"}


</button>







{sent && (

<p className="
text-green-400
text-center
">

Message sent successfully 🚀

</p>

)}




</motion.form>






</div>






</div>



</section>









<footer

className="
py-8
bg-black
border-t
border-white/10
text-center
text-gray-400
"

>


<p>

© {new Date().getFullYear()} Habib Mohammed.
All Rights Reserved.

</p>


</footer>





</>

)

}