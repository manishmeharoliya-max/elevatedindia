"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";

const journeyLinks = [
  "All Journeys",
  "Royal Heritage & Palaces",
  "Wildlife & Safari",
  "Spiritual & Sacred",
  "Culture & Craft",
  "Culinary",
  "Beaches & Backwaters",
  "Rail Journeys",
  "Inclusive / Pride",
  "Golden Triangle",
  "Honeymoons & Romance",
  "Small-Group Journeys",
  "Family Journeys",
  "Special Interest",
];


const exploreLinks = [
  "Find Your Journey",
  "Seasons & Private Departures",
  "Experiences",
  "Destinations",
  "Palace Hotels & Stays",
  "Attractions",
  "Experiences & Activities",
  "Travel Glossary",
  "The Ground Fleet",
  "Private Air Charter",
  "How Billionaires Travel India",
  "How Millionaires Travel India",
  "India Inspires",
  "The Founders",
  "Celebrations & Private Events",
  "How It Works",
];


const editions = [
  {
    name:"USA",
    flag:"https://flagcdn.com/w40/us.png"
  },
  {
    name:"UK",
    flag:"https://flagcdn.com/w40/gb.png"
  },
  {
    name:"Australia",
    flag:"https://flagcdn.com/w40/au.png"
  },
  {
    name:"Canada",
    flag:"https://flagcdn.com/w40/ca.png"
  },
  {
    name:"Germany",
    flag:"https://flagcdn.com/w40/de.png"
  },
  {
    name:"France",
    flag:"https://flagcdn.com/w40/fr.png"
  },
  {
    name:"Italy",
    flag:"https://flagcdn.com/w40/it.png"
  },
  {
    name:"Spain",
    flag:"https://flagcdn.com/w40/es.png"
  },
];


export default function Footer(){

return(

<footer className="bg-[#11100f] text-white border-t border-white/10">


<div className="max-w-[1700px] mx-auto px-6 py-20">


{/* TOP */}

<div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12">



{/* BRAND */}

<div>


<img
src="/logo-dark.png"
alt="Elevated India"
className="h-14 w-auto mb-6"
/>


<p className="
text-gray-400
leading-7
text-sm
max-w-xs
">

A curator of India's rarest luxury experiences for discerning global travellers. Every journey is bespoke, discreet, and deeply meaningful.

</p>



<div className="flex gap-4 mt-8">


<a className="
h-10 w-10 
border border-[#B79649]
rounded-full
flex items-center justify-center
hover:bg-[#B79649]
transition
">

<FaInstagram/>

</a>


<a className="
h-10 w-10 
border border-[#B79649]
rounded-full
flex items-center justify-center
hover:bg-[#B79649]
transition
">

<FaLinkedinIn/>

</a>


<a className="
h-10 w-10 
border border-[#B79649]
rounded-full
flex items-center justify-center
hover:bg-[#B79649]
transition
">

<FaFacebookF/>

</a>


</div>


</div>







{/* JOURNEYS */}

<div>


<h3 className="
text-[#B79649]
uppercase
tracking-[4px]
text-sm
mb-7
">

Journeys

</h3>


<ul className="space-y-3">

{
journeyLinks.map(item=>(

<li key={item}>

<a
href="#"
className="
text-gray-400
hover:text-[#B79649]
text-sm
transition
"
>

{item}

</a>

</li>

))
}

</ul>


</div>







{/* EXPLORE */}

<div>


<h3 className="
text-[#B79649]
uppercase
tracking-[4px]
text-sm
mb-7
">

Explore

</h3>


<ul className="space-y-3">


{
exploreLinks.map(item=>(

<li key={item}>

<a
href="#"
className="
text-gray-400
hover:text-[#B79649]
text-sm
transition
"
>

{item}

</a>

</li>

))
}


</ul>


</div>







{/* CONTACT */}

<div>


<h3 className="
text-[#B79649]
uppercase
tracking-[4px]
text-sm
mb-7
">

Contact

</h3>


<ul className="space-y-4 text-sm text-gray-400">


<li>
<a href="#">
Begin Your Journey
</a>
</li>


<li>
<a>
hello@elevatedindia.com
</a>
</li>


<li>
<a>
+91 96548 17595
</a>
</li>


<li>
<a>
Concierge Console
</a>
</li>



<li className="pt-4">


<button
className="
flex
items-center
gap-3
border
border-[#B79649]
px-5
py-3
rounded-full
hover:bg-[#B79649]
transition
"
>

<FaGlobe/>

Global

</button>


</li>



</ul>



</div>







{/* OFFICES */}

<div>


<h3 className="
text-[#B79649]
uppercase
tracking-[4px]
text-sm
mb-7
">

Offices

</h3>



<div className="text-sm text-gray-400 leading-7">


<p>

<span className="text-[#B79649]">
Head Office — Gurugram
</span>

<br/>

1002, 10th Floor, Emaar Colonnade,

<br/>

Sector 66, Gurugram 122018

</p>




<p className="mt-8">


<span className="text-[#B79649]">
Operations Office — Jaipur
</span>


<br/>

B1/21, Chitrakoot Sector 1,

<br/>

Vaishali Nagar,

<br/>

Jaipur 302021


</p>


</div>


</div>


</div>









{/* NEWSLETTER */}

<div
className="
mt-20
border-t
border-white/10
pt-12
grid
lg:grid-cols-2
gap-10
"
>


<div>


<h3 className="
text-2xl
font-serif
">

Dispatches from India

</h3>


<p className="
text-gray-400
mt-3
"
>

Seasonal routes, private departures and one exceptional idea per month. Nothing more.

</p>



<div className="
flex
mt-6
max-w-lg
">


<input

placeholder="Your email address"

className="
flex-1
bg-transparent
border
border-white/20
px-5
py-4
outline-none
"
/>


<button
className="
bg-[#B79649]
text-black
px-8
font-semibold
"
>

Subscribe

</button>


</div>


</div>








<div>


<h3 className="
text-[#B79649]
uppercase
tracking-[4px]
text-sm
mb-6
">

Global Editions

</h3>


<div className="
flex
flex-wrap
gap-5
">


{
editions.map(item=>(

<div
key={item.name}
className="
flex
items-center
gap-2
text-gray-400
text-sm
"
>


<img
src={item.flag}
className="w-5"
/>


{item.name}


</div>


))
}


</div>


</div>


</div>









{/* BOTTOM */}

<div
className="
mt-16
pt-8
border-t
border-white/10
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
"
>


<p className="text-gray-500 text-sm">

© 2026 Elevated India. All rights reserved.

</p>



<div className="flex gap-5">


<img
src="/fabulous-logo.png"
className="h-8 w-auto"
/>


<img
src="/go_tm logo white.png"
className="h-8 w-auto"
/>


</div>



</div>



</div>


</footer>


)

}
