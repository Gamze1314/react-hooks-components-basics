import React from "react";
import Article from "./Article";
import Comment from "./Comment";

// it will render the Article component first, then Comment which will return 2 div HTML elements
// App :  parent Children : Article and Comment 
function App() {
  return (
    <div>
      <Article />
      <Comment />
    </div>
  );
}

export default App;
