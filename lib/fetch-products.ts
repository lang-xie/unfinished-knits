import { shopify } from ".";

const ProductListQuery = `
query ProductsQuery {
    products(first: 3) {
    nodes {
      id
      title
      description
      priceRange {
        maxVariantPrice {
            amount
        }
      }
      featuredImage {
        url
      }
    }
  }
}
`;

type gqlProduct = {
  id: string;
  title: string;
  description: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
  featuredImage: {
    url: string;
  };
};

type ProductGqlResponse = {
  products: {
    nodes: gqlProduct[];
  };
};

export interface ProductResult {
  id: string;
  title: string;
  description: string;
  price: string;
  imageURL: string;
}

export default async function loadProducts(): Promise<ProductResult[]> {
  const { data, errors } = await shopify.request<ProductGqlResponse>(
    ProductListQuery
  );
  const list: ProductResult[] = [];
  if (errors) {
    console.log("errors", errors.graphQLErrors);
  }
  if (data) {
    const nodes = data.products.nodes;
    nodes.map((n) => {
      const { id, title, description, featuredImage, priceRange } = n;
      list.push({
        id,
        description,
        title,
        price: priceRange.maxVariantPrice.amount,
        imageURL: featuredImage.url,
      });
    });
  }
  return list;
}
