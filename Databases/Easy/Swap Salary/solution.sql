-- Author: Kyle Davis
-- Github: github.com/KyleBonar

-- Description:
-- Given a table salary, such as the one below, that has m=male and
-- f=female values. Swap all f and m values (i.e., change all f
-- values to m and vice versa) with a single update query and no
-- intermediate temp table.

-- Example:
-- | id | name | sex | salary |
-- |----|------|-----|--------|
-- | 1  | A    | m   | 2500   |
-- | 2  | B    | f   | 1500   |
-- | 3  | C    | m   | 5500   |
-- | 4  | D    | f   | 500    |

-- Result:
-- | id | name | sex | salary |
-- |----|------|-----|--------|
-- | 1  | A    | f   | 2500   |
-- | 2  | B    | m   | 1500   |
-- | 3  | C    | f   | 5500   |
-- | 4  | D    | m   | 500    |

-- --------------------------------------------------------

UPDATE salary SET sex=( CASE WHEN sex='f' THEN 'm' ELSE 'f' END );
