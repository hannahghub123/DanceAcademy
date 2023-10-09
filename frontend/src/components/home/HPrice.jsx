import React from 'react'
import Heading from '../common/heading/Heading'
import PriceCard from '../pricing/PriceCard'

const HPrice = () => {
  return (
    <>
        <scetion className="hprice padding">
        <Heading subtitle='our pricing' title='pricing & packages' />
            <div className="price container grid">
                <PriceCard/>
            </div>
        </scetion>
    </>
  )
}

export default HPrice