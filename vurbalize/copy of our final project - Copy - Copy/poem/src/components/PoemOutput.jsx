// // // // // // import React from "react";
// // // // // // import styles from "./PoemOutput.module.css";

// // // // // // const PoemOutput = () => {
// // // // // //   return (
// // // // // //     <div className={styles.poemBox}>
// // // // // //       <h2>Your Generated Poem:</h2>
// // // // // //       <p className={styles.poemText}>
// // // // // //         [Your generated poem will appear here...]
// // // // // //       </p>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PoemOutput;

// // // // // import React from "react";
// // // // // import styles from "./PoemOutput.module.css";

// // // // // const PoemOutput = ({ poem }) => {
// // // // //   return (
// // // // //     <div className={styles.poemBox}>
// // // // //       <h2>Your Generated Poem:</h2>
// // // // //       <p className={styles.poemText}>
// // // // //         {poem || "[Your generated poem will appear here...]"}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PoemOutput;

// // // // import React from "react";
// // // // import styles from "./PoemOutput.module.css";

// // // // const PoemOutput = ({ poem }) => {
// // // //   return (
// // // //     <div className={styles.poemBox}>
// // // //       <h2>Your Generated Poem:</h2>
// // // //       <p
// // // //         className={styles.poemText}
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: poem || "[Your generated poem will appear here...]",
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PoemOutput;

// // // import React from "react";
// // // import styles from "./PoemOutput.module.css";

// // // const PoemOutput = ({ title, poem }) => {
// // //   return (
// // //     <div className={styles.poemBox}>
// // //       <h2>{title || "Your Generated Poem Title"}</h2>
// // //       <p className={styles.poemText}>
// // //         {poem || "[Your generated poem will appear here...]"}
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default PoemOutput;
// // import React from "react";
// // import styles from "./PoemOutput.module.css";

// // const PoemOutput = ({ poemData }) => {
// //   const { title, poem } = poemData;

// //   return (
// //     <div className={styles.poemBox}>
// //       <h2>{title || "Your Generated Poem Title"}</h2>
// //       <p className={styles.poemText}>{poem}</p>
// //     </div>
// //   );
// // };

// // export default PoemOutput;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import styles from "./PoemOutput.module.css";

// const PoemOutput = ({ poemData }) => {
//   const { title, poem } = poemData;
//   const [lines, setLines] = useState([]);
//   const [animationKey, setAnimationKey] = useState(0);

//   useEffect(() => {
//     if (poem) {
//       // Clear the lines before adding the new ones
//       setLines([]);
//       setAnimationKey((prevKey) => prevKey + 1); // Reset the animation

//       const newLines = poem.split("\n");

//       newLines.forEach((line, index) => {
//         setTimeout(() => {
//           setLines((prevLines) => [...prevLines, line]);
//         }, index * 500); // Adjust the timing as needed (500ms per line)
//       });
//     }
//   }, [poem]);

//   return (
//     <div className={styles.poemBox} key={animationKey}>
//       <h2>{title || "Your Generated Poem Title"}</h2>
//       <div className={styles.poemContainer}>
//         {lines.map((line, index) => (
//           <motion.p
//             key={index}
//             className={styles.poemText}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {line}
//           </motion.p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PoemOutput;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./PoemOutput.module.css";

const PoemOutput = ({ poemData }) => {
  const { title, poem } = poemData;
  const [lines, setLines] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (poem) {
      setLines([]);
      setAnimationKey((prevKey) => prevKey + 1); // Reset the animation

      const newLines = poem.split("\n"); // Split the poem into lines

      newLines.forEach((line, index) => {
        setTimeout(() => {
          setLines((prevLines) => [...prevLines, line]);
        }, index * 500); // Adjust the timing as needed (500ms per line)
      });
    }
  }, [poem]);

  return (
    <div className={styles.poemBox} key={animationKey}>
      <h2>{title || "Your Generated Poem Title"}</h2>
      <div className={styles.poemContainer}>
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className={styles.poemText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {line.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className={styles.word}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {word + " "}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default PoemOutput;
