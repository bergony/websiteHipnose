CREATE TABLE users (
  userName VARCHAR(50),
  lastName VARCHAR(50),
  userAddress VARCHAR(100),
  city VARCHAR(50),
  zipCode VARCHAR(50),
  phone VARCHAR(50),
  email VARCHAR(50),
  boxCheck BOOLEAN
);

INSERT INTO users( userName, lastName, userAddress , city, zipCode, phone, email, boxCheck ) VALUES(
  "Maria",
  "Bandeira",
  "Emuas",
  "Natal",
  "59-149306",
  "(84)9-9173-6880",
  "Bergony@hotmail.com",
  false
);

SELECT * FROM users WHERE boxCheck = true;

DELETE FROM users WHERE userName = "Maria";

UPDATE users Set boxCheck = true WHERE userName = "Bergony";