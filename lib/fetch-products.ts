import { shopify } from ".";

const ProductListQuery = `
query ProductsQuery {
    products(first: 3) {
    nodes {
      id
      title
      description
      images(first: 1) {
        nodes {
          url
        }
      }
    }
  }
}
`;

type Product = {
  id: string;
  title: string;
  description: string;
};

type ProductMedia = {
  url: string;
};

interface gqlProduct extends Product {
  images: {
    nodes: [ProductMedia];
  };
}

type ProductGqlResponse = {
  products: {
    nodes: gqlProduct[];
  };
};

export interface ProductResult extends Product {
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
      const { id, title, description, images } = n;
      list.push({
        id,
        description,
        title,
        imageURL: images.nodes[0].url,
      });
    });
  }
  return list;
}
