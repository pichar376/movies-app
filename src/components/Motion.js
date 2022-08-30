import { motion, AnimatePresence } from "framer-motion"

const Motion = () => {
  return (
    <AnimatePresence>

      <div className="motion-styles">
        <h1>este es el elemento de FamerMotion</h1>
        <motion.div
          animate={{
            x: 0,
            backgroundColor: "#000",
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            position: "fixed",
            zIndex: "999",

            transitionEnd: {
              x: 100,
            },
          }}
        >hola mundo</motion.div >
        <motion.div layout style={{ borderRadius: 20 }} />
      </div>
    </AnimatePresence>
  );
}

export default Motion;