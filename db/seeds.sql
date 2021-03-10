INSERT INTO department (name)
VALUES
 ("engineering"),
 ("maintenance"),
 ("demo"),
 ("HR");

INSERT INTO role (title, salary, department_id )
VALUES
 ("Senior", "90", "364"),
 ("Junior", "5", "384"),
 ("Trash Guy", "30", "3"),
 ("Manager", "900", "4");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ("billy", "bob", "45", "89"),
 ("gary", "guy", "78", "84"),
 ("kyle", "kirby", "4", "8"),
 ("sally", "bill", "12", "6");