# Debug Rubric

## What's the goal of Debug?
On the job, very often a ticket will break a *different* feature. The only explanation they have to go on is business knowledge and existing tests. That's why we briefly explain the current feature, but really, the student needs to read the tests.

The goal of this assignment is for the student to incorporate debugging practices into the new "Has Many" flow. The errors are:

- the feedCats() method broken
  - it isn't filtering for hungry cats, so the incrementor goes up too much

- the cats() method is broken
  - it's using the wrong id
  - It's using = instead of === (Which reassigns cats weirdly)

## Score
There are 3 possible points, and it's a relatively simple problem, so it's a 1:1 for the score.

## Feedback
- Watch for the students actually following the errors (the tests will not run at all to begin with).
- Did the students read the tests to see that we *shouldn't* feed fed cats again?
- Did they understand why = instead of === wasn't throwing an error?