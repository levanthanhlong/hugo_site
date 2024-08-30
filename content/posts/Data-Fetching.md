---
title: Data Fetching
date: 2024-08-28T17:00:00.000Z
draft: false
---

## Introduction 11

With Tina, your content is stored in Git along with your codebase. Tina provides a Content API in front of your repo-based content, so that you can interact with your files as if they're in a database.

You can:

* Query content for a given collection222 
* Apply filters, sorting, pagination, etc1 ádfsadfsdfưqwe
* Query your content based on relational fields.12

To interface with the API, you can use Tina's type-safe client for dádfsdfata-fetc22hing, or 222 manually write custom GraphQL queries and hit the API yourself. 11112213

```javascript
// tina/config.{js,ts,tsx}
export default defineConfig({
  schema,
  token: '***',
  clientId: '***',
  branch: 'main',
})
```

When working locally, the client is built with the local url ([http://localhost:4001/graphql](http://localhost:4001/graphql)). When in [production mode](https://tina.io/docs/tina-cloud/#prod-mode), clientId, branch and token are used to query Tina Cloud.

Tina client provides a type-safe query builder, that is auto-generated based on your site's schema:\\

```javascript
import { client } from '../[pathToTina]/tina/__generated__/client'

const myPost = await client.queries.post({ relativePath: 'HelloWorld.md' })

console.log(myPost.data.title)
```

The above client.queries.post query is not built-in to Tina's API. This is an example of a query based on your defined schema, (where you have a "post" collection defined).

On a page that displays a list of posts, you can fetch the posts like so:\\

```javascript
const postsResponse = await client.queries.postConnection()
const posts = postsResponse.data.postConnection.edges.map((post) => {
  return { slug: post.node._sys.filename }
})
// This would return an array like: [ { slug: 'HelloWorld.md'}, /*...*/ ]
```

For more information on manually writing queries for your specific schema, check out our ["Writing Custom Queries"](https://tina.io/docs/data-fetching/custom-queries/#writing-inline-queries) docs.\
\\
