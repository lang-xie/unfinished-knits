import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const shopify = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: "2025-01",
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});
