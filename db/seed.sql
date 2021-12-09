INSERT INTO departments (department_name)
VALUES ("Recieving"),
       ("Data Entry"),
       ("Production"),
       ("Inventory");
INSERT INTO roles (role_name, role_salary, role_department_id)
VALUES ("Reciever", 30000, 1),
       ("Data Entry Clerk", 34000, 2),
       ("Assembler", 37000, 3),
       ("Inventory Specialist", 37000, 4);
INSERT INTO employees (employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager)
VALUES ("Steve", "the Reciever", 1,1, "Sam Iam"),
       ("Linda", "The Data Entry Clerk", 2,2, "David Blain"),
       ("Peter", "Piper", 3,3, "David Blain"),
       ("Daniel", "Stark", 4,4, "Sam Iam");