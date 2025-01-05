{
  "PK": "WRITING#deploying-go-cli-to-npm",
  "SK": "METADATA#2024-08-07",
  "title": "Deploying a Go CLI to npm",
  "content": "Full content of the blog post...",
  "author": "Dave Dennis",
  "tags": ["Go", "CLI", "npm", "JavaScript"],
  "status": "published",
  "publishDate": "2024-08-07",
  "lastModified": "2024-08-07T14:30:00Z",
  "likes": 42,
  "views": 1337,
  "commentCount": 8,
  "readtime": 30
}

Description: This item represents a blog post, with the PK using the post's slug and the SK containing the publish date for easy sorting.

{
  "PK": "COMMENT#WRITING#deploying-go-cli-to-npm",
  "SK": "COMMENT#2024-08-07T15:45:00Z",
  "author": "Jane Doe",
  "content": "Great article! I've been looking for a way to distribute my Go tools to JS developers.",
  "status": "approved",
  "parentCommentId": null,
  "depth": 0,
  "likes": 5
}

Description: This item represents a top-level comment on a blog post. The PK includes the content type and ID, while the SK includes a timestamp for sorting.

{
  "PK": "COMMENT#WRITING#deploying-go-cli-to-npm",
  "SK": "COMMENT#2024-08-07T16:00:00Z#REPLY#2024-08-07T15:45:00Z",
  "author": "Dave Dennis",
  "content": "Thanks, Jane! I'm glad you found it helpful.",
  "status": "approved",
  "parentCommentId": "2024-08-07T15:45:00Z",
  "depth": 1,
  "likes": 2
}

Description: This item represents a nested comment (reply). The SK includes both the reply's timestamp and the parent comment's timestamp, allowing for efficient querying of comment threads.



-- Advanced comments

{
  "PK": "COMMENT#WRITING#deploying-go-cli-to-npm",
  "SK": "COMMENT#2024-08-07T15:45:00Z",
  "author": "Jane Doe",
  "content": "Great article! I've been looking for a way to distribute my Go tools to JS developers. Have you encountered any issues with cross-platform compatibility?",
  "status": "approved",
  "parentCommentId": null,
  "depth": 0,
  "likes": 5,
  "timestamp": "2024-08-07T15:45:00Z"
}

{
  "PK": "COMMENT#WRITING#deploying-go-cli-to-npm",
  "SK": "COMMENT#2024-08-07T16:00:00Z#REPLY#2024-08-07T15:45:00Z",
  "author": "Dave Dennis",
  "content": "Thanks, Jane! I'm glad you found it helpful. Regarding cross-platform compatibility, I did face some challenges, particularly with file paths on Windows. I solved this by using the 'path' module in Node.js to handle path separators correctly. Have you tried building for multiple platforms yet?",
  "status": "approved",
  "parentCommentId": "2024-08-07T15:45:00Z",
  "depth": 1,
  "likes": 3,
  "timestamp": "2024-08-07T16:00:00Z"
}

{
  "PK": "COMMENT#WRITING#deploying-go-cli-to-npm",
  "SK": "COMMENT#2024-08-07T16:30:00Z#REPLY#2024-08-07T16:00:00Z#2024-08-07T15:45:00Z",
  "author": "Jane Doe",
  "content": "That's a great tip about using the 'path' module! I haven't tried building for multiple platforms yet, but I'm planning to start soon. Did you use any specific Go libraries to help with cross-platform builds?",
  "status": "approved",
  "parentCommentId": "2024-08-07T16:00:00Z",
  "depth": 2,
  "likes": 1,
  "timestamp": "2024-08-07T16:30:00Z"
}

Explanation of the depth attribute:

The `depth` attribute represents the nesting level of a comment in the thread hierarchy. It's used to understand the structure of the conversation and can be helpful for rendering comments with proper indentation or visual hierarchy in the UI.

- `depth: 0` indicates a top-level comment directly on the blog post.
- `depth: 1` indicates a reply to a top-level comment.
- `depth: 2` indicates a reply to a reply, and so on.


The depth can theoretically go as deep as needed, but in practice, many systems limit the display depth to maintain readability (e.g., collapsing very deep threads or limiting nesting to 3-5 levels).

Key points about the comment structure:

1. The `PK` remains the same for all comments on a specific blog post, allowing for efficient retrieval of all comments for that post.
2. The `SK` becomes more complex with each level of nesting:

1. For top-level comments, it's simply the comment's timestamp.
2. For replies, it includes the reply's timestamp, followed by #REPLY# and the parent comment's timestamp.
3. For nested replies, it continues to append parent timestamps, creating a chain that represents the full path of the conversation.



3. The `parentCommentId` directly links a comment to its immediate parent, allowing for easy reconstruction of the comment thread structure.
4. The `timestamp` field is added to each comment for easier sorting and display purposes without having to parse the `SK`.
