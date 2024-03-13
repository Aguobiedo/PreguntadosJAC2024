import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campo.css';
import correctSound from './correctSound.mp3';
import incorrectSound from './incorrectSound.mp3';

const PreguntasReciclaje = () => {
  const preguntas = [
    {
      id: 1,
      pregunta: '¿Qué es una ecobotella?',
      opciones: ['Botella de plástico rellena en su interior con plásticos', 'Botella reciclada', 'Un instrumento'],
      respuestaCorrecta: 'Botella de plástico rellena en su interior con plásticos',
    },

 {
      id: 2,
      pregunta: '¿Qué puedo reciclar?',
      opciones: ['Plástico', 'Todas son correctas', 'Vidrio', 'Carton'],
      respuestaCorrecta: 'Todas son correctas',
    },

 {
      id: 3,
      pregunta: '¿Qué significa 3R en reciclaje?',
      opciones: ['Racionar, reagrupar, relacionar', 'Revisar, recoger, regar', 'Reducir, reciclar, reutilizar'],
      respuestaCorrecta: 'Reducir, reciclar, reutilizar',
    },

 {
      id: 4,
      pregunta: '¿Cuántos litros de agua contamina 1 litro de aceite automotor?',
      opciones: ['500 litros de agua', '10 litros de agua', '1000 litros de agua', '5000 litros de agua'],
      respuestaCorrecta: '1000 litros de agua',
    },
{
      id: 5,
      pregunta: '¿Cuántos años tarda en descomponerse un encendedor?',
      opciones: ['100 años', '10 años', '500 años', '50 años'],
      respuestaCorrecta: '100 años',
    },

{
      id: 6,
      pregunta: '¿Qué colores tienen los cestos de basura para reciclaje?',
      opciones: ['violeta, cian y turquesa', 'blanco, beige y gris', 'Verde, azul, rojo y amarillo'],
      respuestaCorrecta: 'Verde, azul, rojo y amarillo',
    },
{
      id: 7,
      pregunta: '¿Qué objetivos tiene reciclar?',
      opciones: ['Usar un objeto más de una vez y después desecharlo', 'lograr darle a un objeto más de un uso antes de desecharlo', 'Vender un objeto a otra gente', 'hacerlo más bonito'],
      respuestaCorrecta: 'lograr darle a un objeto más de un uso antes de desecharlo',
    },
{
      id: 8,
      pregunta: '¿Cuánto demora una botella de vidrio en degradarse?',
      opciones: ['10000 años', '40 años', '4000 años', '50 años'],
      respuestaCorrecta: '4000 años',
    },
{
      id: 9,
      pregunta: '¿Cuánto demora en descomponerse un cartucho de impresora?',
      opciones: ['28 años', '10 años', '457 años', '100 años'],
      respuestaCorrecta: '100 años',
    },
{
      id: 10,
      pregunta: '¿Cuántos litros de agua contamina una pila botón?',
      opciones: ['600.000 litros de agua', '1.000.000 litros de agua', ' 432 litros de agua', ' 33 litros de agua'],
      respuestaCorrecta: '600.000 litros de agua',
    },

{
      id: 11,
      pregunta: '¿Cuántos kg de basura genera una persona por día aproximadamente?',
      opciones: ['5kg', '0.5 kg', '1 kg', '3 kg'],
      respuestaCorrecta: '1 kg',
    },
{
      id: 12,
      pregunta: '¿Qué significa el silobolsa verde?',
      opciones: ['que contiene acelga', 'nada', 'que fue confeccionada con plástico reciclado', 'una cuestion estetica'],
      respuestaCorrecta: 'que fue confeccionada con plástico reciclado',
    },
{
 id: 13,
      pregunta: '¿En que se debería hacer el triple lavado?',
      opciones: ['verduras', 'nada', 'frutas', 'bidones de fitosanitarios'],
      respuestaCorrecta: 'bidones de fitosanitarios',
    },
{
 id: 14,
      pregunta: '¿Cuál de estas acciones NO pertenece a la regla de las 3 erres de la sostenibilidad? ',
      opciones: ['Reducir', 'Reciclar', 'Respetar', 'Reutilizar'],
      respuestaCorrecta: 'Respetar',
    },
{
 id: 15,
      pregunta: '¿Cuál de estos colores NO pertenece a un contenedor de reciclaje? ',
      opciones: ['Negro', 'Verde', 'Amarillo'],
      respuestaCorrecta: 'Negro',
    },
{
 id: 16,
      pregunta: '¿Sabes para qué se utiliza el contenedor rojo? ',
      opciones: ['Pilas', 'Desechos patológicos', 'Aceites', 'Las dos son correctas'],
      respuestaCorrecta: 'Desechos patológicos',
    },
{
 id: 17,
      pregunta: '¿En qué contenedor deberías tirar los tetra-bricks? ',
      opciones: ['Azul', 'Amarillo', 'Verde', 'Todas son correctas'],
      respuestaCorrecta: 'Amarillo',
    },
{
 id: 18,
      pregunta: '¿En qué contenedor deberías tirar las latas? ',
      opciones: ['Azul', 'Todas son correctas', 'Verde', 'Amarillo'],
      respuestaCorrecta: 'Amarillo',
    },

{
 id: 19,
      pregunta: '¿De qué color es el contenedor destinado al reciclaje del papel y el cartón? ',
      opciones: ['Amarillo', 'Todas son correctas', 'Verde', 'Azul'],
      respuestaCorrecta: 'Azul',
    },
{
 id: 20,
      pregunta: '¿Dónde se debe tirar el aceite vegetal usado tras cocinar?  ',
      opciones: ['Al campo pq es biodegradable', 'Por la bacha de la cocina', 'Transportar en botellas a puntos de reciclado'],
      respuestaCorrecta: 'Transportar en botellas a puntos de reciclado',
    },
{
 id: 21,
      pregunta: '¿Cuándo es el día mundial del reciclaje? ',
      opciones: ['17 de mayo', '5 de junio', 'Ambos'],
      respuestaCorrecta: '17 de mayo',
    },
{
 id: 22,
      pregunta: '¿Qué es el reciclaje? ',
      opciones: ['Guardar', 'Desechar', 'Reutilizar'],
      respuestaCorrecta: 'Reutilizar',
    },
{
 id: 23,
      pregunta: 'Cuando se gasta el rollo de papel higiénico, ¿Dónde tiro el tubo de cartón? ',
      opciones: ['Contenedor de vidrio', 'Contenedor de papel', 'Contenedor de plastico'],
      respuestaCorrecta: 'Contenedor de papel',
    },
{
 id: 24,
      pregunta: '¿Reciclar es separar los distintos tipos de residuos o basura? ',
      opciones: ['Verdadero', 'Falso'],
      respuestaCorrecta: 'Verdadero',
    },
{
 id: 25,
      pregunta: '¿cuánto tarda una bolsa de nylon en degradarse?',
      opciones: ['150-300 años', '50-100 años', '500-650 años'],
      respuestaCorrecta: '150-300 años',
    },
{
 id: 26,
      pregunta: '¿Cuánto tiempo tarda una silobolsa en degradarse?',
      opciones: ['175 años', '500 años', '250 años'],
      respuestaCorrecta: '500 años',
    },

{
 id: 27,
      pregunta: 'La sociedad de la industria plástica diseñó un código de identificación de los distintos tipos de plásticos, particularmente para los de consumo masivo. ¿Cuantos son?',
      opciones: ['14', '4', '7'],
      respuestaCorrecta: '7',
    },
{
 id: 28,
      pregunta: '¿Qué significa la sigla RAEEs?',
      opciones: ['Residuos de aparatos electricos y electronicos', 'Real academia española', 'Reciclar aumenta el estrés'],
      respuestaCorrecta: 'Residuos de aparatos electricos y electronicos',
    },
{
 id: 29,
      pregunta: '¿Qué residuos se pueden utilizar para generar biogás?',
      opciones: ['Residuos verdes (restos de poda)', 'Residuos agrícolas', 'Residuos orgánicos de casa', 'Todas son correctas'],
      respuestaCorrecta: 'Todas son correctas',
    },
{
 id: 30,
      pregunta: '¿Cuántos litros de agua se ahorran al reciclar una botella de plástico de 1L?',
      opciones: ['4 L', '1 L', '100 L','Todas son correctas'],
      respuestaCorrecta: '4 L',
    },


  ];

  const [preguntaActual, setPreguntaActual] = useState(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Seleccionar una pregunta aleatoria al cargar el componente
    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPreguntaActual(preguntaAleatoria);
  }, []);

  const manejarRespuesta = (opcion) => {
    setOpcionSeleccionada(opcion);
    setMostrarRespuesta(true);
    // Puedes realizar alguna lógica adicional según la respuesta (esCorrecta)
  };
 
  const volverAInicio = () => {
    navigate('/');
  };

  return (
    <div>
      <h2 className="titulo">Pregunta sobre Reciclaje</h2>
      {preguntaActual && (
        <Pregunta
          pregunta={preguntaActual}
          onRespuesta={manejarRespuesta}
          mostrarRespuesta={mostrarRespuesta}
          opcionSeleccionada={opcionSeleccionada}
        />
      )}
       
      {mostrarRespuesta && (
        <Resultado volverAInicio={volverAInicio} esRespuestaCorrecta={opcionSeleccionada === preguntaActual.respuestaCorrecta} />
      )}
    </div>
  );
};

const Pregunta = ({ pregunta, onRespuesta, mostrarRespuesta, opcionSeleccionada }) => {
  const { opciones, respuestaCorrecta } = pregunta;

  return (
    <div>
      <p className="pregunta">{pregunta.pregunta}</p>
      <div className="opciones-container">
        {opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => onRespuesta(opcion)}
            className={`opcion ${
              mostrarRespuesta && opcion === respuestaCorrecta ? 'correcta' : ''
            } ${mostrarRespuesta && opcion === opcionSeleccionada && opcion !== respuestaCorrecta ? 'incorrecta' : ''}`}
            disabled={mostrarRespuesta}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

const Resultado = ({ volverAInicio, esRespuestaCorrecta }) => {
  const reproducirSonido = (ruta) => {
    const audio = new Audio(ruta);
    audio.play();
  };

  const sonidoAReproducir = esRespuestaCorrecta ? correctSound : incorrectSound;

  useEffect(() => {
    reproducirSonido(sonidoAReproducir);
  }, [sonidoAReproducir]);

  return (
    <div className="resultado"> 
      <p>{esRespuestaCorrecta ? '¡Correcto!' : '¡Incorrecto!'}</p>
      <button onClick={volverAInicio}>Volver a las categorías</button>
    </div>
  );
};

export default PreguntasReciclaje;
