import CardOhabolana from "@/components/CardOhabolana";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import { getPostFiltre } from "@/lib/data";

const Home = async ({searchParams}) => {

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  const region = typeof searchParams.region === 'string' ? searchParams.region : undefined
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  const page = typeof searchParams.page === 'string' ? searchParams.page : undefined
  
  const {posts, count} = await getPostFiltre({search, region, category, page})

  return (
    <div>
      <Filter page={page} />
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 pt-6 pb-6'>
        { posts?.length === 0 ? 
            <div className="w-full h-full col-span-3 flex justify-center items-center">
              <div className="text-center text-base sm:text-xl md:text-2xl text-gray-400 font-semibold">
                Aucun ohabolana correspond à cette <br />description.
              </div>
            </div>
              : 
            posts?.map((post) => {
              return <CardOhabolana post={post} key={post?.id} />
            })
        }
      </div>
      <Pagination count={count} />
    </div>
  )
}
export default Home
