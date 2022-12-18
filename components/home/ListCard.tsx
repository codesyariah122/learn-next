import {useState, useEffect} from 'react'
import { Vector } from "@/components/index"
import { useGeoLocator, usePrayerTime } from "@/hooks/index"

const ListCard = (props: any) => {
    const {data: locators, isLoading} = useGeoLocator()
    const country = locators && locators ? locators.country_name : ''
    const city = locators && locators ? locators.city : ''

    const params = {
        country: country ? country : '',
        city: city ? city : '',
        time: 'day'
    }

    const {data: prayers, isLoading: isLoadingPrayer} = usePrayerTime(params)

    const timings = prayers && (prayers.data.map((item: any) => item.timings))


    return (
        <div className="grid grid-cols-4 gap-x-2 mt-24 w-8/12 md:ml-40 ml-0">
            {
                isLoadingPrayer && (
                    <div className="col-span-full place-content-center md:-mt-24">
                        <h1 className='text-3xl font-bold text-red-600'>
                            Loading ....
                        </h1>
                    </div>
                )
            }
            <div className="col-span-full place-content-center">
                <h1 className="text-2xl font-bold">
                    {
                        prayers && (
                            prayers.message
                        )
                    }
                </h1>
            </div>
            {
                prayers && (
                    timings.map((time: any) => (
                        <>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Imsak : {time.Imsak}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Fajr : {time.Fajr}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Dhuhr : {time.Dhuhr}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Asr : {time.Asr}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Maghrib : {time.Maghrib}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                    <div className="flex justify-center place-content-center">
                                        <Vector name="network"/>
                                    </div>
                                    <div className="grid grid-cols-1 justify-center">
                                        <div className="col-span-full">
                                            {/* Place timings */}
                                            Isha : {time.Isha}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                )
            }

        </div>
    )
}

export default ListCard