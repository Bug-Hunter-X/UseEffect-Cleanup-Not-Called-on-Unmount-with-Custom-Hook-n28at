# React useEffect Cleanup Not Called on Unmount with Custom Hook

This repository demonstrates a subtle bug related to the cleanup function in React's `useEffect` hook when used within a custom hook.  The issue arises when certain conditions prevent the cleanup function from being executed properly during component unmount.  The example shows how this can happen and how to fix it.