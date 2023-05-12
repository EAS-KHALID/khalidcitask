CREATE TABLE tasks (
  task_id INT NOT NULL AUTO_INCREMENT,
  task_name VARCHAR(255) NOT NULL,
  task_description TEXT,
  due_date DATE,
  status ENUM('completed', 'not completed') DEFAULT 'not completed',
  PRIMARY KEY (task_id)
);