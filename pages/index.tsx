import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fetchProducts, { ProductResult } from "../lib/fetch-products";

export default function ProductListView({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section id="listing" className="py-2 px-12 bg-amber-200/10">
      <h1 className="text-2xl leading-2 font-extrabold text-center hover:text-blue-700 underline decoration-blue-500 decoration-wavy underline-offset-2 uppercase mx-auto tracking-tight p-2 my-12">
        Knits for sell
      </h1>
      <ul className="px-8">
        {products.map((p) => (
          <li className="mb-6">
            <img
              src={p.imageURL}
              alt={p.title}
              className="object-scale-down basis-2/3 mb-1 h-3/5 max-h-[320px] rounded-md mx-auto max-h-vwh"
            ></img>
            <h4 className="text-blue-600 font-semibold">{p.title}</h4>
            <p className="text-gray-700 tracking-tighter">{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export const getStaticProps: GetStaticProps<{
  products: ProductResult[];
}> = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};
