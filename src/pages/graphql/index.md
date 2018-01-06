---
title: GraphQL
---

## GraphQL

### What is GraphQL

GraphQL is a query language and a server-side runtime that's developed by Facebook. It can be used to replace REST API, or work in conjunction with an existing REST API.

GraphQL isn't tied to any types of databases or storage engine. It can query your database using a `type` system that you define to describe how your data is structured.

The biggest difference between GraphQL and REST API is instead of using multiple endpoints to fetch multiple data, GraphQL uses a single endpoint to return any kind of data the client needs. This works because **in GraphQL the structure of the data that's returned isn't fixed or encoded in the server**. Instead, the client can define what data that's actually needed while sending the request.

### Types

#### Creating Type

You can define how your data is structured by using the `type` system. This is an example of how you can define how your user data structure.

```graphql
type User {
  id: Int!
  name: String!
}

type Post {
  title: String!
}
```
Above, we defined `User` type with two fields which are `id` and `name`, `Post` type with one field which is `title`. GraphQL uses the `!` symbol after the field type to define that the field is required.

#### Creating Types Relation

You can define a relation between multiple type easily by adding the type name into another type.

```graphql
type User {
  id: Int!
  name: String!
  posts: [Post!]!
}

type Post {
  author: User!
  title: String!
}
```

In the code snippet above, we defined a one to many relation between `User` and `Post` type. The `[]` is used to mark that the data will be an array.

### Schema
Basically a `schema` is a collection of GraphQL types. Other than the type that you defined yourself, there's also a special `root` types

```graphql
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

Those three `root` types are used as an entry points for the client request.

### Query
Let's say you want to enable the client to query the `user` data. First we need to define a `Query` type
```graphql
type Query {
  getUser: [User]
}
```

From the client side we only need to send this data to the graphql endpoint

```graphql
{
  getUser {
      name
      posts {
        title
      }
  }
}
```
Then it will return an array of user with name and post titles for each user.
```json
{
  "getUser" : [
    {
      "name": "John",
      "posts": [
        {
          "title": "hello world"
        }
      ]
    },
    {
      "name": "Jane",
      "posts": [
        {
          "title": "foo bar"
        },
        {
          "title": "foo bar baz"
        }
      ]
    }
  ]
}
```

We can also change what the response looks like by simply changing the query, let's say we only need the user without the post. The modified query will be like this

```graphql
{
  getUser {
      name
  }
}
```
The response you get will change to this

```json
{
  "getUser" : [
    {
      "name": "John",
    },
    {
      "name": "Jane",
    }
  ]
}
```
