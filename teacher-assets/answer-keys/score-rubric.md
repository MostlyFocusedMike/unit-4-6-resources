# Score Rubric

## Test scores
To get the the test scores, run the following commands in the `assignments` directory

```bash
npm test # in the future, a student hook will ensure this already ran
npm run scores
```

That will output the individual scores for each test section. This is just a prototype system, and is not yet very robust.

## Short answer scores
And there are 3 short questions, max 3 points each. To see the point value breakdown, check out the [short-answers-rubric.md](./short-answers-rubric.md)

For a total of 9 possible points.

## Calculating the scores
Add the test score total to the short answer total. Once you have that number, check below for the final spirit score.

    0 = 0
 1-10 = 1
10-20 = 2
20-25 = 3
25-30 = 4

## That's a lot of counting and math
Ideally we'll automate the whole thing soon!
