-- Author: Kyle Davis
-- Github: github.com/KyleBonar

-- Description:
-- There is a table courses with columns: student and class
-- Please list out all classes which have more than or equal to 5 students.

-- Example:
-- +---------+------------+
-- | student | class      |
-- +---------+------------+
-- | A       | Math       |
-- | B       | English    |
-- | C       | Math       |
-- | D       | Biology    |
-- | E       | Math       |
-- | F       | Computer   |
-- | G       | Math       |
-- | H       | Math       |
-- | I       | Math       |
-- +---------+------------+

-- Result:
-- +---------+
-- | class   |
-- +---------+
-- | Math    |
-- +---------+

-- Note:
-- The students should not be counted duplicate in each course.

-- --------------------------------------------------------

SELECT
    class
FROM
    courses
GROUP BY
    class
HAVING
    COUNT(DISTINCT student) > 4;
