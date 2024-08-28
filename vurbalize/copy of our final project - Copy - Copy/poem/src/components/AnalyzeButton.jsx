// import React from "react";
// import styles from "./AnalyzeButton.module.css";

// function AnalyzeButton({ analyzePoem }) {
//   return (
//     <div className={styles.analyzeButtonContainer}>
//       <button className={styles.analyzeButton} onClick={analyzePoem}>
//         Analyze Poem
//       </button>
//     </div>
//   );
// }

// export default AnalyzeButton;

import React from "react";
import styles from "./AnalyzeButton.module.css";

function AnalyzeButton({ onClick }) {
  return <button className={styles.analyzeButton} onClick={onClick}></button>;
}

export default AnalyzeButton;
