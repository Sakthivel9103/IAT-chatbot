import { useState, useEffect } from "react";
import "./App.css";

export default function App() {

  const fullText = "IAT Networks";
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, index + 1));

      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Welcome to IAT Networks.\nAsk me about services, recruitment, AI solutions, careers and contact details."
    }
  ]);

  const [input, setInput] = useState("");

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
      "✔️ Modern Technology\n✔️ AI Solutions\n✔️ Recruitment Support\n✔️ Internship Opportunities\n✔️ Professional Team",

    support:
      "Customer and recruitment support are available through phone, email and WhatsApp."
  };

  const sendMessage = (customText) => {

    const userText = customText || input;

    if (!userText.trim()) return;

    let botReply =
      "Please ask IAT Networks related questions.";

    const lower = userText.toLowerCase();

    if (lower.includes("service")) {
      botReply = replies.services;
    }

    else if (
      lower.includes("job") ||
      lower.includes("apply") ||
      lower.includes("resume")
    ) {
      botReply = replies.jobs;
    }

    else if (lower.includes("rpo")) {
      botReply = replies.rpo;
    }

    else if (
      lower.includes("contact") ||
      lower.includes("phone") ||
      lower.includes("mail")
    ) {
      botReply = replies.contact;
    }

    else if (lower.includes("about")) {
      botReply = replies.about;
    }

    else if (lower.includes("ai")) {
      botReply = replies.ai;
    }

    else if (
      lower.includes("marketing") ||
      lower.includes("digital")
    ) {
      botReply = replies.marketing;
    }

    else if (
      lower.includes("recruitment") ||
      lower.includes("hiring")
    ) {
      botReply = replies.recruitment;
    }

    else if (
      lower.includes("location") ||
      lower.includes("address")
    ) {
      botReply = replies.location;
    }

    else if (
      lower.includes("working") ||
      lower.includes("hours")
    ) {
      botReply = replies.hours;
    }

    else if (lower.includes("internship")) {
      botReply = replies.internship;
    }

    else if (lower.includes("training")) {
      botReply = replies.training;
    }

    else if (lower.includes("course")) {
      botReply = replies.courses;
    }

    else if (lower.includes("hr")) {
      botReply = replies.email;
    }

    else if (lower.includes("whatsapp")) {
      botReply = replies.whatsapp;
    }

    else if (
      lower.includes("consulting") ||
      lower.includes("it")
    ) {
      botReply = replies.consulting;
    }

    else if (lower.includes("bpo")) {
      botReply = replies.bpo;
    }

    else if (
      lower.includes("career") ||
      lower.includes("opportunity")
    ) {
      botReply = replies.career;
    }

    else if (
      lower.includes("why") ||
      lower.includes("choose")
    ) {
      botReply = replies.why;
    }

    else if (
      lower.includes("support") ||
      lower.includes("client")
    ) {
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
          I am chatbot of IAT Networks
        </p>

        <div className="line"></div>

        <h2 className="help-title">
          What can I help with?
        </h2>

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
}