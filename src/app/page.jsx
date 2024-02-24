import CardOhabolana from "@/components/CardOhabolana";
import Filter from "@/components/Filter";
import { getPosts } from "@/lib/data";

const Home = async ({searchParams}) => {

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  const region = typeof searchParams.region === 'string' ? searchParams.region : undefined
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  
  const posts = await getPosts({search, region, category})

  return (
    <div>
      <Filter />
      <div className='container grid grid-cols-3 gap-6 pt-6 pb-20'>
        {posts.map((post) => {
          return <CardOhabolana post={post} key={post?.id} />
        })}
      </div>
    </div>
  )
}
export default Home
