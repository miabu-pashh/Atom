import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


//import './App.css'; // Import your custom CSS for styling


const clinicData = {
  '12345': {
    name: 'Clinic A',
    address: '123 Main St',
    phone: '123-456-7890',
  },
  '67890': {
    name: 'Clinic B',
    address: '456 Elm St',
    phone: '987-654-3210',
  },
  // Add more clinic data as needed
};


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
      { value: 'healthInfo', label: 'Get Health Information', trigger: "GHI" },
      { value: 'findClinic', label: 'Find Nearest Clinic', trigger: "FNC" },
    ],
  },
  {
    id: 'GHI', // New step to ask for pincode
    message: 'Still in progress',
    //trigger: '6',
  },
  {
    id: 'FNC', // New step to ask for pincode
    message: 'Please enter your pincode to find the nearest clinic in your area:',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: 'findClinic',
  },
  {
    id: '7',
    message: 'Hello {previousValue}! is the pincode you provided',
    trigger : '4',
  },
  {
    id: 'findClinic',
    message: 'Hello {previousValue}! is the pincode you provided',


    component: (
      <div>
        {({ previousValue }) => {
          console.log('Previous Value:', previousValue); // Debug log
          const pincode = previousValue;
          console.log('Pincode:', pincode); // Debug log


          const clinicInfo = clinicData[pincode];
          console.log('Clinic Info:', clinicInfo); // Debug log


 
          if (clinicInfo) {
            return (
              <div>
                <p>Here's the information for the nearest clinic:</p>
                <p>Doctor: {clinicInfo.name}</p>
                <p>Address: {clinicInfo.address}</p>
                <p>Phone: {clinicInfo.phone}</p>
              </div>
            );
          } else {
            return <p>Sorry, we couldn't find a clinic for the provided pincode.</p>;
          }
        }}
      </div>
    ),
    trigger : '4'
  }
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




function MyChatBot() {
  return (
    <div className="ChatBot">
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




export default MyChatBot;

