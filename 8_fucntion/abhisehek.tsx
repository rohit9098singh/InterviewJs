// import { useState, useEffect } from "react";

// // Define the structure of the error
// type ErrorVal = {
//   statusCode?: string;
//   message: string;
// };

// // Define the return type for the hook
// type UseFetchResult = {
//   data: any | null;
//   error: ErrorVal | null;
//   loading: boolean;
// };

// // Custom Hook
// function useFetch(url: string): UseFetchResult {
//   const [data, setData] = useState<any | null>(null);
//   const [error, setError] = useState<ErrorVal | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(url);

//       // Optional: handle non-200 errors
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setData(data);
//     } catch (err: any) {
//       setError({ message: err.message || "Something went wrong" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]); // re-fetch if URL changes

//   return { data, error, loading };
// }

// export default function App() {
//   const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
//   const { data, loading, error } = useFetch(url);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h2>Fetched Data:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
