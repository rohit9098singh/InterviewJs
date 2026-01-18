Below are **2 concise practice interview sets**, created **in the same pattern and depth** as your JPMorganChase experience.
They are **realistic for a Software Engineer II / Frontend (React)** level and suitable for **~8–12 LPA** expectations.

I’ve kept them **precise, structured, and interview-ready**—no fluff.

---

# ✅ Practice Set 1 – Frontend Engineer (React)

**Pattern: DSA + JavaScript + React + Architecture**

---

## 🔹 Round 1: JavaScript + DSA (45–60 mins)

### 1. DSA – Sliding Window

**Question:**
Given an array of integers, find the maximum sum of a subarray of size `k`.

**Expected Answer:**
Use the **sliding window technique** to avoid recalculating sums.
Time complexity: **O(n)**, Space: **O(1)**.

---

### 2. Closures vs Scope

**Question:**
Explain closures in JavaScript with a real use case.

**Answer:**
A closure allows a function to access variables from its outer scope even after the outer function has executed.
Common use cases include **data privacy**, **memoization**, and **event handlers**.

---

### 3. `this` Keyword

**Question:**
How does `this` behave in normal functions vs arrow functions?

**Answer:**

* Normal functions: `this` depends on the calling context
* Arrow functions: `this` is lexically scoped and inherits from the parent

---

### 4. Promise vs async/await

**Question:**
Why is `async/await` preferred over `.then()` chains?

**Answer:**
`async/await` improves **readability**, **error handling with try/catch**, and reduces callback nesting, while still being Promise-based.

---

### 5. Debounce Implementation

**Question:**
How would you implement debouncing in JavaScript?

**Answer:**
Use `setTimeout` and `clearTimeout` to delay execution until user input stabilizes, typically for search inputs.

---

### 6. Browser Storage

**Question:**
When would you use IndexedDB over LocalStorage?

**Answer:**
IndexedDB is preferred for **large, structured, asynchronous data**, offline caching, and better performance.

---

## 🔹 Round 2: React + UI Logic (60 mins)

### 7. React Rendering

**Question:**
What triggers a re-render in React?

**Answer:**

* State changes
* Props changes
* Context updates
  Re-renders are optimized using `memo`, `useMemo`, and `useCallback`.

---

### 8. `useMemo` vs `useCallback`

**Question:**
Difference between `useMemo` and `useCallback`?

**Answer:**

* `useMemo`: memoizes values
* `useCallback`: memoizes functions
  Both help avoid unnecessary re-renders.

---

### 9. Coding Task

**Problem:**
Build a searchable list with:

* Debounced input
* Highlight matched text
* Optimized rendering

**Expected Approach:**

* Controlled input
* Debounce with `useCallback`
* Memoized filtered list
* Clean separation of components

---

## 🔹 Round 3: Architecture + Behavioral (45 mins)

### 10. Large App Structure

**Question:**
How do you structure a scalable React app?

**Answer:**
Feature-based architecture with shared components, hooks, services, and utilities.

---

### 11. Performance Optimization

**Question:**
How do you optimize a page with thousands of rows?

**Answer:**

* Virtualization
* Pagination
* Memoization
* Avoid unnecessary DOM updates

---

### 12. Deadline Handling

**Question:**
How do you handle tight deadlines?

**Answer:**
Prioritize core features, communicate risks early, and deliver incremental value without compromising stability.

---

---

# ✅ Practice Set 2 – Frontend Engineer (Product-Focused)

---

## 🔹 Round 1: JavaScript Fundamentals (45 mins)

### 1. Event Loop Scenario

**Question:**
Explain execution order of `setTimeout`, Promise, and sync code.

**Answer:**
Synchronous → Microtasks (Promises) → Macrotasks (setTimeout).

---

### 2. Shallow vs Deep Copy

**Question:**
Difference between shallow and deep copy?

**Answer:**
Shallow copy copies references; deep copy creates independent nested objects.

---

### 3. Polyfill Question

**Question:**
Write a polyfill for `Array.map()`.

**Answer:**
Iterate over array, apply callback, return a new array, handle sparse arrays.

---

### 4. API Error Handling

**Question:**
How do you handle API failures gracefully?

**Answer:**
Use retries with backoff, fallback UI, proper error messaging, and logging.

---

## 🔹 Round 2: React + State Management (60 mins)

### 5. Controlled vs Uncontrolled Components

**Question:**
Difference between controlled and uncontrolled components?

**Answer:**
Controlled components rely on React state; uncontrolled use refs and DOM state.

---

### 6. Context API

**Question:**
When should Context API be avoided?

**Answer:**
Avoid for high-frequency updates; it can cause unnecessary re-renders.

---

### 7. Coding Task

**Problem:**
Create a tab-based UI:

* Each tab has independent state
* Search with debounce
* No shared state leakage

**Expected Approach:**

* Local state per tab
* Memoized handlers
* Clean component boundaries

---

## 🔹 Round 3: System Thinking + Behavioral

### 8. Frontend System Design

**Question:**
How would you design a dashboard consuming multiple APIs?

**Answer:**

* Parallel API calls
* Centralized error handling
* Loading skeletons
* Retry strategies

---

### 9. Accessibility

**Question:**
How do you ensure accessibility?

**Answer:**
Semantic HTML, keyboard navigation, ARIA only when needed, proper contrast.

---

### 10. Team Conflict

**Question:**
How do you resolve disagreements in technical decisions?

**Answer:**
By focusing on data, trade-offs, and aligning decisions with product goals.

---

## 🔚 Final Advice

If you can **confidently answer these two sets**, you are **fully prepared** for:

* JPMorganChase
* BrowserStack
* Zomato / Swiggy
* Any 8–12 LPA frontend role

If you want next:

* **Mock interview (Q → pause → answer → feedback)**
* **Frontend system design only**
* **HR round polished answers**

Just tell me.
