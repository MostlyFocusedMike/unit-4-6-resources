# Short Answers Rubric
These are some thinkers. In order to avoid GPT copy/pastes they are vaguer than the students are used to. Below I've provided a sample "correct" answer, an explanation of what you're looking for, as well as flags I noticed from asking GPT the question a few times.

For scoring, there are 3 tiers:

| Score | Name | Explanation |
| ----- | ---- | --------------------------------- |
| 0     | Did not attempt   | The answer was either blank, only a few words, or an incredibly obvious GPT job     |
| 1     | Attempted         | A true attempt was made, but it was totally wrong, just a total misunderstanding    |
| 2     | Partially Correct | They got at least something right, but mainly they showed coherent thought patterns |
| 3     | Totally Correct   | Clearly and completely understood the prompt, and grammar was not an issue          |

-------------------------------------------------------

## Question 1
If I gave you 3 classes: Doctor, Checkup, and Patient, how would you draw the "chicken feet" between the 3 entities? Explain your reasoning.

### SAMPLE ANSWER
I would put it so that the Checkup is the join between Doctor and Patient. So this: Doctor -< Checkup >- Patient. I did that because Doctor has a Many to Many relationship to Patient (and vice versa).

### ROUGH IDEA
However they can explain it the answer *must* be a many to many
  Doctor --< Checkup >-- Patient
You're looking for the "join" keyword as well. Not required, but it conveys they get the parent/child relationship.

### CHATGPT FLAGS:
- ChatGPT overly favors "has-one" relationships which we didn't discuss, and isn't correct
- It gives too many options, we did not ask for multiple (since there's only one real answer with the tools the students have)

-------------------------------------------------------

## Question 2
When filling out the classes in a Has Many/Belongs To relationship, which class do you like to start completing first? Why?

I actually start with sort of both? I like to set up the static attributes on each, then I move to the child. Reason being, the child doesn't need any parent methods to work, but the parent methods use the child methods as helpers.

### ROUGH IDEA
This is literally an opinion, there is no right answer. You are looking for thought applied to the order of work the particular student likes to do. Be on the look out for factually incorrect pieces of information though.

### CHATGPT FLAGS:
  - Incorrectly explaining that things are easier because the Parent has an array of children, and the child stores the parent object on itself. We *specifically* talked about how this is wrong
  - Talking about how you have to start with the parent to understand the relationship to the child. That...doesn't really make sense, as to know the parent, you already need to understand the relationship.

-------------------------------------------------------

## Question 3
Why are getter methods with ids so crucial to maintaining proper Source of Truth in our classes?

By always using getters that check the static array, we make sure that every call only uses the most up to date info. So if things are created or deleted properly, we'll pick them up every time. No stale info!

### ROUGH IDEA
We talked about the importance of always using getters to make sure that the information is always up to date in terms of deleting and creating new objects. They might also mention that it mimics the way real world DBs do it.

### CHATGPT FLAGS:
- Talking about copying and moving objects around. We did not talk about that and at this juncture, the students *can't* copy objects yet
- Overly explaining that IDs are used to identify instances of a class. That's true, but has nothing to do with source of truth.
- Overly referencing primary keys compared to UUIDs, we haven't talked about the differences and benefits of those.