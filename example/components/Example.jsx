import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [

  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot
        headerTitle="Astronaut Chat"
        speechSynthesis={{ enable: true, lang: 'es' }}
        steps={[
          {
            id: '1',
            message: 'Cual es tu nombre?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hola {previousValue} super papi poderoso como goku, mucho gusto!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Porfavor elige uno de nuestros servicios de farmacia:',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Información de Farmacias de conveniencia', trigger: '7' },
              { value: 2, label: 'Estatus de mi entrega', trigger: '6' },
              { value: 3, label: 'Consultas de medicamento', trigger: '6' },
            ],
          },
          {
            id: '6',
            message: 'Disculpe el inconveniente, estamos teniendo dificultades con la opcion {previousValue}.',
            trigger: '4',
          },
          {
            id: '7',
            message: 'Bienvenido a la matrix, eres el neo o la trinity!',
            trigger: '8',

          },
          {
            id: '8',
            message: 'Favor ingresar un numero de telefono',
            trigger: '9',
          },
          {
            id: '9',
            user: true,
            validator: (value) => {
              if (isNaN(value)) {
                return 'Mmm... parece que no es un numero, intente nuevamente.';
              }
              console.log(typeof value)
              if (value !== '35194189')  {
                return 'Su numero no se encuentra registrado.';
              }
              return true;
            },
            trigger: '10',
          },
          {
            id: '10',
            message: 'Bienvenido mauris',
            trigger: '11'
          },
          {
            id: '11',
            message: '...',
            end: true            
          },
        ]}
      />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
