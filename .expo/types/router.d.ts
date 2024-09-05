/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(campaign)` | `/(campaign)/` | `/(drawer)` | `/(drawer)/` | `/(drawer)/(campaign)` | `/(drawer)/(campaign)/` | `/(drawer)/(engagement)` | `/(drawer)/(engagement)/` | `/(drawer)/about-program` | `/(drawer)/contact-abu` | `/(drawer)/contact-avc-support` | `/(drawer)/feedback-review` | `/(drawer)/profile` | `/(drawer)/terms-and-conditions` | `/(drawer)/testimonials` | `/(drawer)/tier-slab-benefits` | `/(engagement)` | `/(engagement)/` | `/(public)` | `/(public)/generate-otp` | `/(public)/registration` | `/(public)/validate-otp` | `/..\trpc\query-client` | `/_sitemap` | `/about-program` | `/contact-abu` | `/contact-avc-support` | `/feedback-review` | `/generate-otp` | `/profile` | `/registration` | `/terms-and-conditions` | `/testimonials` | `/tier-slab-benefits` | `/validate-otp`;
      DynamicRoutes: `/${Router.SingleRoutePart<T>}` | `/(campaign)/${Router.SingleRoutePart<T>}` | `/(drawer)/${Router.SingleRoutePart<T>}` | `/(drawer)/(campaign)/${Router.SingleRoutePart<T>}` | `/(drawer)/(engagement)/${Router.SingleRoutePart<T>}` | `/(engagement)/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(campaign)/[id]` | `/(drawer)/(campaign)/[id]` | `/(drawer)/(engagement)/[id]` | `/(drawer)/[id]` | `/(engagement)/[id]` | `/[id]`;
    }
  }
}
