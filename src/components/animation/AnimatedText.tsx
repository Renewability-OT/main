import React, {useEffect, useRef} from 'react'
import {motion, useAnimation, useInView} from "framer-motion";

interface Props {
    text: string
    classNames: string
}

const AnimatedText: React.FC<Props> = ({text, classNames}) => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    const words = text.split(" ")
    const container = {
        hidden: {
            opacity: 0,
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                delay: .2,
                staggerChildren: 0.12,
                delayChildren: 0.04 * i,
            }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <motion.div ref={ref} style={{overflow: 'hidden', display: 'flex'}} variants={container} initial='hidden'
                    animate={controls}
                    className={classNames}>
            {words.map((word, index) => {
                return <motion.span variants={child} className='mr-[5px]' key={index}>{word}</motion.span>
            })}
        </motion.div>
    )
}

export default AnimatedText