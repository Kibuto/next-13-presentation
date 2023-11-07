import { Product } from '@/app/api/products/product';

function AboutSSR({ product }: { product: Product }) {
  return <section>{product.description}</section>;
}

export default AboutSSR;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://app-router-api.vercel.app/api/products?id=1&delay=2000`
  );
  const product = await res.json();
  return { props: { product } };
};
