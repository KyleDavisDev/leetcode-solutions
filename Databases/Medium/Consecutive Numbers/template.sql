-- Author: Kyle Bonar
-- Github: github.com/KyleBonar

-- Description:
-- Write a SQL query to find all numbers that appear at least three times consecutively.

-- Example:
-- +----+-----+
-- | Id | Num |
-- +----+-----+
-- | 1  |  1  |
-- | 2  |  1  |
-- | 3  |  1  |
-- | 4  |  2  |
-- | 5  |  1  |
-- | 6  |  2  |
-- | 7  |  2  |
-- +----+-----+

-- For example, given the above Logs table, 1 is the only number that appears consecutively for at least three times.

-- +-----------------+
-- | ConsecutiveNums |
-- +-----------------+
-- | 1               |
-- +-----------------+

-- --------------------------------------------------------

SELECT
    DISTINCT 
        p1.Num as ConsecutiveNums FROM Logs p1,
        Logs p2,
        Logs p3
WHERE
    p1.Id = p2.Id-1 AND
    p2.Id = p3.Id-1 AND
    p1.Num = p2.Num AND
    p2.Num = p3.Num