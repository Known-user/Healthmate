import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track if the chatbot is open or closed
  const [isFullScreen, setIsFullScreen] = useState(false); // Track fullscreen state

  // Function to send a query to the server and display the response
  const handleSendMessage = async () => {
    if (message.trim()) {
      setLoading(true);
      setConversation([...conversation, { text: message, sender: 'user' }]); // Add user message to conversation
  
      try {
        // Make a POST request with the user's message in the body
        const response = await fetch('http://localhost:3001/api/chat/reply', {
          method: 'POST', // Using POST request
          headers: {
            'Content-Type': 'application/json', // Ensuring server knows it's JSON
          },
          body: JSON.stringify({ message: message }), // Sending the message in the body
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json(); // Assuming the server returns a JSON object with a "message" field
        console.log(data);
        // Add bot's response to conversation
        setConversation((prevConversation) => [
          ...prevConversation,
          { text: data.reply, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error:', error);
        // Show a fallback error message
        setConversation((prevConversation) => [
          ...prevConversation,
          { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' },
        ]);
      }
  
      setMessage(''); // Clear the input field after sending the message
      setLoading(false);
    }
  };

  // Lock scroll in fullscreen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.body.style.overflow = 'hidden'; // Disable body scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable body scrolling
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Circle Button to open the chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
        >
          <span className="text-3xl">💬</span> {/* Chat bubble emoji */}
        </button>
      )}

      {/* Fullscreen Background Blur */}
      {isOpen && isFullScreen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-70 backdrop-blur-md z-40"></div>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div
          className={`${
            isFullScreen ? 'w-[80%] h-full' : 'w-[500px] max-w-[90vw]'
          } bg-white rounded-lg shadow-2xl border p-4 flex flex-col max-h-[80vh] overflow-y-auto transition-all duration-300 transform ${
            isFullScreen ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50' : ''
          }`}
        >
          <div className="chatbot-header flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center space-x-2">
              <span className="text-3xl">🤖</span> {/* Robot emoji for the chatbot */}
              <span>HealthMate Chatbot</span>
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleFullScreen}
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                {isFullScreen ? (
                  <span className="text-xl">🔽</span> // Fullscreen toggle (down arrow)
                ) : (
                  <span className="text-xl">🔼</span> // Fullscreen toggle (up arrow)
                )}
              </button>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-2xl font-bold">✖️</span> {/* Cross mark for closing */}
              </button>
            </div>
          </div>

          <div className="chatbot-body flex-1 overflow-y-auto py-2 mb-4 max-h-[60vh] space-y-4">
            {conversation.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <p
                  className={`inline-block px-4 py-2 mt-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
            {loading && (
              <div className="text-center text-gray-500">
                <span className="animate-pulse">Bot is typing...</span>
              </div>
            )}
          </div>

          <div className="chatbot-footer flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleSendMessage}
            >
              <span className="text-xl">➤</span>  {/* Triangle arrow for sending */}

            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
