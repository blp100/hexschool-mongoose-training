
# HexSchool Assignment - Fourth Week

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

## what does users want?

- users could watch the new posts on the website
- users could write a new post

## what could developers do?

### backend 
- build up could GET posts and users information
- build up could POST a post by users

### frontend


1. setup enviroment
2. build up backend

### 開發流程
1. 設定環境 /４０分鐘
- 發現：express generates 選擇沒有預設網頁瀏覽，會多產生一些檔案
2. 沒有指定路徑的通用`app.use()`沒有正常運作 /２小時
- 耗費半個多小時找出原因。
- 原因：原來app.use作為middleware，一樣會按照javascript單執行緒的邏輯，如果前面的路徑已經被找到，後面就不會再次正常運作了。

3. 動態讀取domain name／１.5小時
- 發現：利用chatGPT詢問製作方式，認為可以實作。卻因為需要函式實作在model裡，會破壞mvc規則而放棄
- 發現：但藉此知道mongoose還有個功能叫做virtuals
    - 可以藉此產生一份並不存在於mongoDB的資料，並且在產生資料的json時送出新增的資料規則
- 放棄實作的原因
    1. 之後可能將圖片儲存在第三方，到時候資料庫只會記憶url
    2. 前端詢問後端依然需要有domain name才可以運作，即便儲存在自己製作的後端，到時候再填入即可。

4. multer上傳圖片／1.5小時
- 有分本地端和伺服器暫存，我猜測這兩樣的選擇，是讓後端可以考量伺服器，看哪種選擇更好
- 研究mvc如何切分
- 圖片只能存在mongoDB或是第三方網站
    - 因Render沒有提供儲存空間，除非另外購買。

5. 後端 新增get a user /２０分鐘
6. 後端 取得所有文章，包含使用者資訊，使用populate／２０分鐘
    - 忘記在postModel替user加上referrence
    - 額外增加貼文時間順序