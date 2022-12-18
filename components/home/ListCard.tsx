import { Vector } from "@/components/index"
import { useGeoLocator } from "@/hooks/useGeoLocator"

const ListCard = (props: any) => {
    const {data: locators, isLoading} = useGeoLocator()
    console.log(locators.ip)

    return (
        <div className="grid grid-cols-4 gap-x-2 content-center mt-24">
            <div>
                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-lg hover:shadow-sm h-20 cursor-pointer">
                    <div className="-mt-12 flex justify-center place-content-center">
                        <Vector name="browser"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-lg hover:shadow-sm h-20 cursor-pointer">
                    <div className="-mt-12 flex justify-center place-content-center">
                        <Vector name="browser"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-lg hover:shadow-sm h-20 cursor-pointer">
                    <div className="-mt-12 flex justify-center place-content-center">
                        <Vector name="browser"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-lg hover:shadow-sm h-20 cursor-pointer">
                    <div className="-mt-12 flex justify-center place-content-center">
                        <Vector name="browser"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCard