type Props = {
  promise: Promise<Post[]>
}

import React from 'react'

const UserPosts = async ({ promise } : Props) => {
  const posts = await promise
  
  const content = posts.map(post => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    )
  })

  return content
}

export default UserPosts