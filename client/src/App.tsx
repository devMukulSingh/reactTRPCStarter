import "./App.css";
import { trpc } from "../lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:8000/trpc",
          fetch(url,options){
            return fetch(url,{
              ...options,
              credentials:'include'
            })
          }
        }),
      ],
    })
  );
  return (
    <>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </trpc.Provider>
    </>
  );
}

export default App;
