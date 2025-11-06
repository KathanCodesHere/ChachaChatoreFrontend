import React from 'react'
import ScrollStack,{ScrollStackItem} from '../reactbits/ScrollStack'

const FeaturedP = () => {
  return (
        <ScrollStack>
            <ScrollStackItem className="bg-amber-50">
                <h2 className='text-white'>Card 1</h2>
                <p className='text-white'>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem className='bg-amber-300'>
                <h2 className='text-white'>Card 2</h2>
                <p className='text-white'>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2 className='text-white'>Card 3</h2>
                <p className='text-white'>This is the third card in the stack</p>
            </ScrollStackItem>
        </ScrollStack>
  )
}

export default FeaturedP