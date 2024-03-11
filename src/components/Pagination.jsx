"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Pagination = ({count}) => {

  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page < 2) {
        router.push(`/`);
    }else{
        router.push(`/?page=${page}`);
    }
  }, [page]);

  const ITEM_PER_PAGE = 9
  const NbrPage = Math.ceil(count / ITEM_PER_PAGE)
  const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page)-1) + ITEM_PER_PAGE < count

  return (
    <div className='container py-6'>
        { NbrPage < 2 ? 
            <div></div>
            :
            <nav className="flex justify-center">
                <div className="flex items-center text-xs sm:text-sm font-semibold divide-x divide-indigo-700 border border-indigo-700 rounded-md">
                    <button
                        className={`${ hasPrev ? "text-indigo-700" : "text-gray-400"} px-3 py-1`}
                        onClick={() => setPage(page - 1)}
                        disabled={!hasPrev}
                    >
                        Prev
                    </button>
                    {[...Array(NbrPage)].map((_, index) => {
                        return(
                            <div 
                                key={index}
                                className={`${ page == index + 1 ? "bg-indigo-700 text-white" : "text-indigo-700"} px-3 py-1 cursor-pointer`}
                                onClick={() => setPage(index + 1)}
                            >
                                {index + 1}
                            </div>
                        )
                    })}
                    <button
                        className={`${ hasNext ? "text-indigo-700" : "text-gray-400"} px-3 py-1`}
                        onClick={() => setPage(page + 1)}
                        disabled={!hasNext}
                    >
                        Next
                    </button>
                </div>
            </nav>
        }
    </div>
  )
}

export default Pagination