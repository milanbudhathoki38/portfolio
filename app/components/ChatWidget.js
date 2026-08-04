"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about Milan's background, projects, or skills." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage() {
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.answer }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {open && (
        <div className="chat-widget-panel fixed bottom-44 right-6 z-50 w-80 sm:w-96 h-[28rem] rounded-2xl bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="chat-widget-header flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <span className="text-sm font-medium">Ask about Milan</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="chat-widget-close-btn text-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
              <div
                className={
                 m.role === "user"
                    ? "chat-widget-message-user max-w-[85%] rounded-2xl rounded-br-sm bg-gray-900 text-white text-sm leading-relaxed px-4 py-2.5 break-words"
                    : "chat-widget-message-bot max-w-[85%] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-800 text-sm leading-relaxed px-4 py-2.5 break-words"
                     }
                    >
                     {m.text}
            </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="chat-widget-message-bot rounded-2xl rounded-bl-sm bg-gray-100 text-gray-500 text-sm px-3 py-2">
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <div className="chat-widget-input-row flex items-center gap-2 px-3 py-3 border-t border-gray-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a question…"
              className="chat-widget-input flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              aria-label="Send"
              className="chat-widget-send-btn flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white disabled:opacity-40 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="chat-widget-bubble fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gray-900 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  );
}