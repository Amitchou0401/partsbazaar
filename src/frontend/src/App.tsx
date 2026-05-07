import { router } from "@/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 2, retry: 1 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-card border border-border text-foreground rounded-none font-body text-sm",
            success: "border-primary/40",
            error: "border-destructive/40",
          },
        }}
      />
    </QueryClientProvider>
  );
}
