CREATE DATABASE portafolio; 

CREATE TABLE proyectos(
  id SERIAL PRIMARY KEY NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  imagen TEXT NOT NULL,
  des TEXT NOT NULL
  );

INSERT INTO proyectos (nombre, imagen, des)
VALUES ( 'proyecto1', 'http://localhost:3000/fondo1.jpg', 'Mi descripción');

DELETE FROM proyectos; 