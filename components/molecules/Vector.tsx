import Image from 'next/image'
import { Browser } from '@/assets/index'
import { LeafOne } from '@/assets/index'
import { LeafTwo } from '@/assets/index'
import { LeafThree } from '@/assets/index'
import { Mosque } from '@/assets/index'

const Vector = (props: any) => {
    const images = [props.name]
    return (
        <>
            {
                props.name === 'browser' ?
                <Image src={Browser} alt={props.name} width={props.width ? props.width : 20} height={props.height ? props.height : 20} /> :

                props.name === 'leaf-one' ?
                <Image src={LeafOne} alt={props.name}/> :
                
                // with className
                props.name === 'leaf-two' ?
                <Image src={LeafTwo} alt={props.name} className={props.className ? props.className : ''}/> :

                props.name === 'leaf-three' ?
                <Image src={LeafThree} className={props.className ? props.className : ''} alt={props.name} /> :

                props.name === 'mosque' ?
                <Image src={Mosque} className={props.className ? props.className : ''} alt={props.name}/>
                : null
            }
        </>
    )
}

export default Vector