---
title: GraphQL là gì? Bắt đầu với GraphQL
date: 2024-08-28T17:00:00.000Z
status: published
---

Chào mọi người. Sau khi tìm hiểu về GraphQL, mình xin mạo muội chia sẻ chút kiến thức về nó cho mọi người cùng tiếp cận và cách sử dụng GraphQL như thế nào nhé.

# I. Giới thiệu về GraphQL

## 1.1 Tổng quan

GraphQL là ngôn ngữ thao tác và truy vấn dữ liệu nguồn mở cho API, cung cấp cho client 1 cách thức dễ dàng để request chính xác những gì họ cần, giúp việc phát triển API dễ dàng hơn theo thời gian. GraphQL được Facebook phát triển nội bộ vào năm 2012 trước khi phát hành công khai vào năm 2015.

GraphQL bao gồm 3 điểm đặc trưng bao gồm:

- Cho phép client xác định chính xác những dữ liệu gì họ cần
- GraphQL làm cho việc tổng hợp dữ liệu từ nhiều nguồn dễ dàng hơn
- Sử dụng một type system để khai báo dữ liệu.

![](</img/Screenshot 2024-08-30 at 10.58.50.png>)\
1.2 Trả về chính xác những gì bạn gửi request

---

- Khi bạn gửi 1 request GraphQL đến API của bạn, bạn sẽ nhận được chính xác những gì bạn yêu cầu trong request, không hơn không kém.
- Các truy vấn GraphQL luôn trả về kết quả có thể dự đoán được.
- Các ứng dụng sử dụng GraphQL rất nhanh và ổn định vì GraphQL kiểm soát dữ liệu mà nó nhận được chứ không phải máy chủ.

![](</img/Screenshot 2024-08-30 at 10.59.36.png>)\
1.3 Nhận nhiều dữ liệu trong một request duy nhất

---

- Các câu query GraphQL không chỉ có thể truy xuất các thuộc tính của một dữ liệu mà còn làm việc trơn tru với các đối tượng khác.
- Trong khi các API REST chúng ta hay dùng phải yêu cầu request từ nhiều URL thì API GraphQL lại có thể lấy tất cả dữ liệu mà ứng dụng của bạn cần trong một request duy nhất.
- Các ứng dụng sử dụng GraphQL có tốc độ xử lý rất nhanh ngay cả trên các kết nối chậm.

![](</img/Screenshot 2024-08-30 at 11.00.07.png>)\
1.4 Mô tả những gì có thể với một type system

---

- API GraphQL được tổ chức theo types và fields, truy cập toàn bộ dữ liệu của bạn từ một endpoint duy nhất.
- GraphQL sử dụng các types để đảm bảo ứng dụng của bạn chỉ request những gì có thể, ngoài ra GraphQL còn giải thích các lỗi 1 cách rất dễ hiểu.
- Ứng dụng của bạn có thể sử dụng các types để tránh viết code phân tích cú pháp thủ công.

![](</img/Screenshot 2024-08-30 at 11.00.41.png>)\
OK, như vậy sau 1 hồi đọc lý thuyết thì cũng cần phải có chút thực hành để rõ hơn các bạn nhỉ?

\
\
II. Bắt đầu với GraphQL:
========================

\
\
2.1 Chuẩn bị

---

Với GraphQL bạn có thể code bằng nhiều ngôn ngữ khác nhau, như: C# / .NET, Go, Java, PHP, Python, Ruby, Perl, ... Các bạn có thể tham khảo code demo tại đây: [https://graphql.org/code/](https://graphql.org/code/)

Trong bài này mình dùng NodeJS 10.15.1 để demo.

## 2.2 Khởi tạo project

Cách đơn giản nhất để chạy máy chủ API GraphQL là sử dụng module express (một khung ứng dụng web phổ biến cho Node.js). Bạn sẽ cần cài đặt thêm 2 package express-graphql, graphql.

- express: Chạy máy chủ web và thực hiện truy vấn trực tiếp với hàm graphql
- express-graphql: Gắn máy chủ API GraphQL trên endpoint HTTP /graphql
- graphql: Package để sử dụng API GraphQL

\\

Chạy command line:\
\\

```
npm init
npm install express express-graphql graphql --save

```

Hoặc tạo file package.json với nội dung:\\

```json
{
  "name": "graph_ql",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "express-graphql": "^0.11.0",
    "graphql": "^15.3.0"
  }
}
```

\
2.3 Tạo server

---

Tiếp đến tạo file server.js để chạy server:

```javascript
//Import các thư viện cần dùng
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// Xây dựng một Schema, sử dụng ngôn ngữ Schema GraphQL
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root cung cấp chức năng phân giải cho mỗi endpoint API
var root = {
  hello: () => {
    return "Hello world!";
  },
};

//Tạo server với express
var app = express();

//Khai báo API graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, //sử dụng công cụ GraphiQL để đưa ra các query GraphQL theo cách thủ công
  })
);

// Khởi tạo server tại port 4000
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
```

\
\
2.4 Start server

---

Sau khi đã tạo được file server, mình sẽ khởi chạy server node vừa tạo với command:\
\\

```fsharp
node server.js

```

![](</img/Screenshot 2024-08-30 at 11.04.54.png>)\\

## 2.5 Test

Nếu bạn truy cập trong trình duyệt web [http://localhost:4000/graphql](http://localhost:4000/graphql), bạn sẽ thấy một giao diện cho phép bạn nhập các truy vấn.

![](</img/Screenshot 2024-08-30 at 11.05.27.png>)\
GraphiQL là một công cụ tuyệt vời để debug và kiểm tra server, vì vậy mình khuyên bạn nên chạy nó bất cứ khi nào ứng dụng của bạn ở chế độ develop.

Như vậy, mình vừa test thử cho các bạn cách chạy máy chủ và sử dụng trên giao diện GraphiQL để đưa ra các truy vấn. Bước tiếp theo là tìm hiểu cách đưa ra các truy vấn GraphQL từ client.

GraphQL Clients

Thực hiện test curl trên command line:\
\\

```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql

```

Data response:\
\\

```json
{
  "data": {
    "hello": "Hello world!"
  }
}
```

\
![](</img/Screenshot 2024-08-30 at 11.06.34.png>)\
\
III. Tổng kết
=============

Ok, Như vậy dựa trên kiến thức của mình và các tài liệu tham khảo, mình đã giới thiệu tới các bạn về ngôn ngữ truy vấn GraphQL, có thể nói đây là 1 ngôn ngữ của tương lai theo mình với thời điểm hiện tại thì là như vậy!

Mong rằng sau bài viết này các bạn có thể tiếp cận được GraphQL 1 cách nhanh chóng và dễ dàng hơn...

Cảm ơn các bạn đã đọc bài viết của mình!

### Thao khảo

1. [https://graphql.org/](https://graphql.org/)
2. [https://topdev.vn/blog/graphql/](https://topdev.vn/blog/graphql/)
3. [https://www.bravebits.co/bat-dau-voi-graphql-api/](https://www.bravebits.co/bat-dau-voi-graphql-api/)
