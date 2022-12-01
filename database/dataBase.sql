CREATE DATABASE baseDatosDiscord;

CREATE TABLE coders (
    id int AUTO_INCREMENT,
    nombre varchar(30),
    apellido varchar(30),
    nick_discord varchar(30) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE lenguajes_programacion (
    id int AUTO_INCREMENT,
    lenguaje varchar(50) NOT NULL,
    front_o_back enum('Frontend', 'Backend'),
    es_framework int(1) DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE programas_disenio (
    id int AUTO_INCREMENT,
    programa varchar(50),
    datos_extra varchar(255),
    PRIMARY KEY (id)
);

-- Tabla que combina coders con lenguajes
CREATE TABLE coders_lenguajes (
    id int AUTO_INCREMENT,
    coder_id int,
    lenguaje_id int,
    FOREIGN KEY (coder_id) REFERENCES coders(id),
    FOREIGN KEY (lenguaje_id) REFERENCES lenguajes_programacion(id),
    PRIMARY KEY (id)
);

-- Tabla que combina coders con programas de disenio
CREATE TABLE coders_disenio (
    id int AUTO_INCREMENT,
    coder_id int,
    disenio_id int,
    FOREIGN KEY (coder_id) REFERENCES coders(id),
    FOREIGN KEY (disenio_id) REFERENCES programas_disenio(id),
    PRIMARY KEY (id)
);

INSERT INTO coders
    (nombre, apellido, nick_discord)
    VALUES ("Gustavo", "Kildegaard", "Ivilin");

INSERT INTO lenguajes_programacion
    (lenguaje, front_o_back, es_framework) VALUES
    ('HTML', 'Frontend', 0),
    ('CSS', 'Frontend', 0),
    ('Javascript', 'Frontend', 0),
    ('Bootstrap', 'Frontend', 1),
    ('Node JS', 'Backend', 0);

INSERT INTO programas_disenio
    (programa) VALUES
    ('Figma'),
    ('Adobe XD');

INSERT INTO coders_lenguajes
    (coder_id, lenguaje_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4);

-- Vamos a probar algunas cosas

SELECT C.nombre, C.apellido, LP.lenguaje FROM coders AS C
    INNER JOIN coders_lenguajes AS CL
        ON C.id = CL.coder_id
        INNER JOIN lenguajes_programacion AS LP
            ON CL.lenguaje_id = LP.id
    WHERE LP.front_o_back LIKE 'Frontend';

SELECT C.nombre, C.apellido, LP.lenguaje FROM coders AS C
    INNER JOIN coders_lenguajes AS CL
        ON C.id = CL.coder_id
        INNER JOIN lenguajes_programacion AS LP
            ON CL.lenguaje_id = LP.id
    WHERE LP.es_framework = 1;