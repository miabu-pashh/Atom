import React, { useState } from 'react';
import "./css/ChatBotIcon.css"; // Import the CSS for the overlay

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [conversationState, setConversationState] = useState("greeting");
  const [isAskingName, setIsAskingName] = useState(false);

  // Sample data for doctors and clinics
  const doctorClinicData = {
    '12345': {
      doctors: [
        { name: 'Dr. Smith', specialty: 'Cardiologist' },
        { name: 'Dr. Johnson', specialty: 'Dermatologist' },
      ],
      clinics: [
        { name: 'Healthy Clinic', address: '123 Main St' },
        { name: 'Sunshine Clinic', address: '456 Elm St' },
      ],
    },
    '54321': {
      doctors: [
        { name: 'Dr. Brown', specialty: 'Pediatrician' },
        { name: 'Dr. Lee', specialty: 'Ophthalmologist' },
      ],
      clinics: [
        { name: "Kid's Clinic", address: '789 Oak St' },
        { name: 'Vision Care Center', address: '101 Pine St' },
      ],
    },
    // Add more data for other pin codes
  };

  const toggleChatWindow = () => {
    setChatOpen(!chatOpen);

    if (!chatOpen) {
      // If the chat window is opening, initiate the conversation with a greeting
      setConversationState("greeting");
      setIsAskingName(false);
      setMessages([]); // Clear previous messages
    }
  };

  const handleUserInput = (text) => {
    const userMessage = {
      type: 'user',
      text,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    if (isAskingName) {
      // Handle the case where we are asking for the user's name
      const userName = text;
      const nameMessage = {
        type: 'bot',
        text: `Nice to meet you, ${userName}! What would you like to know?`,
      };
      setMessages((prevMessages) => [...prevMessages, nameMessage]);

      const optionsMessage = {
        type: 'bot',
        buttons: [
          {
            text: 'Get Health information',
            onClick: () => handleUserInput('Get Health information'),
          },
          {
            text: 'Find Nearest Client',
            onClick: () => handleUserInput('Find Nearest Client'),
          },
        ],
      };
      setMessages((prevMessages) => [...prevMessages, optionsMessage]);

      setConversationState("options");
      setIsAskingName(false);
    } else {
      // Handle the conversation based on the current state
      switch (conversationState) {
        case "greeting":
          // Greet the user and ask for their name
          if (text.toLowerCase() === "Get Health information" || text.toLowerCase() === "Find Nearest Client") {
            // If the user's input matches one of the options, proceed accordingly
            handleUserInput(text);
          } else {
            const greetingMessage = {
              type: 'bot',
              text: 'Hello! What is your name?',
            };
            setMessages((prevMessages) => [...prevMessages, greetingMessage]);
            setIsAskingName(true);
          }
          break;

        case "options":
          // Handle user options and responses
          if (text.toLowerCase() === "Get Health information") {
            // User selected "Get Health information"
            const healthMessage = {
              type: 'bot',
              text: 'You selected "Get Health information." Here is some health information...',
            };
            setMessages((prevMessages) => [...prevMessages, healthMessage]);
            // You can add the logic for providing health information here
          } else if (text.toLowerCase() === "Find Nearest Client") {
            // User selected "Find Nearest Client"
            const pinCodeRequestMessage = {
              type: 'bot',
              text: 'Please enter the pin code of your location:',
            };
            setMessages((prevMessages) => [...prevMessages, pinCodeRequestMessage]);
            setConversationState("askPinCode"); // This is important to transition to asking for the pin code.
          } else {
            // User input doesn't match any option
            const invalidMessage = {
              type: 'bot',
              text: "I'm sorry, I didn't understand your choice. Please select one of the options.",
            };
            setMessages((prevMessages) => [...prevMessages, invalidMessage]);
          }
          break;

        case "askPinCode":
          const pinCode = text;
          const locationData = doctorClinicData[pinCode];
          if (locationData) {
            const clinics = locationData.clinics;

            const clinicResponseMessage = {
              type: 'bot',
              text: `Here are the clinics near your location (${pinCode}):`,
              buttons: clinics.map((clinic) => ({
                text: `${clinic.name} - ${clinic.address}`,
                onClick: () => handleUserInput(`Tell me more about ${clinic.name}`),
              })),
            };
            setMessages((prevMessages) => [...prevMessages, clinicResponseMessage]);
          } else {
            const invalidPinCodeMessage = {
              type: 'bot',
              text: "I'm sorry, I couldn't find information for that pin code. Please enter a valid pin code.",
            };
            setMessages((prevMessages) => [...prevMessages, invalidPinCodeMessage]);
          }
          setConversationState('clinicDetails');
          break;

        case 'clinicDetails':
          // Handle the clinic details here
          const selectedClinic = text; // This should be the name of the selected clinic
          // You can retrieve data related to the selected clinic and construct a response
          // For now, let's assume a sample response
          const sampleClinicResponse = {
            type: 'bot',
            text: `Here are the details for ${selectedClinic}:
              Address: 123 Main St
              Phone: 123-456-7890`,
          };
          setMessages((prevMessages) => [...prevMessages, sampleClinicResponse]);
          break;

        default:
          break;
      }
    }

    setInputText('');
  };

  // Determine the text for the button based on the conversation state
  const buttonLabel = conversationState === 'greeting' ? "Hello, what's your name?" : 'Chat';

  return (
    <div className="App">
      <div className="ChatbotContainer">
        <button className={`ChatbotIcon ${chatOpen ? 'active' : ''}`} onClick={toggleChatWindow}>
          {buttonLabel}
        </button>
        {chatOpen && (
          <div className="ChatWindow">
            <div className="ChatMessages">
              {messages.map((message, index) => (
                <div key={index} className={message.type}>
                  {message.type === 'bot' && message.buttons ? (
                    <div className="ButtonContainer">
                      {message.buttons.map((button, buttonIndex) => (
                        <button key={buttonIndex} onClick={button.onClick}>
                          {button.text}
                        </button>
                      ))}
                    </div>
                  ) : (
                    message.text
                  )}
                </div>
              ))}
            </div>
            <div className="ChatInput">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button onClick={() => handleUserInput(inputText)}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
