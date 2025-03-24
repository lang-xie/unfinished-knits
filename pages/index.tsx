import type { InferGetStaticPropsType, GetStaticProps } from "next";
import fetchProducts, { ProductResult } from "../lib/fetch-products";

export default function ProductListView({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section id="listing" className="bg-amber-200/10">
      <h1 className="text-2xl leading-2 font-extrabold text-center bg-white hover:text-blue-700 underline decoration-blue-500 decoration-wavy underline-offset-4 uppercase mx-auto tracking-tight px-8 py-2 my-12">
        Knits for sell
      </h1>
      <ul className="px-8 mx-auto max-w-xs sm:flex sm:gap-x-16 sm:justify-start sm:gap-y-8 sm:max-w-xl md:max-w-5xl">
        {products.map((p) => (
          <li className="mb-6 shadow group hover:shadow-xl focus:shadow-xl rounded-2xl flex flex-col content-between bg-white px-2 py-4 sm:basis-1/2 md:basis-1/3 md:max-h-[300px] md:justify-center md:text-center">
            <img
              src={p.imageURL}
              alt={p.title}
              className="object-scale-down basis-2/3 mb-1 h-3/5 max-h-[320px] rounded-md mx-auto max-h-vwh"
            ></img>
            <h4 className="font-semibold text-gray-500 ">
              <div className="group-hover:underline group-hover:decoration-wavy group-focus:underline group-focus:decoration-wavy">
                {p.title}
              </div>
              <div className="text-blue-700 font-bold font-serif text-sm">{`£${p.price}`}</div>
            </h4>
            <p className="text-gray-700 tracking-tighter mt-auto">
              {p.description}
            </p>
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
