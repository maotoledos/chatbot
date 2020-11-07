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
            message: 'Buena tarde y bienvenido a la cadena mas grande de farmacias Ganga-Farms 24 7 \n Favor ingresar un nombre y un apellido:',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3'
          },
          {
            id: '3',
            message: '¡Hola {previousValue}! es un gusto poder saludarle.',
            trigger: '4'
          },
          {
            id: '4',
            message: 'Porfavor elige uno de nuestros servicios de farmacia:',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 3, label: '1. Solicitar un producto', trigger: '6d' },
              { value: 1, label: '2. Estatus de mi entrega.', trigger: '7' },
              { value: 2, label: '3. Informacion General.', trigger: '6' },
              { value: 4, label: 'Regresar', trigger: '1' },
            ],
          },
          {
            id: '6',
            message: 'Opcion seleccionada: Informacion General de Ganga-Farms 24 7.',
            trigger: '6a',
          },
          {
            id: '6a',
            options: [
              { value: 1, label: '1. Acerca de Nosotros.', trigger: '6b' },
              { value: 2, label: '2. Ubicaciones.', trigger: '6c' },
              { value: 3, label: 'Regresar', trigger: '5' },
            ],
          },
          {
            id: '6b',
            component: (
              <div>
                <h2>Ganga-farms</h2>

                <h3>Historia</h3>
                <p>Ganga-Farms se fundó para ofrecer un servicio al cliente y una atención al paciente incomparables. Lo que comenzó como una sola ubicación en 2019 ha crecido a sesenta ubicaciones, lo que la convierte en la farmacia independiente de más rápido crecimiento en Sumpango.</p>
                <h3>Servicios especiales:</h3>
                      Entrega Gratis
                      Precios competitivos
                      Refills de medicina
                      Servicio personalizado
                      Politicas de seguros incluidas
              </div>
            ),
            trigger: '6a',
          },
          {
            id: '6c',
            component: (
              <div>
                <h2>Ubicaciones</h2>
                <ul>
                <li>Baja Verapaz    1ª calle 5-19 zona 1, Cobán</li>
                <li>Baja Verapaz	11av. 1-99 zona 6, Salamá</li>
                <li>Chimaltenango	6ª Avenida 1-32 zona 1, Chimaltenango</li>
                <li>Chiquimula	2da. Calle 00-90 zona 5, Chiquimula</li>
                <li>Escuintla	Centro Comercial Plaza Palmeras, Local 37 y 37 "A"</li>
                <li>Guatemala Norte	Avenida Simeón Cañas 3-37 zona 2</li>
                <li>Guatemala Occidente	4º avenida 0-69 zona 2, Colonia Cotió</li>
                <li>Guatemala Sur	Avenida Petapa 47-79, Zona 12</li>
                <li>Huehuetenango	4ª. Calle 9-22 Zona 1</li>
                <li>Jalapa	3ª. Avenida 1-81 zona 1, Barrio La Esperanza</li>
                <li>Jutiapa	8va. av. entre 8 y 9 calle "A" zona 1, Barrio Latino Jutiapa</li>
                <li>Retalhuleu	4° Calle 6-10 Zona 6, Cantón Dolores, Retalhuleu</li>
                <li>Sacatepéquez	6ª. Avenida Norte No. 80, Antigua</li>
                <li>San Marcos	8ª. Av. 5-54, zona 2, "Edificio Rivero’s"</li>
                </ul>
              </div>
            ),
            trigger: '6a',
          },
          {
            id: '7',
            message: 'Opción seleccionada: Estatus de entrega.',
            trigger: '8',

          },
          {
            id: '8',
            message: 'Favor ingresar un numero de telefono vinculado con la entrega:',
            trigger: '9',
          },
          {
            id: '9',
            user: true,
            validator: (value) => {
              if (isNaN(value)) {
                return 'Mmm... parece que no es un numero telefonico. Porfavor vuelva a intentar nuevamente.';
              }
              if (value !== '35194189') {
                return 'Su numero no se encuentra registrado con ningun pedido.';
              }
              return true;
            },
            trigger: '10',
          },
          {
            id: '10',
            message: 'Gracias por su amable espera.',
            trigger: '11'
          },
          {
            id: '11',
            message: 'A continuacion se muestra el detalle de su pedido #FG029091, solicitado el 11-05-2020 13:21:20. ¿Desea continuar?',
            trigger: '12'
          },
          {
            id: '12',
            user: true,
            trigger: '13'
          },
          {
            id: '13',
            component: (
              <div style={{ width: '100%' }}>
                <h3>Resumen</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Nombre de Piloto</td>
                      <td>Hugo Hector Estrada</td>
                    </tr>
                    <tr>
                      <td>Pedido con receta medica</td>
                      <td> - Omeprazol (Prilosec)</td>
                      <td> - lansoprazol (Prevacid)</td>
                      <td> - rabeprazol (Aciphex)</td>
                      <td> - esomeprazol (Nexium)</td>
                      <td> - dexlansoprazol (Dexilant)</td>
                      <td> - pantoprazol (Protonix)</td>
                    </tr>
                    <tr>
                      <td>Estado de Entrega</td>
                      <td>
                        En camino. Estimado de 14 minutos.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
            trigger: '14'
          },

          {
            id: '6d',
            message: 'Opción seleccionada: Solicitud de Producto. Ingrese los campos que a continuacion se solicitan:',
            trigger: '15',

          },
          {
            id: '15',
            component: (
              <div>
                Favor ingresar:
                <ul>
                  <li>Nombre</li>
                  <li>Telefono</li>
                  <li>Forma de pago</li>
                  <li>Direccion</li>
                  <li>Descripcion de producto(s)</li>
                </ul>
              </div>
            ),
            trigger: '16',
          },
          {
            id: '16',
            user: true,
            validator: (value) => {
              if (value.length < 30) {
                return 'Mmm... parece que falta informacion. Porfavor vuelva a intentar nuevamente.';
              }
              return true;
            },
            trigger: '17',
          },
          {
            id: '17',
            message: `Gracias por su amable espera. Su producto fue registrado con exito: Pedido #GF0303 {previousValue} a las 
            ${new Date().toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}`,              
            trigger: '19'
          },
          {
            id: '19',
            user: true,
            trigger: '20'
          },
          {
            id: '20',
            message: 'Gracias por tu compra esperamos regreses pronto! Porfavor calificanos de 1 a 5.',
            trigger: '14'
          },
          {
            id: '14',
            message: '...bye {previousValue}!',
            end: true
          },
        ]}
      />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
