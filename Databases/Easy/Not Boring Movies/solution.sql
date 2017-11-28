-- Author: Kyle Bonar
-- Github: github.com/KyleBonar

-- Description:
-- X city opened a new cinema, many people would like to go to this cinema. 
--  The cinema also gives out a poster indicating the movies’ ratings 
-- and descriptions.

-- Please write a SQL query to output movies with an odd numbered ID 
-- and a description that is not 'boring'. Order the result by rating.

-- Example:
-- For example, table cinema:
-- +---------+-----------+--------------+-----------+
-- |   id    | movie     |  description |  rating   |
-- +---------+-----------+--------------+-----------+
-- |   1     | War       |   great 3D   |   8.9     |
-- |   2     | Science   |   fiction    |   8.5     |
-- |   3     | irish     |   boring     |   6.2     |
-- |   4     | Ice song  |   Fantacy    |   8.6     |
-- |   5     | House card|   Interesting|   9.1     |
-- +---------+-----------+--------------+-----------+

-- Result:
-- +---------+-----------+--------------+-----------+
-- |   id    | movie     |  description |  rating   |
-- +---------+-----------+--------------+-----------+
-- |   5     | House card|   Interesting|   9.1     |
-- |   1     | War       |   great 3D   |   8.9     |
-- +---------+-----------+--------------+-----------+

-- --------------------------------------------------------

SELECT id, movie, description, rating FROM cinema where id%2=1 AND description!="boring" ORDER BY rating DESC;
