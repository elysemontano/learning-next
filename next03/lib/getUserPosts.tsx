const getUserPosts = async (userId: string) => {


  // ISR: Incremental static regeneration
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 }})
  // Check the data and wait for 60 seconds before checking if there is new data

  if(!res.ok) undefined

  return res.json()
}

export default getUserPosts