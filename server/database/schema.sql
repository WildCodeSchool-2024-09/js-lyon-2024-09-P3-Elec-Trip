-- create table user (
--   id int unsigned primary key auto_increment not null,
--   email varchar(255) not null unique,
--   password varchar(255) not null
-- );

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );

-- insert into user(id, email, password)
-- values
--   (1, "jdoe@mail.com", "123456");

-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);


DROP DATABASE IF EXISTS elecdatabase;
CREATE DATABASE elecdatabase;
USE elecdatabase;


CREATE TABLE station (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nom_station VARCHAR(80),
  x_longitude FLOAT,
  y_latitude FLOAT,
  nbre_prises INT,
  acces_recharge BOOLEAN,
  accessibilite_jours VARCHAR(3),
  accessibilite_heures VARCHAR(5),
  puiss_MAX DECIMAL,
  type_prise VARCHAR(50)
);

CREATE TABLE bornes (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  station_id INT UNSIGNED NOT NULL,
  available BOOLEAN NOT NULL,
  CONSTRAINT fk_station FOREIGN KEY (station_id) REFERENCES station(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
