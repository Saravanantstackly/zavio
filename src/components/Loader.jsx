import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black tracking-tight text-black dark:text-white"
        >
          ZAVIO<span className="text-gray-400">.</span>
        </motion.div>

        <div className="mx-auto mt-6 h-1 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-black dark:bg-white"
          />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Feel the future...
        </p>

      </div>
    </div>
  );
}

export default Loader;