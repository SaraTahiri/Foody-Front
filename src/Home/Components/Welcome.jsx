import React from 'react'
import '../Css/orelega-one.css'
import { Button } from 'react-bootstrap'
import pizza from '../Images/image.png'


const Welcome = () => {
  return (
    <div>
      {/*Part one */}
      <div className="flex justify-between pl-32 pt-15 space-x-20">
            <div className="pt-20 flex flex-col max-w-[1666px] max-h-[1666px]">
                <div className=" basis-1/4 w-690 h-341 left-105 top-282 text-left">
                    <h1 className="font-lato font-extrabold text-6xl leading-tight text-black" style={{ fontFamily: 'Orelega One, cursive' }}>JUST COME TO FOODY & ORDER</h1>
                    <p className="font-lato font-semibold text-lg text-gray-600 mt-4">Here you will find the best food from the most beautiful food places delivered by the best people, to you with love!</p>
                    <div className="">
                        <Button variant="secondary" className=" font-semibold mt-6 ml-4 w-48 h-12 border-transparent rounded-full left-109 top-552 bg-lime-600">
                            Order Now
                        </Button>
                        <Button variant="outline-dark" className=" font-semibold mt-4 ml-4 w-48 h-12 rounded-full left-348 top-551">
                            Browse Menus
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-500 h-500 pt-10">
                <img src={pizza} alt="Image" className="w-3/4 h-3/4 rounded-xl" />
            </div>
        </div>
    </div>
  )
}

export default Welcome
