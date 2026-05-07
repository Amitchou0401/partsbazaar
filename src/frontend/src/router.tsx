import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const CatalogPage = lazy(() => import("@/pages/Catalog"));
const PartDetailPage = lazy(() => import("@/pages/PartDetail"));
const CartPage = lazy(() => import("@/pages/Cart"));
const OrderConfirmationPage = lazy(() => import("@/pages/OrderConfirmation"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <LoadingSpinner />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/parts",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CatalogPage />
    </Suspense>
  ),
});

const partDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/parts/$partId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PartDetailPage />
    </Suspense>
  ),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CartPage />
    </Suspense>
  ),
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation/$orderId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <OrderConfirmationPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  catalogRoute,
  partDetailRoute,
  cartRoute,
  orderConfirmationRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
