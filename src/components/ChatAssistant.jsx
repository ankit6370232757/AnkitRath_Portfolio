import React, { useState, useRef, useEffect } from "react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "👋 Hi, I’m Ankit Kumar Rath’s Portfolio Assistant!  What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHeight, setChatHeight] = useState(360); // default chat height (px)

  const API_KEY = "AIzaSyA45JqvxTKyq2elE_nuELB_A7BiMPXcF50"; // 
  const messagesEndRef = useRef(null);
  const isResizingRef = useRef(false);

  // ====== Your portfolio data (edit anytime) ======
  const portfolioData = {
    name: "Ankit Kumar Rath",
    location: "Bhubaneswar, Odisha",
    education:
      "B.Tech in Computer Science from Gandhi Institute for Education and Technology",
    skills: ["HTML", "CSS", "JavaScript", "React", "MERN (learning)"],
    careerGoal: "To become a full-stack developer at a leading tech firm.",
    hobbies: ["Reading tech blogs", "Playing chess"],
    projects: [
      {
        name: "Medicine Reminder & Diagnosis App (MedMind)",
        detail:
          "A health app to set medicine reminders and get symptom-based guidance.",
        tech: ["React", "Node/Express", "MongoDB (planned)"],
      },
      {
        name: "Meesho-style E-commerce Website",
        detail:
          "A simple marketplace clone with product listing and cart basics.",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        name: "Portfolio Website",
        detail: "Personal portfolio showcasing projects and skills.",
        tech: ["React", "Tailwind CSS"],
      },
    ],
  };

  // ====== Helpers ======
  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizingRef.current) return;
      // New height based on pointer Y (keep bottom margin ~80px)
      const newHeight = window.innerHeight - e.clientY - 80;
      if (newHeight > 220 && newHeight < 640) setChatHeight(newHeight);
    };
    const handleMouseUp = () => {
      isResizingRef.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Very simple matcher for portfolio Q&A
  const getPortfolioAnswer = (q) => {
    const text = q.toLowerCase();

    const joinSkills = portfolioData.skills.join(", ");
    const projectLines = portfolioData.projects
      .map(
        (p, i) =>
          `${i + 1}. ${p.name} — ${p.detail} (Tech: ${p.tech.join(", ")})`
      )
      .join("\n");

    // Keywords → answers
    if (/\b(name|who are you|introduce)\b/.test(text))
      return `I’m ${portfolioData.name} from ${portfolioData.location}.`;
    if (/\b(location|where.*from|based)\b/.test(text))
      return `I’m based in ${portfolioData.location}.`;
    if (/\b(education|college|degree|study|studied)\b/.test(text))
      return `Education: ${portfolioData.education}.`;
    if (/\b(skill|skills|tech stack|technologies)\b/.test(text))
      return `My skills: ${joinSkills}.`;
    if (/\b(goal|career|objective|aim)\b/.test(text))
      return `Career goal: ${portfolioData.careerGoal}`;
    if (/\b(hobby|hobbies|interests)\b/.test(text))
      return `My hobbies: ${portfolioData.hobbies.join(", ")}.`;
    if (/\b(project|projects|work|portfolio)\b/.test(text))
      return `Here are some of my projects:\n${projectLines}`;
    if (/\b(contact|email|hire|connect)\b/.test(text))
      return `You can contact me via the details provided on the site’s contact section.`;

    if (/\b(help|menu|options)\b/.test(text))
      return `You can ask about:
• my skills
• projects
• education
• career goal
• hobbies
• location`;

    // Match specific project by name
    for (const p of portfolioData.projects) {
      if (text.includes(p.name.toLowerCase().split(" ")[0])) {
        return `${p.name}: ${p.detail} (Tech: ${p.tech.join(", ")})`;
      }
    }

    // No direct match → return null → let Gemini handle
    return null;
  };

  // ====== Send Message ======
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const pending = [...messages, { role: "user", text: trimmed }];
    setMessages(pending);
    setInput("");
    setLoading(true);

    // 1) Try local portfolio answer first
    const local = getPortfolioAnswer(trimmed);
    if (local) {
      setMessages([
        ...pending,
        { role: "assistant", text: local },
      ]);
      setLoading(false);
      return;
    }

    // 2) Fallback to Gemini (constrained to portfolio topic)
    try {
      const systemHint = `
You are the AI assistant for the portfolio of ${portfolioData.name}.
Only answer questions related to ${portfolioData.name}'s skills, projects, education, hobbies, location, and career goal.
If a question is not about the portfolio, politely redirect back to the portfolio topics.
Here is the portfolio data (use it to ground your answers):
- Name: ${portfolioData.name}
- Location: ${portfolioData.location}
- Education: ${portfolioData.education}
- Skills: ${portfolioData.skills.join(", ")}
- Career goal: ${portfolioData.careerGoal}
- Hobbies: ${portfolioData.hobbies.join(", ")}
- Projects:
${portfolioData.projects
  .map((p, i) => `  ${i + 1}. ${p.name} — ${p.detail} [${p.tech.join(", ")}]`)
  .join("\n")}
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: systemHint }] },
              { role: "user", parts: [{ text: trimmed }] },
            ],
          }),
        }
      );

      const data = await response.json();
      // If Gemini returns an error, show it in chat to help debugging
      if (data?.error) {
        const msg =
          data.error?.message ||
          "Unexpected error from Gemini. Check API key and quotas.";
        setMessages([
          ...pending,
          { role: "assistant", text: `❌ ${msg}` },
        ]);
      } else {
        const botReply =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "⚠️ Sorry, I couldn’t understand that.";
        setMessages([
          ...pending,
          { role: "assistant", text: botReply },
        ]);
      }
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages([
        ...pending,
        { role: "assistant", text: "❌ Error: Failed to fetch response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none transition"
        title={isOpen ? "Close assistant" : "Open assistant"}
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="mt-2 w-80 sm:w-96 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ height: `${chatHeight}px` }}
        >
          {/* Header (draggable for height) */}
          <div
            className="bg-indigo-600 text-white px-4 py-2 font-semibold flex justify-between items-center cursor-row-resize select-none"
            onMouseDown={() => (isResizingRef.current = true)}
          >
            <span>Portfolio Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close"
              title="Close"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[85%] whitespace-pre-wrap break-words ${
                  msg.role === "assistant"
                    ? "bg-gray-200 text-gray-900 self-start"
                    : "bg-indigo-600 text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm animate-pulse">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-2 text-sm outline-none"
              placeholder="Ask about Ankit’s skills, projects..."
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
