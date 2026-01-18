Below is a **clean, well-structured interview preparation guide** based exactly on the rounds you faced, rewritten into **proper interview questions with strong, realistic answers** suitable for a **~10 LPA Software Engineer II (Frontend / React)** expectation.

I have kept the answers **concise, technically sound, and experience-aligned**—not over-senior, not junior.

---

## Technical Round 1 – JavaScript, DSA, Browser Fundamentals

### 1. DSA – *Container With Most Water*

**Question:**
How would you solve the “Container With Most Water” problem efficiently?

**Answer:**
I would use a **two-pointer approach** instead of brute force.
Start with pointers at both ends, calculate the area, then move the pointer with the smaller height inward. This works because the width decreases each step, so increasing height is the only way to improve the area.
Time complexity is **O(n)** and space complexity is **O(1)**.

---

### 2. Stale Closures in JavaScript

**Question:**
What are stale closures and why are they problematic?

**Answer:**
A stale closure occurs when a function captures **outdated variables** from its lexical scope, commonly seen with `setTimeout`, event handlers, or React hooks.
This leads to bugs where the function operates on old state instead of the latest value.
In React, this is handled using **dependency arrays**, `useRef`, or functional state updates.

---

### 3. IIFE (Immediately Invoked Function Expression)

**Question:**
What is an IIFE and when would you use it?

**Answer:**
An IIFE is a function that runs immediately after being defined.
It was traditionally used to **create private scope**, avoid global pollution, and initialize logic once.
With ES6 modules, its usage has reduced, but it’s still useful for **isolated execution logic**.

---

### 4. JavaScript Event Loop

**Question:**
Explain how the JavaScript event loop works.

**Answer:**
JavaScript runs on a **single thread**.
Synchronous code executes first, then:

* Microtasks (Promises, `queueMicrotask`)
* Macrotasks (setTimeout, setInterval)

The event loop ensures non-blocking behavior by pushing async callbacks to queues and executing them when the call stack is empty.

---

### 5. API Retry & Cancellation

**Question:**
How would you implement retry logic and cancel old API calls?

**Answer:**

* Retry: Use **exponential backoff** with a retry counter.
* Cancellation: Use **AbortController** to cancel previous requests when a new request is triggered, especially for search inputs.

This prevents race conditions and improves performance.

---

### 6. Polyfill for `Array.prototype.filter`

**Question:**
How would you write a polyfill for `filter()`?

**Answer:**
Loop over the array, apply the callback on each element, and push matching elements into a new array.
Also ensure correct `thisArg` handling and sparse array checks.

---

### 7. Web Storage

**Question:**
Difference between LocalStorage, SessionStorage, and IndexedDB?

**Answer:**

* **LocalStorage**: Persistent, synchronous, small data
* **SessionStorage**: Per-tab lifetime
* **IndexedDB**: Asynchronous, large structured data, suitable for offline and caching

---

### 8. `async` vs `defer`

**Question:**
Difference between `async` and `defer`?

**Answer:**

* `async`: Executes as soon as downloaded, may block DOM execution
* `defer`: Executes after HTML parsing, preserves order

For predictable rendering, `defer` is generally preferred.

---

### 9. Event Delegation

**Question:**
What is event delegation and why is it useful?

**Answer:**
Event delegation attaches a single event listener to a parent element instead of multiple children.
It improves performance and handles dynamically added elements effectively.

---

### 10. Debouncing vs Throttling

**Question:**
Explain debouncing and throttling with use cases.

**Answer:**

* **Debouncing**: Executes after user stops typing (search input)
* **Throttling**: Executes at fixed intervals (scroll, resize)

---

## Technical Round 2 – React & Advanced JavaScript

### 11. Browser Rendering Process

**Question:**
How does the browser render a web page?

**Answer:**
HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
Layout → Paint → Composite

JS execution can block rendering if not optimized.

---

### 12. JSON Object Transformation

**Question:**
Convert flat keys into nested objects.

**Answer:**
Split keys by `_`, iterate recursively, and build nested objects dynamically.
This demonstrates strong object manipulation and immutability handling.

---

### 13. Error Boundaries

**Question:**
What are Error Boundaries in React?

**Answer:**
Error Boundaries catch runtime errors in the component tree and prevent the entire app from crashing.
They improve resilience by showing fallback UIs and logging errors.

---

### 14. `useEffect` vs `useLayoutEffect`

**Question:**
Difference between `useEffect` and `useLayoutEffect`?

**Answer:**

* `useEffect`: Runs after paint, non-blocking
* `useLayoutEffect`: Runs before paint, blocks rendering

Use `useLayoutEffect` only for DOM measurements.

---

### 15. React Coding Exercise (Tabs + Search)

**Expected Design Approach:**

* Component-level state isolation per tab
* Debounced search using `useCallback`
* Memoized filtered results using `useMemo`
* Avoid unnecessary re-renders
* Controlled inputs

This shows **performance awareness**, not just functionality.

---

## Techno-Managerial Round – Architecture & Behavioral

### 16. Complex Project Explanation

**Question:**
Describe the most complex React project you worked on.

**Answer:**
I worked on a data-driven dashboard handling large datasets with real-time updates.
I owned component architecture, state management, performance optimizations, and API integration.

---

### 17. Redesign Decisions

**Question:**
What would you change if you redesigned it today?

**Answer:**
I would modularize features more cleanly, introduce better caching, and improve observability with structured logging and error tracking.

---

### 18. Large-Scale React Architecture

**Question:**
How do you structure a large React app?

**Answer:**
Feature-based folders:

* `features/`
* `shared/`
* `hooks/`
* `services/`
* `utils/`

This scales better than component-only structures.

---

### 19. Rendering Thousands of Rows

**Question:**
How would you optimize rendering large financial tables?

**Answer:**

* Windowing/virtualization (e.g., react-window)
* Memoization
* Pagination or lazy loading
* Avoid unnecessary re-renders

---

### 20. Error Handling & Retries

**Question:**
How do you handle partial failures?

**Answer:**

* Graceful fallbacks
* Retry with backoff
* Skeleton loaders
* Clear user messaging

This improves reliability and UX.

---

### 21. Accessibility (WCAG)

**Question:**
How do you ensure accessibility?

**Answer:**

* Semantic HTML
* ARIA roles only when needed
* Keyboard navigation
* Color contrast
* Screen reader testing

---

### 22. Why JPMorganChase?

**Answer:**
JPMorganChase builds **large-scale, mission-critical systems** where performance, security, and reliability matter.
This aligns with my interest in building high-impact frontend systems with strong engineering standards.

---

### 23. Conflict Handling

**Question:**
How do you handle team conflicts?

**Answer:**
I focus on understanding perspectives, aligning on goals, and resolving issues with data and clear communication rather than personal opinions.

---

### 24. Tight Deadlines

**Question:**
How do you handle tight deadlines?

**Answer:**
I prioritize core functionality, communicate trade-offs early, and deliver incremental value while maintaining code quality.

---

## Final Note (Important for 10 LPA Expectation)

Your preparation and interview exposure **already match a solid 8–12 LPA frontend engineer**.
The key difference at this level is:

* Clear fundamentals
* Performance awareness
* Practical decision-making
* Calm communication

If you want, I can next:

* Convert this into **mock interview Q&A**
* Do **HR round answers**
* Do **system design (frontend-focused)**
* Or help you **refine resume bullets aligned to JPMorganChase**

Just tell me.
