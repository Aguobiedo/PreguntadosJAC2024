import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campo.css';
import correctSound from './correctSound.mp3';
import incorrectSound from './incorrectSound.mp3';

const Preguntas = () => {
  const preguntas = [
   {
      id: 1,
      pregunta: '¿Cuál es la principal fuente de alimentación para el ganado?',
      opciones: ['Hierba', 'Piedras', 'Pescado', 'Azúcar'],
      respuestaCorrecta: 'Hierba',
    },
    {
      id:2,
      pregunta: '¿Cuál de los siguientes es un componente esencial en la dieta de las vacas?',
      opciones: ['Los mortales churros', 'Hierba', 'Sandwich "Sandrita"', 'Polenta'],
      respuestaCorrecta: 'Hierba',
    },

 {
      id: 3,
      pregunta: '¿Cómo es correcto decir “agroquímicos o fitosanitarios”?',
      opciones: ['Agroquimicos', 'Fitosanitarios', 'Agrotóxicos'],
      respuestaCorrecta: 'Fitosanitarios',
    },

 {
      id: 4,
      pregunta: '¿El trigo es un cereal de invierno o de verano?',
      opciones: ['Verano', 'Invierno', 'Ambos'],
      respuestaCorrecta: 'Invierno',
    },

{
      id: 5,
      pregunta: '¿La soja es un cultivo de invierno o verano?',
      opciones: ['Verano', 'Invierno', 'Ambos'],
      respuestaCorrecta: 'Verano',
    },

 {
      id: 6,
      pregunta: '¿Cuánto es el tiempo de gestación de una vaca?',
      opciones: ['7 meses', '11 meses', '9 meses', 'Todas son correctas' ],
      respuestaCorrecta: '9 meses',
    },
 {
      id: 7,
      pregunta: '¿Cuánto es el tiempo de gestación de una cerda?',
      opciones: ['Casi 6 meses', 'Casi 8 meses', 'Casi 3 meses', 'Casi 4 meses' ],
      respuestaCorrecta: 'Casi 4 meses',
    },
 {
      id: 8,
      pregunta: '¿Cuánto es el tiempo de gestación de una yegua?',
      opciones: ['7 meses', '11 meses', '14 meses', '9 meses' ],
      respuestaCorrecta: '11 meses',
    },
 {
      id: 9,
      pregunta: '¿Cuánto es el tiempo de gestación de una oveja?',
      opciones: ['5 meses', '7 meses', '3 meses', '9 meses' ],
      respuestaCorrecta: '5 meses',
    },
 {
      id: 10,
      pregunta: '¿Cómo es correcto decir?',
      opciones: ['Fumigación', 'Pulverización', 'Desinsectación' ],
      respuestaCorrecta: 'Pulverización',
    },
{
      id: 11,
      pregunta: '¿Comúnmente cuantos terneros pare una vaca por año?',
      opciones: ['2', '4', '5', '1' ],
      respuestaCorrecta: '1',
    },
{
      id: 12,
      pregunta: '¿Qué significa una yerra?',
      opciones: ['Castración de terneros', 'Fiesta gaucha', 'Doma', 'Todas las anteriores' ],
      respuestaCorrecta: 'Castración de terneros',
    },
{
      id: 13,
      pregunta: '¿Qué toman las vacas?',
      opciones: ['Leche', 'Agua' ],
      respuestaCorrecta: 'Agua',
    },
{
      id: 14,
      pregunta: '¿Cuántas toneladas puede transportar como máximo un camión de 3 ejes?',
      opciones: ['25 tn', '40 tn', '35 tn', '30 tn' ],
      respuestaCorrecta: '30 tn',
    },
{
      id: 15,
      pregunta: '¿Cuántas toneladas puede transportar como máximo un camión de 4 ejes?',
      opciones: ['27 tn', '40 tn', '37 tn', '30 tn' ],
      respuestaCorrecta: '37 tn',
    },
{
      id: 16,
      pregunta: '¿Cuántas toneladas puede transportar como máximo un camión de 3 ejes?',
      opciones: ['25 tn', '40 tn', '35 tn', '30 tn' ],
      respuestaCorrecta: '30 tn',
    },
{
      id: 17,
      pregunta: '¿Qué significa el silobolsa color rosa?',
      opciones: ['Concientización del cáncer de mama', 'Estética', 'Campaña de lanzamiento pelicula “Barbie”', 'Todas son correctas' ],
      respuestaCorrecta: 'Concientización del cáncer de mama',
    },
{
      id: 18,
      pregunta: '¿De los siguientes, que no detectan los collares en vacas de tambo?',
      opciones: ['Estrés', 'Celos', 'Frio', 'Enfermedad' ],
      respuestaCorrecta: 'Frio',
    },
{
      id: 19,
      pregunta: '¿Qué organismo regula la sanidad de los rodeos de animales?',
      opciones: ['Inta', 'Samco', 'Senasa', 'Municipalidad' ],
      respuestaCorrecta: 'Senasa',
    },
{
      id: 20,
      pregunta: 'La ganadería es uno de los factores que más contribuyen a los problemas medioambientales más graves de la actualidad',
      opciones: ['Falso', 'Verdadero' ],
      respuestaCorrecta: 'Falso',
    },
{
      id: 21,
      pregunta: '¿Cuántos huevos puede poner una gallina por día?',
      opciones: ['Dos', 'Tres', 'Uno' ],
      respuestaCorrecta: 'Uno',
    },
{
      id: 22,
      pregunta: '¿Quién establece los precios diarios de los cereales?',
      opciones: ['La bolsa de comercio', 'El mercadito de Norma', 'Los gobiernos provinciales', 'Los agricultores' ],
      respuestaCorrecta: 'La bolsa de comercio',
    },
{
      id: 23,
      pregunta: '¿cuántos kilogramos son 37 quintales?',
      opciones: ['370.000 kg', '3.700 kg', '370 kg', '37kg' ],
      respuestaCorrecta: '3.700 kg',
    },
{
      id: 24,
      pregunta: '¿Cuantos metros cuadrados son 1,5 hectareas?',
      opciones: ['15 metros cuadrados', '150 metros cuadrados', '15mil metros cuadrados', '150 millones de metros cuadrados' ],
      respuestaCorrecta: '15mil metros cuadrados',
    },
{
      id: 25,
      pregunta: '¿Cómo se llama la asociación de productores de siembra directa ?',
      opciones: ['INTA', 'CREA', 'AFA', ' AAPRESID' ],
      respuestaCorrecta: ' AAPRESID',
    },
{
      id: 26,
      pregunta: '¿Cuál es el porcentaje de retenciones que paga el grano de soja?',
      opciones: ['33%', '5%', '70%', 'No paga retenciones' ],
      respuestaCorrecta: '33%',
    },
{
      id: 27,
      pregunta: '¿En donde se festeja la fiesta nacional del trigo?',
      opciones: ['Calchin', 'Leones', 'Bandera', 'Olavarria' ],
      respuestaCorrecta: 'Leones',
    },
{
      id: 28,
      pregunta: '¿Dónde se establecen los precios estimativos que se le pagan al productor por la producción de carne?',
      opciones: ['Bolsa de comercio', 'Carniceria “Don tito”', 'Mercado agroganadero de Cañuelas', 'Chicago' ],
      respuestaCorrecta: 'Mercado agroganadero de Cañuelas',
    },
{
      id: 29,
      pregunta: '¿Cuántos litros de leche producen los tambos de argentina en un año?',
      opciones: ['100.000 litros', '5.000 litros', '50.000 millones de litros', '11.500 millones de litros ' ],
      respuestaCorrecta: '11.500 millones de litros ',
    },
{
      id: 30,
      pregunta: '¿Cuál es el principal destino en el exterior de los productos del campo de Santa Fe?',
      opciones: ['India', 'Unión Europea', 'Consumo interno', 'Japon' ],
      respuestaCorrecta: 'India',
    },
{
      id: 31,
      pregunta: '¿Cuántos camiones necesitamos para llenar aproximadamente un barco?',
      opciones: ['370', '1.150', '5.200', '150' ],
      respuestaCorrecta: '1.150',
    },
{
      id: 32,
      pregunta: '¿Cuántos vagones necesitamos para llenar aproximadamente un barco?',
      opciones: ['360', '1.100', '700', '3.000' ],
      respuestaCorrecta: '700',
    },
{
      id: 33,
      pregunta: '¿Cuáles son los principales productos exportados por Santa Fe?',
      opciones: ['Aceite y huevos', 'Carne y cuero', 'Leche y polenta', 'Harina y pellets de soja' ],
      respuestaCorrecta: 'Harina y pellets de soja',
    },
{
      id: 34,
      pregunta: '¿Cómo se llama al fenómeno climático en donde se ven importantes lluvias?',
      opciones: ['El niño', 'El primo', 'Santa Rosa', 'La niña' ],
      respuestaCorrecta: 'El niño',
    },
{
      id: 35,
      pregunta: '¿Cómo se llama el fenómeno climático en donde se ve una gran disminución de las precipitaciones?',
      opciones: ['El niño', 'La niña', 'Santa Rosa', 'La abuela' ],
      respuestaCorrecta: 'La niña',
    },
{
      id: 36,
      pregunta: '¿Cuál de estos cultivos de verano no pertenece a los cereales?',
      opciones: ['Maiz', 'Sorgo', 'Soja' ],
      respuestaCorrecta: 'Soja',
    },
{
      id: 37,
      pregunta: '¿ Cuántas horas dura el celo de la vaca?',
      opciones: ['24 horas', '6 horas', '48 horas', '12 horas' ],
      respuestaCorrecta: '12 horas',
    },
{
      id: 38,
      pregunta: '¿Cuántos litros de agua se requieren para producir un kilogramo de carne vacuna o de res según datos del estudio de la Organización de las Naciones Unidas para la Alimentación y la Agricultura ?',
      opciones: ['15.400 litros', '3 litros', '200.000 litros', '100 litros' ],
      respuestaCorrecta: '15.400 litros',
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
  };

  const volverAInicio = () => {
    navigate('/');
  };

  return (
    <div>
      <h2 className="titulo">Pregunta sobre Agricultura y ganadería</h2>
      {preguntaActual && (
        <Pregunta
          pregunta={preguntaActual}
          onRespuesta={manejarRespuesta}
          mostrarRespuesta={mostrarRespuesta}
          opcionSeleccionada={opcionSeleccionada}
        />
      )}

      {mostrarRespuesta && (
        <Resultado
          volverAInicio={volverAInicio}
          esRespuestaCorrecta={opcionSeleccionada === preguntaActual.respuestaCorrecta}
        />
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
            } ${
              mostrarRespuesta && opcion === opcionSeleccionada && opcion !== respuestaCorrecta
                ? 'incorrecta'
                : ''
            }`}
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

export default Preguntas;
