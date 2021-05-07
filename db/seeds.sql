INSERT INTO department (name)
VALUES
 ("engineering"),
 ("maintenance"),
 ("demo"),
 ("HR");

INSERT INTO role (title, salary, department_id )
VALUES
 ("Engineer", "90", "1"),
 ("Junior", "5", "20"),
 ("Senior", "30", "3"),
 ("Manager", "80", "4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("billy", "bob", "1", "1"),
 ("gary", "guy", "2", "2"),
 ("kyle", "kirby", "3", "3"),
 ("sally", "bill", "4", "4");
