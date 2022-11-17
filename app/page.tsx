async function getData() {
  const res = await(await fetch(`https://jsonplaceholder.typicode.com/posts`))
  return res.json()
} 

const Page = async () => {
  let data = await getData()
  return data.map((item: Data, i: number) => <div key={i}>{item.title}</div>)
}

export default Page

interface Data {
  id: number,
  title: string,
  body: string,
  userId: number
}


