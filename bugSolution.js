```javascript
import React, { useState, useEffect } from 'react';

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);

  useEffect(() => {
    console.log('Counter mounted');
    return () => {
      console.log('Counter unmounted');
    };
  }, []);

  return { count, increment };
}

function MyComponent() {
  const { count, increment } = useCounter();
  useEffect(() => {
      console.log('Component mounted');
      return () => {
          console.log('Component unmounted');
      };
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default MyComponent;
```