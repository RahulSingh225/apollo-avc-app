import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import SuperJSON from "superjson";

import { createQueryClient } from "./query-client";

export const api = createTRPCReact();

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = createQueryClient();
  const BASE_URL = "http://192.168.29.15:5005/api/trpc";

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          transformer: SuperJSON,
          url: BASE_URL,
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}
