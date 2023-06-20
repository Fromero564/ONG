DROP DATABASE IF EXISTS miBase_db;
CREATE DATABASE miBase_db;
USE miBase_db;


DROP TABLE IF EXISTS `rols`;
CREATE TABLE `rols` (
    `id` INT AUTO_INCREMENT,
    `rol` VARCHAR(100),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO rols VALUES ("","voluntario");
INSERT INTO rols VALUES ("","comprador");
INSERT INTO rols VALUES ("","ambos");

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias`(
    `id` INT AUTO_INCREMENT ,
    `categoria` VARCHAR(200),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO categorias VALUES ("","Decoración");
INSERT INTO categorias VALUES ("","Hogar");
INSERT INTO categorias VALUES ("","Indumentaria");

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos`(
    `id` INT AUTO_INCREMENT,
    `nombre` VARCHAR (30) NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `precio` INT NOT NULL,
    `categoria_id` INT ,
    `imagen` VARCHAR(255) NULL,
    `talle` VARCHAR(255) NULL,
    `color` VARCHAR(255) NULL,
    FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE productos ADD producto_id VARCHAR(255);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT ,
    `nombre` VARCHAR (50) NOT NULL,
    `email` VARCHAR (100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `direccion` VARCHAR(50) NOT NULL,
    `pais` VARCHAR(50) NOT NULL,
    `telefono` INT NOT NULL,
    `tipo` VARCHAR(50) NOT NULL,
    `rol_id` INT,
    FOREIGN KEY (`rol_id`) REFERENCES `rols`(`id`),
    PRIMARY KEY(`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

DROP TABLE IF EXISTS `productocarritos`;
CREATE TABLE `productocarritos`(
    `id` INT AUTO_INCREMENT,
    `cantidad` INT ,
    `productos_id` INT ,
    `user_id` INT ,
    FOREIGN KEY (`productos_id`) REFERENCES `productos`(`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



