CREATE TABLE tasks (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  status ENUM('completed', 'not completed') DEFAULT 'not completed',
  PRIMARY KEY (id)
);