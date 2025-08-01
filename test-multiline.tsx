import React, { useState, useEffect } from 'react';

// @dev: This is a multi-line comment block
// that spans multiple lines
// and includes various comment formats
/* 
 * This is a block comment
 * that continues the multi-line comment
 */
// This line is also part of the comment block
// until we reach the function declaration

function MyComponent() {
  const [count, setCount] = useState(0);

  // @dev: Another multi-line comment
  // explaining the useEffect hook
  // and its dependencies
  // This comment block will be hidden
  // as a single unit
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

// [comment hidden - yct:G8DT_B]
  const handleClick = () => {
    setCount(count + 1);
  };

  // @dev: Complex multi-line comment
  // with different comment styles
  /*
   * This is a block comment
   * that continues the explanation
   */
  // More single-line comments
  // that are part of the same block
  // until we reach the return statement
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Regular comment that should NOT be hidden
const regularComment = 'This is not hidden';

export default MyComponent; 