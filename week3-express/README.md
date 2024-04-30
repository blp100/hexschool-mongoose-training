
# HexSchool Assignment - Third Week

## Table of contents
- [Subject](#subject)
- [Overview](#overview)
- [Task Description](#task-description)
    - [Main Task](#main-task)
    - [Bonus Points](#bonus-points)
- [Thinking Process](#thinking-process)
- [Conclusion](#conclusion)

## Subject
Building a RESTful API with Node.js, Express, and MongoDB using MVC Architecture

## Overview
This HexSchool assignment focuses on utilizing MongoDB and Mongoose to build up the backend for the upcoming assignment.

## Task Description
### Main Task

- Rewrite the code from the second week into the express format.
- Routes: Manage the URL paths by splitting them into posts.js in the routes folder.
- Model: Split the post collections into the model folder and load them onto routes/posts.js.

## Thinking Process
At first, I thought the assignment would be similar to last week's, but with a focus on MVC architecture. However, I encountered confusion about what `express-generate` does. It took some time for me to realize its purpose, and then I added routes, which I thought would be easier than before. However, I encountered an issue when I added the router into the `app.js` file, and it didn't work as expected.

The truth is, it would have been easier if I had noticed that `npm start` only runs `node ./www/bin`, not `nodemon ./www/bin`, which means the server doesn't automatically restart every time a code file is saved. It felt like a silly oversight, similar to not realizing a computer isn't plugged in when it won't turn on.

Despite these challenges, I was able to quickly build up the controllers. I found it much easier to retrieve data from requests and made some refinements, such as distinguishing between the `post` and `posts` routes to improve functionality.

## Conclusion
- Time spent: About 4.5 hours.
- Enjoyment level: 6/10, despite encountering some issues.
- Learned about: MVC Architecture, Setting up API for frontend.
- Reflection: This assignment provided valuable learning opportunities, especially regarding MVC Architecture. Going forward, I'll be more diligent in checking each step to avoid encountering similar issues.