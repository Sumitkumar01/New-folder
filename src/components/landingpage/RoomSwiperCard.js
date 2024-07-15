import Image from 'next/image'
import React from 'react'

const RoomSwiperCard = ({ roomData }) => {
    return (
        <div className='rounded-lg overflow-hidden bg-[#D5D5D5] min-h-[470px] h-[470px] '>
            <div className=''>
                <Image src={roomData.image} alt='roomImage' className='' />

            </div>
            <div className='flex flex-col gap-2 p-3 md:p-4 text-center'>
                <h1 className='text-[#29422C] text-[32px] text-center font-medium'>
                    {roomData.roomName}
                </h1>
                <p className='text-[18px]'>
                    {roomData.description}
                </p>
            </div>

        </div>
    )
}

export default RoomSwiperCard