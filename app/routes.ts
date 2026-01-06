import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("portfolio/:slug", "routes/company.tsx"),
    route("about", "routes/about.tsx"),
    route("metrics", "routes/metrics.tsx"),
] satisfies RouteConfig;
