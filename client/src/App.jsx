import { motion } from "framer-motion";

export default function App() {

const text = "IAT Academy";

return (

<div className="h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

{/* ROBOT ICON */}

<div className="w-24 h-24 rounded-3xl bg-purple-700 flex items-center justify-center shadow-[0_0_60px_#9333ea]">

<span className="text-4xl">
🤖
</span>

</div>

{/* WELCOME */}

<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-2xl mt-8 text-purple-400 font-bold"
>

Welcome to

</motion.h2>

{/* ANIMATED TITLE */}

<div className="flex text-4xl md:text-6xl font-extrabold mt-2 flex-wrap justify-center">

{text.split("").map((char, index) => (

<motion.span
key={index}
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{
delay: index * 0.1,
duration: 0.5
}}
className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent"
>

{char === " " ? "\u00A0" : char}

</motion.span>

))}

</div>

{/* SUBTITLE */}

<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 2 }}
className="text-gray-400 mt-4 text-lg"
>

I am chatbot of IAT Academy

</motion.p>

{/* GLOW LINE */}

<div className="w-32 h-1 bg-purple-500 rounded-full mt-5 shadow-[0_0_20px_#a855f7]"></div>

{/* QUESTION */}

<motion.h1
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 2.5 }}
className="text-3xl md:text-5xl font-bold mt-14 text-center"
>

What can I help with?

</motion.h1>

{/* OPTIONS */}

<div className="grid grid-cols-2 gap-4 mt-10 w-full max-w-2xl px-4">

<button className="border border-gray-800 rounded-3xl py-4 text-lg hover:bg-gray-900 transition">
🎨 Create Image
</button>

<button className="border border-gray-800 rounded-3xl py-4 text-lg hover:bg-gray-900 transition">
💡 Brainstorm
</button>

<button className="border border-gray-800 rounded-3xl py-4 text-lg hover:bg-gray-900 transition">
📄 Summarize
</button>

<button className="border border-gray-800 rounded-3xl py-4 text-lg hover:bg-gray-900 transition">
📊 Analyze
</button>

</div>

{/* INPUT */}

<div className="absolute bottom-6 w-[92%] max-w-2xl flex items-center bg-[#111] border border-gray-800 rounded-full px-5 py-3">

<button className="text-3xl mr-4">
+
</button>

<input
placeholder="Ask me anything..."
className="flex-1 bg-transparent outline-none text-lg"
/>

<button className="text-2xl mr-4">
🎤
</button>

<button className="bg-white text-black rounded-full w-14 h-14 text-2xl">
⏺
</button>

</div>

</div>

);

}