import { motion } from "framer-motion"

const Transitions = (OriginComponent) => {
    // eslint-disable-next-line react/display-name
    return () => (
        <>
            <OriginComponent/>
            <motion.div
            className="slide-in"
            initial={{scaleY: 0}}
            animate={{scaleY: 0}}
            exit={{scaleY: 1}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            />
            <motion.div
            className="slide-out"
            initial={{scaleY: 1}}
            animate={{scaleY: 0}}
            exit={{scaleY: 0}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            />
        </>
    )
}

export default Transitions