CREATE DATABASE hospital_management;

USE hospital_management;

CREATE TABLE patients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    gender ENUM('Male', 'Female', 'Other'),
    contact VARCHAR(15),
    address VARCHAR(255),
    condition VARCHAR(255)
);

INSERT INTO patients (name, age, gender, contact, address, condition)
VALUES ('John Doe', 30, 'Male', '123-456-7890', '123 Street, City', 'Fever');
