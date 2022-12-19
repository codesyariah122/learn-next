import {useState, useEffect} from 'react'
import { Card } from "@/components/index"
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
        <div className="grid grid-cols-3 gap-x-2 mt-24 w-8/12 md:ml-40 ml-0">
            {
                isLoadingPrayer && (
                    <div className="col-span-full place-content-center md:mt-6 md:mb-12">
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
                            <Card prayers={[
                                {name: 'Imsak', time: time.Imsak},
                                {name: 'Subuh', time: time.Fajr},
                                {name: 'Dzuhur', time: time.Dhuhr},
                                {name: 'Ashar', time: time.Asr},
                                {name: 'Maghrib', time: time.Maghrib},
                                {name: 'Isya', time: time.Isha}
                            ]} />
                        </>
                    ))
                )
            }

        </div>
    )
}

export default ListCard