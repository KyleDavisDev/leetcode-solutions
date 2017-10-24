-- Author: Kyle Bonar
-- Github: github.com/KyleBonar

-- Description:
-- Write a SQL query to get the second highest salary from the Employee table.

-- Example:
-- Employee Table:
-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+

-- For example, given the above Employee table, the query should return 200 as
-- the second highest salary. If there is no second highest salary, then the 
-- query should return null.

-- Result:
-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+

-- --------------------------------------------------------

SELECT MAX(SALARY) AS SecondHighestSalary FROM Employee
WHERE SALARY<(SELECT MAX(SALARY) FROM Employee);
