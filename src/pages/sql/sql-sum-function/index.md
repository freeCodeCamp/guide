---
title: SQL Sum Function
---

## SQL Sum Function
This is one of the aggregate functions (as is count, average, max, min, etc.). They are used in a GROUP BY clause as it aggregates data presented by the SELECT FROM WHERE portion of the statement.

### Example of use
"sum(Total_$)" in the SELECT statement is aggregated in the GROUP BY clause. "Count(\*)" provides the number of contributions.

This data is from the campaign contributions data we've been using in some of these guides.

This SQL statement is answering the question: "which candidates received the largest total contribution dollars in 2016 BUT only those that had more than $20 Million USD for all contrabutions combined?"

Ordering this data set in a descending (DESC) order places the candidates with the largest total contributions at the top of the list.

```sql
SELECT Candidate, Election_year, sum(Total_$), count(*)
FROM combined_party_data
WHERE Election_year = 2016
GROUP BY Candidate, Election_year -- this tells the DBMS to summarize by these two columns
HAVING sum(Total_$) > 20000000  -- limits the rows presented from the summary of money ($20 Million USD)
ORDER BY sum(Total_$) DESC; -- orders the presented rows with the largest ones first.
```

```text
+--------------------------------------------------+---------------+-------------------+----------+
| Candidate                                        | Election_year | sum(Total_$)      | count(*) |
+--------------------------------------------------+---------------+-------------------+----------+
| CLINTON, HILLARY RODHAM & KAINE, TIMOTHY M (TIM) |          2016 | 568135094.4400003 |      126 |
| TRUMP, DONALD J & PENCE, MICHAEL R (MIKE)        |          2016 | 366853142.7899999 |      114 |
| SANDERS, BERNARD (BERNIE)                        |          2016 |      258562022.17 |      122 |
| CRUZ, RAFAEL EDWARD (TED)                        |          2016 | 93430700.29000005 |      104 |
| CARSON, BENJAMIN S (BEN)                         |          2016 | 62202411.12999996 |       93 |
| RUBIO, MARCO ANTONIO                             |          2016 |        44384313.9 |      106 |
| BUSH, JOHN ELLIS (JEB)                           |          2016 |       34606731.78 |       97 |
+--------------------------------------------------+---------------+-------------------+----------+
7 rows in set (0.01 sec)
```


As with all of these SQL things there is MUCH MORE to them than what's in this introductory guide.  

I hope this at least gives you enough to get started.  

Please see the manual for your database manager and have fun trying different options yourself.

