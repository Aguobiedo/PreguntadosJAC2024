import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Campo.css';
import correctSound from './correctSound.mp3';
import incorrectSound from './incorrectSound.mp3';

const PreguntasCooperativismo = () => {
  const preguntas = [
    {
      id: 1,
           pregunta: '¿En qué año se fundó ACA?',
           opciones: ['1922', '1816', '1996', '2011'],
           respuestaCorrecta: '1922',
         },
     {
      id: 2,
           pregunta: '¿Donde està instalada la cooperativa La Industrial?',
           opciones: ['Landeta', 'Centeno', 'San Genaro', 'Las parejas'],
           respuestaCorrecta: 'Centeno',
         },
     {
      id: 3,
           pregunta: '¿De cuántas localidades hay jóvenes dentro de JAC La Industrial?',
           opciones: ['1', '0', '3', '2'],
           respuestaCorrecta: '2',
         },
     {
      id: 4,
           pregunta: '¿En qué año comenzamos con nuestras actividades?',
           opciones: ['2001', '1992', '2020', '2017'],
           respuestaCorrecta: '2017',
         },
     {
      id: 5,
           pregunta: '¿Cuantos ordeñes por dìa se hacen en el Tambo La Augusta?',
           opciones: ['3', '1', '2', '5'],
           respuestaCorrecta: '3',
         },
     {
      id: 6,
           pregunta: '¿Con qué fin se formó la Cooperativa La Industrial?',
           opciones: ['por gusto', 'satisfacer una necesidad humana de tipo económica, cultural y social', 'por afinidad'],
           respuestaCorrecta: 'satisfacer una necesidad humana de tipo económica, cultural y social',
         },
     {
      id: 7,
           pregunta: '¿Cuál es la planta más grande de Argentina de Bioetanol?',
           opciones: ['ninguna', 'Bioetanol Río Cuarto SA', 'AcaBio', 'Alconoa SRL'],
           respuestaCorrecta: 'AcaBio',
         },
     {
      id: 8,
           pregunta: '¿Donde està ubicada la planta de reciclado de ACA?',
           opciones: ['Rosario', 'Pueblo Casas', 'Casalegno', 'Cañada De Gómez'],
           respuestaCorrecta: 'Cañada De Gómez',
         },
     {
      id: 9,
           pregunta: '¿Cuántas toneladas llevamos enviadas a reciclar de silobolsas?',
           opciones: ['25 tn', '1 tn', '200 tn', '5 tn'],
           respuestaCorrecta: '25 tn',
         },
     {
      id: 10,
           pregunta: '¿Cuál de los siguientes es uno de los tantos servicios prestados por Cooperativa La industrial? ',
           opciones: ['Siembra', 'Picado de forrajes', 'Cosecha', 'Labranza'],
           respuestaCorrecta: 'Picado de forrajes',
         },
     {
      id: 11,
           pregunta: '¿Cuál es el nuevo servicio que presta la Cooperativa La Industrial? ',
           opciones: ['Informáticos', 'Siembra', 'Expendio de combustible Puma', 'Pulverización'],
           respuestaCorrecta: 'Expendio de combustible Puma',
         },
     {
      id: 12,
           pregunta: '¿Qué acciones lleva a cabo La Industrial en el Tambo La Augusta? ',
           opciones: ['Reforestación', 'Paneles solares', 'Correcta gestión de residuos', 'Todas son correctas'],
           respuestaCorrecta: 'Todas son correctas',
         },
     {
      id: 13,
           pregunta: '¿Cuál fue nuestro primer proyecto como juventud? ',
           opciones: ['Reciclado de silobolsas', 'Ecobotellas', 'EcoVueltos', 'Maraton'],
           respuestaCorrecta: 'Reciclado de silobolsas',
         },
     {
      id: 14,
           pregunta: '¿Qué es una asamblea? ',
           opciones: ['Una reunión demostrativa', 'Es la máxima autoridad, donde se reúnen los socios/as para deliberar y decidir sobre los asuntos relativos a la institución.', 'Una charla sobre trabajo en equipo'],
           respuestaCorrecta: 'Es la máxima autoridad, donde se reúnen los socios/as para deliberar y decidir sobre los asuntos relativos a la institución.',
         },
     {
      id: 15,
           pregunta: '¿Qué valores predominan en el cooperativismo? ',
           opciones: ['Ayuda mutua y equidad', 'Responsabilidad e igualdad', 'Democracia y solidaridad', 'Todas las anteriores'],
           respuestaCorrecta: 'Todas las anteriores',
         },
     {
      id: 16,
           pregunta: '¿Qué actividades realiza anualmente el consejo central de  aca jóvenes ? ',
           opciones: ['Congreso técnico ACA +', 'Seminario nacional de juventudes', 'Todas son correctas', 'Capacitaciones'],
           respuestaCorrecta: 'Todas son correctas',
         },
     {
      id: 17,
           pregunta: '¿Desde qué año la cooperativa La Industrial presta el servicio de picado de forrajes? ',
           opciones: ['1996', '2016', '1985', '2007'],
           respuestaCorrecta: '1996',
         },
     {
      id: 18,
           pregunta: '¿Donde se tratan los silobolsas recolectados por la juventud para su reciclado? ',
           opciones: ['Arroyo seco', 'Cañada de Gómez', 'Carlos Pellegrini', 'Totoras'],
           respuestaCorrecta: 'Cañada de Gómez',
         },
     {
      id: 19,
           pregunta: '¿Desde qué año La Industrial Cooperativa empezó a administrar el tambo “La Augusta”? ',
           opciones: ['1998', '2011', '2021', '2019'],
           respuestaCorrecta: '2021',
         },
     {
      id: 20,
           pregunta: '¿Desde qué año La Industrial Cooperativa comenzó a prestar el servicio de altina para fertilización de campos? ',
           opciones: ['1998', '2011', '2019', '2021'],
           respuestaCorrecta: '2021',
         },
     {
      id: 21,
           pregunta: '¿En qué año la Juventud agraria cooperativista realizó su asamblea constitutiva? ',
           opciones: ['2019', '2021', '2020', '2017'],
           respuestaCorrecta: '2019',
         },
     {
      id: 22,
           pregunta: '¿Cuántos años cumple La Industrial Cooperativa?  ',
           opciones: ['96', '61', '78', '46'],
           respuestaCorrecta: '78',
         },
     {
      id: 23,
           pregunta: '¿A cuántas personas emplea “La Industrial Cooperativa”? ',
           opciones: ['30', '60', '45', '20'],
           respuestaCorrecta: '45',
         },
     {
      id: 24,
           pregunta: '¿En qué año un integrante de la juventud agraria ingresó al consejo central de juventudes siendo el primer representante de nuestra JAC? ',
           opciones: ['2018', '2021', '2017', '2020'],
           respuestaCorrecta: '2020',
         },
     {
      id: 25,
           pregunta: '¿En qué año la juventud realizó una recolección de residuos electrónicos? ',
           opciones: ['2019', '2023', '2017', '2021'],
           respuestaCorrecta: '2023',
         },
     {
      id: 26,
           pregunta: '¿En qué año se fundó La Industrial Cooperativa? ',
           opciones: ['1946', '2023', '2017', '1973'],
           respuestaCorrecta: '1946',
         },
     {
      id: 27,
           pregunta: '¿Cuántas cooperativas hay asociadas a ACA? ',
           opciones: ['680', '147', '63', '37'],
           respuestaCorrecta: '147',
         },
     {
      id: 28,
           pregunta: '¿A cuántos productores llega la Asociación de Cooperativas Argentinas? ',
           opciones: ['20 mil', 'Menos de 60 mil', '650 mil', 'Más de 60 mil'],
           respuestaCorrecta: 'Más de 60 mil',
         },
     {
      id: 29,
           pregunta: '¿Qué fecha se conmemora el día mundial del cooperativismo ? ',
           opciones: ['El último lunes de septiembre', 'El 1er viernes de noviembre', 'El último jueves de Febrero', 'El 1er sábado de Julio'],
           respuestaCorrecta: 'El 1er sábado de Julio',
         },
     {
      id: 30,
           pregunta: '¿Qué aniversario cumple ACA jóvenes este año? ',
           opciones: ['80 aniversario', '110 aniversario', '54 aniversario', '36 aniversario'],
           respuestaCorrecta: '80 aniversario',
         },
     {
      id: 31,
           pregunta: '¿En qué año nació la marca de alimentos balanceados CLIA perteneciente a La Industrial Cooperativa? ',
           opciones: ['1989', '2014', '2003', '2018'],
           respuestaCorrecta: '2014',
         },
     {
      id: 32,
           pregunta: '¿Cuántas juventudes integran ACA jovenes? ',
           opciones: ['23', '65', '41', '93'],
           respuestaCorrecta: '41',
         },
     {
      id: 33,
           pregunta: '¿En qué año cumplió 100 años la Asociación de Cooperativas Argentinas? ',
           opciones: ['1983', '2003', '1998', '2022'],
           respuestaCorrecta: '2022',
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
      <h2 className="titulo">Pregunta sobre Cooperativismo</h2>
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

export default PreguntasCooperativismo;
