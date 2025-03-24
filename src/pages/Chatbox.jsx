import React, { useState, useRef, useEffect } from 'react';
import './Chatbox.css';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `🤖 AI: "${input}" received!`, sender: 'bot' },
        ]);
        scrollToBottom();
      }, 500);

      setInput('');
    }
  };

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  return (
    <div className="chatbox-container">
      {!isOpen && (
        <div className="chatbox-icon" onClick={toggleChatbox}>
          <FaRobot size={30} />
        </div>
      )}
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>AI Chat</span>
            <FaTimes className="close-icon" onClick={toggleChatbox} />
          </div>
          <div className="chatbox-content">
            <div className="messages" ref={chatBoxRef}>
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
