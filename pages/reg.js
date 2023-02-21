
import {all} from "@/css/index.js"
import {mb} from "@/css/mb_main"
import {pc} from "@/css/pc_main"

import {motion} from "framer-motion"

import {useEffect, useState} from "react"


export default function Reg(){

    // useEffect(()=>{
    //     window.addEventListener('resize', ()=>{
    //         window.innerWidth
    //     })
    // }, [])

    // mb.search_bl_1.width = (mb.search_bl_m.width.slice(0, mb.search_bl_m.width.length - 2)/2 - 5) + "px"
    // mb.search_bl_2.width = (mb.search_bl_m.width.slice(0, mb.search_bl_m.width.length - 2)/2 - 5) + "px"

    // function unite(){
    //     while (mb.search_bl_1.height.slice(0, mb.search_bl_1.height.length - 2) > 21){
    //         setTimeout(() => {
    //             mb.search_bl_1.height = (parseInt(mb.search_bl_1.height.slice(0, mb.search_bl_1.height.length - 2)) - 0.1) + "px"
    //             console.log(mb.search_bl_1.height)
    //         }, 1000)
    //     }
    // }

    // mb.search_bl_1.height = (parseInt(mb.search_bl_1.height.slice(0, mb.search_bl_1.height.length - 2)) - 0.1) + "px"
    // console.log(mb.search_bl_1.height.slice(0, mb.search_bl_1.height.length - 2))

    // let q = "123456789"
    // console.log(q.slice(-4))

    let width_an = parseInt(mb.search_bl_m.width.slice(0, mb.search_bl_m.width.length - 2))
    console.log(width_an)
    mb.search_bl_1.width = width_an/2-5

    const [animation, setAnimation] = useState({height: 25})
    const animate = () => setAnimation(
        {height: [25, 15, 15, 25], 
         marginTop: [0, 5, 5, 0], 
         width: [width_an/2-5, width_an/2-5, width_an/2, width_an/2],
         borderTopRightRadius: [50, 50, 0, 0],
         borderBottomRightRadius: [50, 50, 0, 0]}
    )

    setTimeout(() => {
        animate()
    }, 10000)

    // let q = 0

    // let animation = useAnimationControls()

    // useEffect(()=>{
    //     animation.start(
    //         { height: [25, 15, 15, 25], 
    //           marginTop: [0, 5, 5, 0], 
    //           width: [width_an/2-5, width_an/2-5, width_an/2, width_an/2],
    //           borderTopRightRadius: [50, 50, 0, 0],
    //           borderBottomRightRadius: [50, 50, 0, 0]})
    // }, [q])

    // setTimeout(() => {
    //     animation.set(
    //         {height: [25, 15, 15, 25], 
    //          marginTop: [0, 5, 5, 0], 
    //          width: [width_an/2-5, width_an/2-5, width_an/2, width_an/2],
    //          borderTopRightRadius: [50, 50, 0, 0],
    //          borderBottomRightRadius: [50, 50, 0, 0]})
    // }, 5000)
    

    return(
        <>

            <div style={all.mobile_version}>
                <div style={mb.background}>
                    <div style={mb.header}>

                        <div style={mb.avatar_1}></div>

                        <div style={mb.search_bl_m}>

                            <motion.div style={mb.search_bl_1}
                                 animate={animation}
                                 transition={{duration: 5}}>
                                <input type="text" style={mb.inp.m1}></input>
                            </motion.div>

                            <div style={mb.search_bl_2}>
                                <input type="text" style={mb.inp.m2}></input>
                            </div>
                            <div style={mb.search_bl_3}>
                                <input type="text" style={mb.inp.main}></input>
                            </div>
                        </div>

                        <div style={mb.avatar_2}></div>

                    </div>
                    <button style={mb.btn}>Нажми на меня</button>
                </div>
            </div>

            <div style={all.pc_version}>
                <div style={pc.background}>
                    <div style={pc.header}>
                        <div className="avatar_my"></div>
                        <div className="search"></div>
                        <div className="avatar_someone"></div>
                    </div>
                    <button>Нажми на меня</button>
                </div>
            </div>

        </>
    )
}