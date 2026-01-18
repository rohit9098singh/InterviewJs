// Large-scale web app ko JavaScript se kaise optimize karoge taaki performance better ho? Loading time kam ho aur user interactions smooth rahen?
// Answer:

// Code Splitting & Lazy Loading:
// JavaScript ko chhote-chhote parts mein tod do, aur jo features abhi nahi chahiye unko baad mein load karo. 
// Jaise React mein dynamic imports use kar sakte hain. 
// Isse initial load fast hota hai.

// Debounce aur Throttle use karo:
// User input events jaise scroll, resize, ya typing mein debounce/throttle lagao, taaki unnecessary function calls na ho aur CPU par load kam pade.

// Minification aur Compression:
// JavaScript files ko minify karo (whitespace aur comments remove karo) aur server pe gzip ya brotli compression enable karo.
//  Yeh file size kam karta hai, toh loading jaldi hoti hai.

// Avoid Memory Leaks:
// Unused variables, event listeners, aur timers ko clean karo. Browser ki memory usage agar zyada hogi, toh app slow ho jayega.

// Use Web Workers:
// Heavy computation ko main thread se alag web worker mein run karwao, taaki UI block na ho aur interactions smooth rahen.

// Caching:
// Browser caching aur service workers use karo taaki repeated visits pe files reload na karne pade.

// Optimize DOM Manipulation:
// Frequent DOM changes slow kar dete hain. Virtual DOM ya batching updates karo.





// Responsive, accessible aur performant web app ke liye JavaScript optimization kaise karoge different browsers aur devices pe?
// Answer:

// Cross-browser Testing & Polyfills:
// Modern features har browser mein nahi hote. Polyfills use karo taaki app har browser pe sahi chale.

// Use Feature Detection:
// JavaScript mein check karo ki kaunse features available hain (if ('fetch' in window)), aur fallback implement karo.

// Avoid Heavy Libraries:
// Sirf zarurat ke libraries use karo, aur lightweight versions prefer karo taaki mobile devices pe bhi fast chale.

// Responsive Event Handling:
// Touch devices aur desktops ke liye alag event handling karo (touch events vs mouse events).

// Adaptive Loading:
// Device ki screen size aur network speed detect karke images aur scripts ko accordingly load karo (example: low-res images for slow network).

// Use Async & Defer:
// JavaScript files ko async ya defer attribute ke sath load karo taaki page rendering block na ho.



// Imagine you have a function that processes a large dataset asynchronously. The function uses a combination of setTimeout, fetch, and other async operations. What strategies would you use to optimize its performance and ensure that the user experience is smooth?


// Strategies to optimize:
// Batch Processing / Chunking
// Instead of processing the whole large dataset at once (which can block the UI), break it into smaller chunks and process each chunk asynchronously with setTimeout or requestIdleCallback. This prevents freezing the main thread.

// Debounce or Throttle Async Calls
// If multiple async calls happen rapidly (e.g., many fetches), debounce or throttle them to reduce the number of simultaneous requests and prevent server overload.

// Use Web Workers
// Offload heavy data processing to Web Workers to keep the main thread free for UI updates and user interactions.

// Cache Fetch Results
// Cache the results of fetch calls where possible, so repeat requests don’t hit the network unnecessarily.

// Lazy Load / On-Demand Fetching
// Fetch or process only the data you need immediately. Load additional data on user demand or scroll (infinite scroll).

// Progress Feedback
// Show a progress bar or spinner during processing, so the user knows something is happening and doesn’t think the app is frozen.

// Error Handling
// Gracefully handle errors in fetch or processing so the app doesn’t crash or hang.

// Use async/await for Readability
// Write async code with async/await to make it more manageable and avoid callback hell, which helps maintainability and debu