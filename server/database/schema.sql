CREATE TABLE station (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nom_station VARCHAR(80),
  x_longitude FLOAT NOT NULL,
  y_latitude FLOAT NOT NULL,
  nbre_Wires INT,
  acces_recharge BOOLEAN,
  accessibilite_jours VARCHAR(3),
  accessibilite_heures VARCHAR(5),
  puiss_MAX DECIMAL,
  type_Wire VARCHAR(50)
);

CREATE TABLE bornes (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  station_id INT UNSIGNED NOT NULL,
  available BOOLEAN NOT NULL,
  CONSTRAINT fk_station FOREIGN KEY (station_id) REFERENCES station(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
