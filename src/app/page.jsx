import CardOhabolana from "@/components/CardOhabolana";
import Filter from "@/components/Filter";
import { getPostFiltre } from "@/lib/data";

const Home = async ({searchParams}) => {

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  const region = typeof searchParams.region === 'string' ? searchParams.region : undefined
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  
  const posts = await getPostFiltre({search, region, category})

  return (
    <div>
      <Filter />
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 min-h-[400px] pt-6 pb-20'>
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
    </div>
  )
}
export default Home
