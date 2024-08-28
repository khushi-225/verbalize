// // // // // // import React from "react";
// // // // // // import styles from "./EmotionsAnimation.module.css";

// // // // // // const EmotionsAnimation = () => {
// // // // // //   return (
// // // // // //     <div className={styles.animationContainer}>
// // // // // //       {/* Placeholder for animations */}
// // // // // //       <p className={styles.placeholderText}>Emotions Animation Here</p>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EmotionsAnimation;

// // // // // import React from "react";
// // // // // import styles from "./EmotionsAnimation.module.css";

// // // // // const EmotionsAnimation = ({ percentagesArray }) => {
// // // // //   return (
// // // // //     <div className={styles.animationContainer}>
// // // // //       {/* Placeholder for animations */}
// // // // //       <p className={styles.placeholderText}>
// // // // //         Emotions Animation Here {percentagesArray[1]}
// // // // //       </p>
// // // // //       {/* Use percentagesArray for animations */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EmotionsAnimation;

// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import styles from "./EmotionsAnimation.module.css";

// // // // const EmotionsAnimation = ({ percentagesArray }) => {
// // // //   // Find the index with the highest value between 0 and 4
// // // //   const maxIndex = percentagesArray
// // // //     .slice(0, 5)
// // // //     .indexOf(Math.max(...percentagesArray.slice(0, 5)));

// // // //   // Define animations for each emotion
// // // //   const animations = {
// // // //     0: {
// // // //       animate: { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] },
// // // //       transition: { duration: 1, repeat: Infinity },
// // // //       content: "😊",
// // // //     },
// // // //     1: {
// // // //       animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
// // // //       transition: { duration: 1, repeat: Infinity },
// // // //       content: "😢",
// // // //     },
// // // //     2: {
// // // //       animate: {
// // // //         scale: [1, 1.5, 1],
// // // //         backgroundColor: ["#fff", "#f00", "#fff"],
// // // //       },
// // // //       transition: { duration: 1, repeat: Infinity },
// // // //       content: "😡",
// // // //     },
// // // //     3: {
// // // //       animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
// // // //       transition: { duration: 1, repeat: Infinity },
// // // //       content: "😨",
// // // //     },
// // // //     4: {
// // // //       animate: { rotate: [0, 180, 0], scale: [1, 0.8, 1] },
// // // //       transition: { duration: 1, repeat: Infinity },
// // // //       content: "🤢",
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div className={styles.animationContainer}>
// // // //       {percentagesArray.length > 0 && (
// // // //         <motion.div
// // // //           animate={animations[maxIndex].animate}
// // // //           transition={animations[maxIndex].transition}
// // // //           className={styles.animationContent}
// // // //         >
// // // //           {animations[maxIndex].content}
// // // //         </motion.div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmotionsAnimation;

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import styles from "./EmotionsAnimation.module.css";

// // // const EmotionsAnimation = ({ percentagesArray }) => {
// // //   // Find the index with the highest value between 0 and 5
// // //   const maxIndex = percentagesArray
// // //     .slice(0, 6)
// // //     .indexOf(Math.max(...percentagesArray.slice(0, 6)));

// // //   // Define animations for each emotion
// // //   const animations = {
// // //     0: {
// // //       animate: { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "😊", // Happiness
// // //     },
// // //     1: {
// // //       animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "😢", // Sadness
// // //     },
// // //     2: {
// // //       animate: {
// // //         scale: [1, 1.5, 1],
// // //         backgroundColor: ["#fff", "#f00", "#fff"],
// // //       },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "😡", // Anger
// // //     },
// // //     3: {
// // //       animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "😨", // Fear
// // //     },
// // //     4: {
// // //       animate: { rotate: [0, 360, 0], scale: [1, 0.8, 1] },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "😲", // Surprise
// // //     },
// // //     5: {
// // //       animate: { rotate: [0, 180, 0], scale: [1, 0.8, 1] },
// // //       transition: { duration: 1, repeat: Infinity },
// // //       content: "🤢", // Disgust
// // //     },
// // //   };

// // //   return (
// // //     <div className={styles.animationContainer}>
// // //       {percentagesArray.length > 0 && (
// // //         <motion.div
// // //           animate={animations[maxIndex].animate}
// // //           transition={animations[maxIndex].transition}
// // //           className={styles.animationContent}
// // //         >
// // //           {animations[maxIndex].content}
// // //         </motion.div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default EmotionsAnimation;

// // import React from "react";
// // import { motion } from "framer-motion";
// // import styles from "./EmotionsAnimation.module.css";

// // const EmotionsAnimation = ({ percentagesArray }) => {
// //   // Find the index with the highest value between 0 and 5
// //   const maxIndex = percentagesArray
// //     .slice(0, 6)
// //     .indexOf(Math.max(...percentagesArray.slice(0, 6)));

// //   // Define animations for each emotion
// //   const animations = {
// //     0: {
// //       animate: { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: (
// //         <picture>
// //           <source
// //             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.webp"
// //             type="image/webp"
// //           />
// //           <img
// //             src="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif"
// //             alt="☺"
// //             width="32"
// //             height="32"
// //           />
// //         </picture>
// //       ), // Happiness
// //     },
// //     1: {
// //       animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: "😢", // Sadness
// //     },
// //     2: {
// //       animate: {
// //         scale: [1, 1.5, 1],
// //         backgroundColor: ["#fff", "#f00", "#fff"],
// //       },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: "😡", // Anger
// //     },
// //     3: {
// //       animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: "😨", // Fear
// //     },
// //     4: {
// //       animate: { rotate: [0, 360, 0], scale: [1, 0.8, 1] },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: "😲", // Surprise
// //     },
// //     5: {
// //       animate: { rotate: [0, 180, 0], scale: [1, 0.8, 1] },
// //       transition: { duration: 1, repeat: Infinity },
// //       content: "🤢", // Disgust
// //     },
// //   };

// //   return (
// //     <div className={styles.animationContainer}>
// //       {percentagesArray.length > 0 && (
// //         <motion.div
// //           animate={animations[maxIndex].animate}
// //           transition={animations[maxIndex].transition}
// //           className={styles.animationContent}
// //         >
// //           {animations[maxIndex].content}
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default EmotionsAnimation;

// import React from "react";
// import { motion } from "framer-motion";
// import styles from "./EmotionsAnimation.module.css";

// const EmotionsAnimation = ({ percentagesArray }) => {
//   // Find the index with the highest value between 0 and 5
//   const maxIndex = percentagesArray
//     .slice(0, 6)
//     .indexOf(Math.max(...percentagesArray.slice(0, 6)));

//   // Define animations for each emotion
//   const animations = {
//     0: {
//       animate: { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif"
//             alt="☺"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Happiness
//     },
//     1: {
//       animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif"
//             alt="😞"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Sadness
//     },
//     2: {
//       animate: {
//         scale: [1, 1.5, 1],
//         backgroundColor: ["#fff", "#f00", "#fff"],
//       },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif"
//             alt="😡"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Anger
//     },
//     3: {
//       animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.gif"
//             alt="😨"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Fear
//     },
//     4: {
//       animate: { rotate: [0, 360, 0], scale: [1, 0.8, 1] },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif"
//             alt="🤯"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Surprise
//     },
//     5: {
//       animate: { rotate: [0, 180, 0], scale: [1, 0.8, 1] },
//       transition: { duration: 1, repeat: Infinity },
//       content: (
//         <picture>
//           <source
//             srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.webp"
//             type="image/webp"
//           />
//           <img
//             src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.gif"
//             alt="🤮"
//             width="64"
//             height="64"
//           />
//         </picture>
//       ), // Disgust
//     },
//   };

//   return (
//     <div className={styles.animationContainer}>
//       {percentagesArray.length > 0 && (
//         <motion.div
//           animate={animations[maxIndex].animate}
//           transition={animations[maxIndex].transition}
//           className={styles.animationContent}
//         >
//           {animations[maxIndex].content}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default EmotionsAnimation;

import React from "react";
import { motion } from "framer-motion";
import styles from "./EmotionsAnimation.module.css";

const EmotionsAnimation = ({ percentagesArray }) => {
  // Find the index with the highest value between 0 and 5
  const maxIndex = percentagesArray
    .slice(0, 6)
    .indexOf(Math.max(...percentagesArray.slice(0, 6)));

  // Define animations for each emotion
  const animations = {
    0: {
      animate: { scale: [1, 0.8, 1], rotate: [0, 10, -10, 0] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif"
            alt="☺"
            width="400"
            height="400"
          />
        </picture>
      ), // Happiness
    },
    1: {
      animate: { y: [0, -20, 0], opacity: [1, 0.5, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f61e/512.gif"
            alt="😞"
            width="400"
            height="400"
          />
        </picture>
      ), // Sadness
    },
    2: {
      animate: {
        scale: [1, 0.8, 1],
      },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif"
            alt="😡"
            width="400"
            height="400"
          />
        </picture>
      ), // Anger
    },

    3: {
      animate: { x: [-10, 10, -10], opacity: [1, 0.7, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f628/512.gif"
            alt="😨"
            width="400"
            height="400"
          />
        </picture>
      ), // Fear
    },
    4: {
      animate: { rotate: [0, 0, 0], scale: [1, 0.8, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif"
            alt="🤯"
            width="400"
            height="400"
          />
        </picture>
      ), // Surprise
    },
    5: {
      animate: { rotate: [0, 0, 0], scale: [1, 0.8, 1] },
      transition: { duration: 1, repeat: Infinity },
      content: (
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.gif"
            alt="🤮"
            width="400"
            height="400"
          />
        </picture>
      ), // Disgust
    },
  };

  return (
    <div className={styles.animationContainer}>
      {percentagesArray.length > 0 && (
        <motion.div
          animate={animations[maxIndex].animate}
          transition={animations[maxIndex].transition}
          className={styles.animationContent}
        >
          {animations[maxIndex].content}
        </motion.div>
      )}
    </div>
  );
};

export default EmotionsAnimation;
