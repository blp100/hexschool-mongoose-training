
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
Node.js NPM Integration with MongoDB

## Overview
This is a HexSchool assignment that utilizes MongoDB and Mongoose.

## Task Description
### Main Task
Design a `/posts` route similar to the todolist kata, and expand the fields to include those typically found in a post. You can refer to the recording of the second week's livestream for guidance.
    1. Upload to GitHub
    2. Provide POSTMAN
    3. Ignore config.env, do not include it on GitHub

Please connect to the MongoDB cloud atlas database. You can refer to the following video sections:
    - Connecting mongoose to a remote database
    - Using dotenv to add environment variables for enhanced security
    - Deploying to Render hosting platform

### Bonus Points
Please refer to this [example](https://github.com/gonsakon/nodeweek2-sample) and pull from the Model folder for design inspiration.

## Thinking Process
Initially, I thought I would struggle with connecting to MongoDB Atlas implemetation. So, I decided to tackle this task at first. Surprisingly, it turned out to be quite straightforward.

The other part of the project resembles the todolist, which I worked on during the first week. It just required some tweaking with Mongoose syntax. Thus, I did some online research and also double-checked with ChatGPT.

When I encountered an error handling issue with Mongoose Schema, I questioned why I needed to specify the type and requirements again since the schema already contains that information. It turns out, I was correct. Mongoose can utilize built-in validation, although additional validators are needed when working with arrays and objects.

## Conclusion
- Time spent: About 5.5 hours.
- Enjoyment level: Maybe a 5 out of 10?
- Learned about: Mongoose validation stack
- Reflection: Connecting to MongoDB was relatively straightforward, but I found the process of implementing Mongoose validation to be enjoyable.


1. 建立環境 ／１小時
2. 增加posts route ／１.5小時
- 增加posts路經的時候，一直找不到路徑
- 改變了__dirname的路徑方式，posts的路徑才變得正常
    - 懷疑可能是無法抓到正確的路徑
    - 改回來之後又正常了？總之不知道問題在哪裡
    - 猜測可能是server沒有重新啟動
    - 猜測正確，中途修改路徑並不會讓express快速重新啟動
    - 改用nodemon 就能夠正常重新啟動了
3. 撰寫controllers
4. 在route裡撰寫需要和controller溝通的路徑和request method
5. controllers裡面的id 需要修改