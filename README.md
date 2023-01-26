# Lesson 4.6

Here are the [Google Slides for lesson 4.6](https://docs.google.com/presentation/d/1IHGu0AR7slfAJI1uCaRL0sxX5MFf6ITwrGUcIgCI5pc/edit#slide=id.g1fac2322971_0_317),
And the [lesson plan Google Doc](https://docs.google.com/presentation/d/1IHGu0AR7slfAJI1uCaRL0sxX5MFf6ITwrGUcIgCI5pc/edit#slide=id.g1fac2322971_0_317).

## Directory
- assignments/
  - This folder is what the students would actually see and clone down for their homework.
- code-examples/
  - This folder would be available on the general github, it features the default snippets from the presentation
- teacher assets/
  - answer-keys/
    - here are the completed code files from the assignments, as well as the explainer .md files
  - code-along-starters/
    - If a teacher wants to live code the examples from the presentation, here are some bare bones files to keep the trajectory going in the right way
  - images/
    - If the teacher wants to, they can take the assets from the presentation in their own

## FAQ
### Isn't this all a little...much?
Yes! It is. I do think that this lecture is too long. In the real world, it would be broken up more. The concepts are:

- Review of the four OOP Pillars
- Introduction of the concept of Associations
- Introduction to the concept of Source of Truth
- Introduction to Has Many Relationship
- Introduction to Many To Many Relationship
- Introduction "From Scratch," "Debug," and "Modify" Prompt formats

That's a lot. But the reasons are 1) They assets will likely be reused and more importantly 2) You can't learn the latter without the former in some cases. You really can't teach OOP design without relationships, and you can't teach relationships without Source of Truth. Also this is all code skills, but I'd love a lecture where we just talk design strategies, now that they have all the tools. Critical thinking skills over syntax. But we can't get there if they don't have the tools first.

I also think if this were for real the new formats would be introduced on their own, same with Source of Truth. And the review may or may not be necessary. But it was still fun to make everything! No regrets.

### Why is your assignment so different than the example?
I think as we move into this new AI driven future reading code is going to become *way* more important. So while we still have the "From Scratch" assignment that is traditional, the "Debug" and "Modify" seek to increase code reading comprehension.

Modify aims to throw the students into the middle of something and extend it. In this case, a new Many to Many relationship. They likely won't be super familiar with them, so in order to add the features we're asking them for, they'll have to really study the existing methods.

Debug aims to deliver a "real world" bug in a controlled situation. We know the solution, it's not a killer problem, and the tests *do* provide solutions. More talk on testing below, but there's never harm in emphasizing more test reading.

Both Modify and Debug are much closer to the real world. We don't often start from scratch at an existing company.

### The assignments are far less open ended
I think it would be a good idea to start moving in the direction of automation whenever we can. Grading seems like an excellent place to start. I think assessments will have to be pretty open ended for a few reasons, but this is just the introductory homework. By making the homework more fine grained we can compile and track reports much more easily. I've included the prototype test compiler here for you to look at. Ideally, our teachers will be able to use this output to see stuggling students at a glance and better prioritize resources.

I also want to try to decrease what I've termed "Useless flailing," where a problem set punishes the students who are already struggling past the brink. Relationships are a big concept to wrap one's head around, so I believe their first assignment after such a big lecture should do a decent amount of hand holding.

### You keep mentioning articles that don't exist
Yea, I just didn't have time to write them (and also they should wait for a better platform than my html/css one right now). But my dream is that for "foundational" lessons we'd provide the following:

- Comprehensive lecture slides ✅
- Info graphics ✅
- Edited and recorded full lecture
- Code samples ✅
- Explainer articles
- Explainer videos
- From Scratch, Debug, and Modify assessments ✅
- Bonus Challenges
- Vetted resources

I was slammed this week so wasn't able to work as much as I would like, but I think now that I've established some patterns for content creation, we can do more as we go. My idea is we can push the students harder if we truly know all the road blocks were removed. And it's hard to find good resources! Newer, less experienced students also have a harder time finding assets, which only creates a negative feedback loop.

### Your short answers are weird
I think this format of Homework is going to die very soon. ChatGPT can answer a truly astonishing number of questions. If you just want a straightforward definition, ChatGPT will crush it. Honestly, the questions I ask in this round are just on the *brink* beyond ChatGPT, and I'm sure they'd fall to the new ChatGPT4 model.

Also, they're slow as hell to grade honestly. You ask 4 questions to 25 students, that's 100 *highly technical* answers for 2 teachers to sift through. Obviously they are still helpful, but I think we should actively look for better ways to judge concept understanding as we look out for more scalable practices.
