import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import './App.css'; // Import your custom CSS for styling

const steps = [
  {
    id: '0',
    message: 'Hello there!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'May I know your name, please?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hello {previousValue}! How can I assist you today?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 'healthInfo', label: 'Get Health Information' },
      { value: 'findClinic', label: 'Find Nearest Clinic' },
    ],
  },
];

const theme = {
  background: '#F5F5F5', // Background color
  headerBgColor: '#197B22', // Header background color
  headerFontColor: '#FFFFFF', // Header text color
  botBubbleColor: '#0F3789', // Bot bubble background color
  headerFontSize: '20px',
  botFontColor: '#FFFFFF', // Bot text color
  userBubbleColor: '#FF5733', // User bubble background color
  userFontColor: '#FFFFFF', // User text color
};


const config = {
  //botAvatar: 'img.png',
  floating: true,
};


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="ChatBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}


export default App;