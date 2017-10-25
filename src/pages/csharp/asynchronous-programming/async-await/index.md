---
title: async await
---

# async

Asyncrhonous methods must be marked as async and must return a task

```
async Task<ActionResult> Index()
{
  // code goes here
}
```

# await

Async methods must implement await on their body

```
async Task<Movies> GetMoviesByCategory(int categoryId)
{
  DBClient client = new DBClient();
  Task<Movies> movies = client.GetMoviesAsync(categoryId);
  DoExtraWork();
  
  return await movies;
}
```
