CREATE TABLE user_account (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    hashed_password VARCHAR(50) NOT NULL
);

INSERT INTO user_account (id_user, firstname, lastname, email, hashed_password)
VALUES
(1, "Oliver", "Pepette", "oliver@pepette.com", "123456");


CREATE TABLE station (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  id_station VARCHAR(100),
  n_station VARCHAR(100),
  ad_station VARCHAR(150),
  xlongitude FLOAT,
  ylatitude FLOAT,
  nbre_pdc INT,
  acces_recharge VARCHAR(100),
  accessibilite VARCHAR(50),
  puiss_max DECIMAL,
  type_prise VARCHAR(50)
);

CREATE TABLE bornes (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  id_station VARCHAR(100),
  station_id INT UNSIGNED NOT NULL,
  available BOOLEAN NOT NULL,
  CONSTRAINT fk_station FOREIGN KEY (station_id) REFERENCES station(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
   INSERT INTO station (id_station, n_station, ad_station, xlongitude, ylatitude, nbre_pdc, acces_recharge, accessibilite, puiss_max, type_prise) VALUES
  ('FR*SSD*PABVVRENAULT75012*1', 'ABVV Renault Paris 12', '15 Rue de Lyon 75012 Paris', 2.37445, 48.846004, 3, 'Gratuit', '24/24 7/7 jours', 22.00, 'T2'),
  ('FR*SSD*PABVVNISSAN33000*1', 'ABVV Nissan Bordeaux', '25 Cours de Verdun 33000 Bordeaux', -0.5664, 44.8378, 5, 'Payant', '08:00-22:00', 50.00, 'T2'),
  ('FR*SSD*PABVVPEUGEOT69002*1', 'ABVV Peugeot Lyon', '7 Place Carnot 69002 Lyon', 4.8292, 45.7512, 2, 'Gratuit', '24/24 7/7 jours', 11.00, 'T1'),
  ('FR*SSD*PABVVVOLVO13001*1', 'ABVV Volvo Marseille', '45 Boulevard Longchamp 13001 Marseille', 5.3887, 43.299, 6, 'Payant', '06:00-23:00', 100.00, 'CCS2'),
  ('FR*SSD*PABVVFIAT67000*1', 'ABVV Fiat Strasbourg', '12 Rue des Juifs 67000 Strasbourg', 7.7478, 48.5853, 4, 'Gratuit', '24/24 7/7 jours', 7.36, 'T2'),
  ('FR*SSD*PABVVFORD59000*1', 'ABVV Ford Lille', '98 Rue Nationale 59000 Lille', 3.0635, 50.62925, 3, 'Payant', '09:00-21:00', 22.00, 'T2'),
  ('FR*SSD*PABVVHONDA34000*1', 'ABVV Honda Montpellier', '33 Boulevard Gambetta 34000 Montpellier', 3.8749, 43.6115, 2, 'Gratuit', '24/24 7/7 jours', 50.00, 'T1'),
  ('FR*SSD*PABVVMERCEDES80000*1', 'ABVV Mercedes Amiens', '65 Rue des Jacobins 80000 Amiens', 2.2992, 49.8954, 4, 'Payant', '07:00-20:00', 22.00, 'CCS2'),
  ('FR*SSD*PABVVBMW31000*1', 'ABVV BMW Toulouse', '20 Allée des Demoiselles 31000 Toulouse', 1.4521, 43.6047, 8, 'Gratuit', '24/24 7/7 jours', 120.00, 'CHAdeMO');


  INSERT INTO bornes(station_id, id_station, available) VALUES
  (1, "FR*SSD*PABVVRENAULT75012*1", 1),
  (1, "FR*SSD*PABVVRENAULT75012*1", 0),
  (1, "FR*SSD*PABVVRENAULT75012*1", 1),

  (2,"FR*SSD*PABVVVOLVO13001*1*", 1),
  (2,"FR*SSD*PABVVVOLVO13001*1*", 1),
  (2,"FR*SSD*PABVVVOLVO13001*1*", 1),
  (2,"FR*SSD*PABVVVOLVO13001*1*", 1),
  (2,"FR*SSD*PABVVVOLVO13001*1*", 1),

  (3, "FR*SSD*PABVVPEUGEOT69002*1", 1),
  (3, "FR*SSD*PABVVPEUGEOT69002*1", 1),

  (4, "FR*SSD*PABVVVOLVO13001*1", 1),
  (4, "FR*SSD*PABVVVOLVO13001*1", 1),
  (4, "FR*SSD*PABVVVOLVO13001*1", 1),
  (4, "FR*SSD*PABVVVOLVO13001*1", 1),
  (4, "FR*SSD*PABVVVOLVO13001*1", 1),
  (4, "FR*SSD*PABVVVOLVO13001*1", 1),

  (5,"FR*SSD*PABVVFIAT67000*1", 0 ),
  (5,"FR*SSD*PABVVFIAT67000*1", 0 ),
  (5,"FR*SSD*PABVVFIAT67000*1", 1 ),
  (5,"FR*SSD*PABVVFIAT67000*1", 1 ),

  (6, 'FR*SSD*PABVVFORD59000*1', 1),
  (6, 'FR*SSD*PABVVFORD59000*1', 1),
  (6, 'FR*SSD*PABVVFORD59000*1', 0),

  (7, 'FR*SSD*PABVVHONDA34000*1', 1),
  (7, 'FR*SSD*PABVVHONDA34000*1', 1),

  (8 ,'FR*SSD*PABVVMERCEDES80000*1',1),
  (8 ,'FR*SSD*PABVVMERCEDES80000*1',1),
  (8 ,'FR*SSD*PABVVMERCEDES80000*1',1),
  (8 ,'FR*SSD*PABVVMERCEDES80000*1',1),

  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1),
  (9, 'FR*SSD*PABVVBMW31000*1', 1);

