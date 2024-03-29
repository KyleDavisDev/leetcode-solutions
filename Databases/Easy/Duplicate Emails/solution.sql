-- Author: Kyle Davis
-- Github: github.com/KyleBonar

-- Description:
-- Write a SQL query to find all duplicate emails in a table named Person.

-- Example:
-- Table: Person
-- +----+---------+
-- | Id | Email   |
-- +----+---------+
-- | 1  | a@b.com |
-- | 2  | c@d.com |
-- | 3  | a@b.com |
-- +----+---------+

-- For example, your query should return the following for the above table:

-- +---------+
-- | Email   |
-- +---------+
-- | a@b.com |
-- +---------+

-- --------------------------------------------------------

SELECT
    Email
FROM
    Person
GROUP BY
    Email
HAVING
    count(Email)>1
