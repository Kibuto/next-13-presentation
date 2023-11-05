import { Ping } from '@/ui/ping';
import { Reviews } from '@/app/components/reviews';
import { RecommendedProducts } from '@/app/components/recommended-products';
import { SingleProduct } from '@/app/components/single-product';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      {/* @ts-ignore */}
      <SingleProduct
        data={fetch(
          `https://app-router-api.vercel.app/api/products?id=${params.id}&delay=2000`
        )}
      />

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      {/* @ts-ignore */}
      <RecommendedProducts
        path="/ssr"
        data={fetch(
          `https://app-router-api.vercel.app/api/products?delay=4000&filter=${params.id}`,
          {
            cache: 'no-store',
          }
        )}
      />

      {/* @ts-ignore */}
      <Reviews
        data={fetch(
          `https://app-router-api.vercel.app/api/reviews?delay=7000`,
          {
            cache: 'no-store',
          }
        )}
      />
    </div>
  );
}
