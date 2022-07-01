import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

import { motion } from "framer-motion";

export default function Layout({ preview, children }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
