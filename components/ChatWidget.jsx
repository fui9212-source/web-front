import { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to Smart Office."
    }
  ]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input
      }
    ]);

    // ไว้เปลี่ยนเป็นเรียก Backend ทีหลัง
    // fetch(...)

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();

// const sendMessage = () => {
//   if (input.trim() === "") return;

//   // เพิ่มข้อความของผู้ใช้เข้าไปในแชท
//   setMessages((prev) => [
//     ...prev,
//     {
//       sender: "user",
//       text: input,
//     },
//   ]);

//   setInput("");
// };

    }
  };

  return (
    <>
      {open && (
        <div className="chat-popup">

          <div className="chat-header">
            <span>Smart Office AI</span>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >
                {msg.text}
              </div>
            ))}

          </div>

          <div className="chat-footer">

            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              ➤
            </button>

          </div>

        </div>
      )}

      <button
        className="chat-button"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>
    </>
  );
}