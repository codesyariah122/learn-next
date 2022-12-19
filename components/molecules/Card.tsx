import {Vector} from '@/components/index'

type dataPrayer = {
    name: string,
    time: string
}
const Card = (props: any) => {
    return (
        <>
            {
                props.prayers && (
                    props.prayers.map((e: dataPrayer, i: number) => (
                        <div key={i} className="place-self-center">
                            <div className="m-4 mr-0 my-12 rounded-lg bg-white py-4 px-8 shadow-2xl hover:shadow-slate-600 h-24 cursor-pointer">
                                <div className="flex justify-center place-content-center">
                                    <Vector name="network"/>
                                </div>
                                <div className="grid grid-cols-1 justify-center">
                                    <div className="col-span-full">
                                        {/* Place timings */}
                                        {e.name} : {e.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default Card