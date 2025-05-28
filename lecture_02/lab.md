```sql
1. CREATE TABLE Employees
(
employee_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(100),
phone_number VARCHAR(20),
hire_date DATE,
job_title VARCHAR(50),
salary DECIMAL(10, 2),
manager_id INT,
department_id INT
  )

2. INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, hire_date,
                              job_title, salary, manager_id, department_id)
VALUES
(1, 'John', 'Smith', 'john.smith@example.com', '123-456-7890', '2018-01-15', 'Software Engineer', 6000.00, 3, 1),
(2, 'Jane', 'Doe', 'jane.doe@example.com', '987-654-3210', '2019-03-22', 'Project Manager', 7500.00, 3, 2),
(3, 'Emily', 'Jones', 'emily.jones@example.com', '555-555-5555', '2017-05-30', 'Director', 12000.00, NULL, 1),
(4, 'Michael', 'Brown', 'michael.brown@example.com', '111-222-3333', '2020-07-19', 'Business Analyst', 5500.00, 2, 3),
(5, 'Chris', 'Davis', 'chris.davis@example.com', '444-333-2222', '2016-11-10', 'Data Scientist', 7000.00, 2, 1),
(6, 'Patricia', 'Garcia', 'patricia.garcia@example.com', '333-444-5555', '2019-09-05', 'HR Specialist', 4800.00, 3, 2),
(7, 'Robert', 'Wilson', 'robert.wilson@example.com', '666-777-8888', '2021-04-25', 'Software Engineer', 6500.00, 1, 1),
(8, 'Linda', 'Martinez', 'linda.martinez@example.com', '999-000-1111', '2018-06-13', 'Software Engineer', 6200.00, 1, 3),
(9, 'Daniel', 'Taylor', 'daniel.taylor@example.com', '222-333-4444', '2015-08-30', 'Project Manager', 7800.00, 2, 3),
(10, 'Sophia', 'Anderson', 'sophia.anderson@example.com', '555-666-7777', '2020-02-18', 'Director', 12500.00, NULL, 2);

3. SELECT * FROM employees;

4. SELECT first_name, last_name FROM employees;

5. SELECT * FROM employees WHERE department_id = 5;

6. SELECT DISTINCT job_title FROM employees;

7. SELECT * FROM employees WHERE hire_date > '2020-01-01';

8. SELECT CONCAT(first_name, ' ', last_name) AS name, salary FROM employees;
    или
    SELECT first_name || ' ' || last_name AS name, salary FROM employees;

9. SELECT * FROM employees WHERE last_name LIKE '%son%';

10. SELECT department_id, count(*) FROM employees GROUP BY department_id;

11. SELECT department_id, AVG(salary) FROM employees GROUP BY department_id;

12. SELECT department_id, MIN(salary), MAX(salary) FROM employees GROUP BY department_id;

13. SELECT * FROM employees WHERE salary BETWEEN 4000 AND 6000;

15. SELECT * FROM employees WHERE manager_id is NULL;

16. SELECT * FROM employees ORDER BY last_name ASC;

17. SELECT * FROM employees ORDER BY salary DESC LIMIT 10;

18. SELECT * FROM employees WHERE EXTRACT(YEAR FROM hire_date) = 2019;
    или проще c between
    SELECT * FROM employees WHERE hire_date BETWEEN '2019-01-01' AND '2019-12-31';

19. SELECT job_title, count(*) AS employees_amount FROM employees GROUP BY job_title;

20. SELECT manager_id, COUNT(*) AS subordinate_count
    FROM employees
    WHERE manager_id IS NOT NULL
    GROUP BY manager_id;

21. Не совсем понял задание 

22. SELECT job_title, count(*) AS employees_number 
FROM employees 
GROUP BY job_title 
HAVING count(*) > 5;

23. SELECT AVG(salary) FROM employees WHERE manager_id = 3;

24. SELECT job_title, AVG(salary) FROM employees GROUP BY job_title;

25. SELECT * FROM employees WHERE department_id IN (1,3,5);

```
