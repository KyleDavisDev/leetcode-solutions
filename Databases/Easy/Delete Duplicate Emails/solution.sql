-- Author: Kyle Bonar
-- Github: github.com/KyleBonar

-- Description:
-- Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
-- Example:
-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- | 3  | john@example.com |
-- +----+------------------+

-- For example, after running your query, the above Person table should have the following rows:

-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- +----+------------------+

-- --------------------------------------------------------

DELETE 
FROM Person
Where Id NOT IN (
    SELECT p.Id
    FROM (SELECT MIN(Id) AS Id FROM Person GROUP By Email) p
);
