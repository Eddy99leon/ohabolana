import React from 'react'
import CardSimulaire from './CardSimulaire'
import { getQuotesByCategory } from '@/lib/data'

const Simulaire = async ({post}) => {
    
    const quotes = await getQuotesByCategory(post?.category)
    const filteredQuotes = quotes.filter(quote => quote.id !== post.id);

    return (
        <div>
            <div className='space-y-4'>
                { filteredQuotes?.length == 0 ?
                    <div className='flex items-center justify-center min-h-[200px] border border-gray-300'>
                        <p className='text-gray-400 text-sm md:text-base font-medium text-center'>
                            Aucun Ohabolana
                            <br />simulaire.
                        </p>
                    </div>
                    :
                    filteredQuotes?.map((quote) => {
                        return <CardSimulaire key={quote?.id} quote={quote} />
                    })
                }
            </div>
        </div>
    )
}

export default Simulaire