import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/index'

const Grid = () => {
  return (
    <section id = "about">
        <BentoGrid>
            {gridItems.map((item,i)=>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid
