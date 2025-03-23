import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fetchProducts, { ProductResult } from "../lib/fetch-products";

export default function ProductView({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {products.map((p) => (
        <li>
          <img src={p.imageURL} alt={p.title}></img>
          <h4>{p.title}</h4>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  );
}
export const getStaticProps: GetStaticProps<{
  products: ProductResult[];
}> = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};
