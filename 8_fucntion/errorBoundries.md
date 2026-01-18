# Error Boundary ek React component hota hai jo:
apne child components me aane wale runtime errors ko catch karta hai

app crash hone se bachata hai

ek fallback UI dikhata hai



import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong.</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={Fallback}>
  <UserProfile />
</ErrorBoundary>
