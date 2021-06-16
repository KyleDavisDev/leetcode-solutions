-- Author: Kyle Davis
-- Github: github.com/KyleBonar

-- Description:
-- Given a Weather table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

-- Example:
-- +---------+------------+------------------+
-- | Id(INT) | Date(DATE) | Temperature(INT) |
-- +---------+------------+------------------+
-- |       1 | 2015-01-01 |               10 |
-- |       2 | 2015-01-02 |               25 |
-- |       3 | 2015-01-03 |               20 |
-- |       4 | 2015-01-04 |               30 |
-- +---------+------------+------------------+

-- For example, return the following Ids for the above Weather table:

-- Result:
-- +----+
-- | Id |
-- +----+
-- |  2 |
-- |  4 |
-- +----+

-- --------------------------------------------------------

SELECT w1.Id
FROM Weather AS w1, Weather AS w2
WHERE w1.Temperature > w2.Temperature
    AND DATEDIFF(w1.Date, w2.Date)=1;
