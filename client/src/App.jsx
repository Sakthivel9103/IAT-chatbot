<<<<<<< HEAD
// App.jsx

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {

  // ANIMATION TEXT
  const fullText = "IAT Academy";
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setAnimatedText(fullText.slice(0, index + 1));

      index++;

      if(index === fullText.length){
        clearInterval(interval);
      }

    }, 120);

    return () => clearInterval(interval);

  }, []);

  // CHAT STATE
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Welcome to IAT Academy.\nAsk me about services, recruitment, AI solutions, careers and contact details."
    }
  ]);

  const [input, setInput] = useState("");

  // QUESTIONS
  const questions = [
    "About IAT Networks",
    "AI Solutions",
    "Digital Marketing Services",
    "Recruitment Process",
    "Company Location",
    "Working Hours",
    "Internship Details",
    "Training Programs",
    "Courses Available",
    "HR Email",
    "WhatsApp Support",
    "IT Consulting",
    "BPO Services",
    "Career Opportunities",
    "Why choose IAT Networks?",
    "Client Support"
  ];

  // REPLIES
  const replies = {

    services:
      "IAT Networks provides Recruitment, BPO, AI Solutions, Digital Marketing and IT Consulting services.",

    jobs:
      "📧 hr@iatnetworks.com\n📱 +91 7358834638\n\nApply for IT and Non-IT jobs through HR support.",

    rpo:
      "RPO means Recruitment Process Outsourcing.\nIAT Networks helps companies hire employees efficiently.",

    contact:
      "📞 +91 7358834638\n📧 hr@iatnetworks.com\n📍 Katpadi, Vellore, Tamil Nadu - 632007\n🕘 Monday - Saturday | 9AM - 5PM",

    about:
      "IAT Networks is a consulting and technology company located in Vellore providing Recruitment, AI, BPO and IT services.",

    ai:
      "IAT Networks develops AI chatbots, automation systems and smart business solutions.",

    marketing:
      "SEO, branding, social media marketing and digital promotion services are provided.",

    recruitment:
      "IAT Networks helps companies hire skilled candidates for IT and Non-IT roles.",

    location:
      "📍 IAT Networks\nKatpadi, Vellore\nTamil Nadu - 632007",

    hours:
      "🕘 Monday - Saturday\n9:00 AM to 5:00 PM",

    internship:
      "Internship opportunities are available for AI, Web Development and Digital Marketing domains.",

    training:
      "Training programs are available for students and freshers in modern technologies.",

    courses:
      "Technical courses and placement training are available for students and professionals.",

    email:
      "📧 HR Email:\nhr@iatnetworks.com",

    whatsapp:
      "📱 WhatsApp Support:\n+91 7358834638",

    consulting:
      "IAT Networks provides IT consulting and business technology solutions.",

    bpo:
      "BPO services help companies manage customer support and operations efficiently.",

    career:
      "Career opportunities are available for software, recruitment and marketing roles.",

    why:
      "✔ Modern Technology\n✔ AI Solutions\n✔ Recruitment Support\n✔ Internship Opportunities\n✔ Professional Team",

    support:
      "Customer and recruitment support are available through phone, email and WhatsApp."
  };

  // SEND MESSAGE
  const sendMessage = (customText) => {

    const userText = customText || input;

    if(!userText.trim()) return;

    let botReply =
      "Please ask IAT Networks related questions.";

    const lower = userText.toLowerCase();

    if(lower.includes("service")){
      botReply = replies.services;
    }

    else if(
      lower.includes("job") ||
      lower.includes("apply") ||
      lower.includes("resume")
    ){
      botReply = replies.jobs;
    }

    else if(lower.includes("rpo")){
      botReply = replies.rpo;
    }

    else if(
      lower.includes("contact") ||
      lower.includes("phone") ||
      lower.includes("mail")
    ){
      botReply = replies.contact;
    }

    else if(lower.includes("about")){
      botReply = replies.about;
    }

    else if(lower.includes("ai")){
      botReply = replies.ai;
    }

    else if(
      lower.includes("marketing") ||
      lower.includes("digital")
    ){
      botReply = replies.marketing;
    }

    else if(
      lower.includes("recruitment") ||
      lower.includes("hiring")
    ){
      botReply = replies.recruitment;
    }

    else if(
      lower.includes("location") ||
      lower.includes("address")
    ){
      botReply = replies.location;
    }

    else if(
      lower.includes("working") ||
      lower.includes("hours")
    ){
      botReply = replies.hours;
    }

    else if(lower.includes("internship")){
      botReply = replies.internship;
    }

    else if(lower.includes("training")){
      botReply = replies.training;
    }

    else if(lower.includes("course")){
      botReply = replies.courses;
    }

    else if(lower.includes("hr")){
      botReply = replies.email;
    }

    else if(lower.includes("whatsapp")){
      botReply = replies.whatsapp;
    }

    else if(
      lower.includes("consulting") ||
      lower.includes("it")
    ){
      botReply = replies.consulting;
    }

    else if(lower.includes("bpo")){
      botReply = replies.bpo;
    }

    else if(
      lower.includes("career") ||
      lower.includes("opportunity")
    ){
      botReply = replies.career;
    }

    else if(
      lower.includes("why") ||
      lower.includes("choose")
    ){
      botReply = replies.why;
    }

    else if(
      lower.includes("support") ||
      lower.includes("client")
    ){
      botReply = replies.support;
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText
      },
      {
        sender: "bot",
        text: botReply
      }
    ]);

    setInput("");

  };

  return (

    <div className="app">

      {/* HERO */}

      <div className="hero">

        <div className="logo">
          🤖
        </div>

        <h3 className="welcome">
          Welcome to
        </h3>

        <h1 className="title">
          {animatedText}
        </h1>

        <p className="subtitle">
          I am chatbot of IAT Academy
        </p>

        <div className="line"></div>

        <h2 className="help-title">
          What can I help with?
        </h2>

        {/* TOP BUTTONS */}

        <div className="top-grid">

          <button
            className="top-btn"
            onClick={() =>
              sendMessage("How to apply for jobs?")
            }
          >
            💼 Jobs
          </button>

          <button
            className="top-btn"
            onClick={() =>
              sendMessage("AI Solutions")
            }
          >
            🤖 AI
          </button>

          <button
            className="top-btn"
            onClick={() =>
              sendMessage("Contact details")
            }
          >
            📞 Contact
          </button>

          <button
            className="top-btn"
            onClick={() =>
              sendMessage("What services do you offer?")
            }
          >
            🌐 Services
          </button>

        </div>

        {/* SLIDER QUESTIONS */}

        <div className="slider-questions">

          {questions.map((q, index) => (

            <button
              key={index}
              className="slide-btn"
              onClick={() => sendMessage(q)}
            >
              {q}
            </button>

          ))}

        </div>

      </div>

      {/* CHAT */}

      <div className="chat-box">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.sender === "user"
                ? "user-msg"
                : "bot-msg"
            }
          >
            {msg.text}
          </div>

        ))}

      </div>

      {/* INPUT */}

      <div className="input-area">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask about IAT Academy..."
        />

        <button
          onClick={() => sendMessage()}
        >
          Send
        </button>

      </div>

    </div>

  );
=======
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

>>>>>>> 7bda1371ff02a93961a5d5515ef2d0999d746317
}