import { Suspense } from 'react';

import { Ping } from '@/ui/ping';
import { Reviews, ReviewsSkeleton } from '@/app/components/reviews';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '@/app/components/recommended-products';
import { SingleProduct } from '@/app/components/single-product';

export const runtime = 'experimental-edge';

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

      {/* <Suspense fallback={<RecommendedProductsSkeleton />}> */}
      {/* @ts-ignore */}
      <RecommendedProducts
        path="/ssr"
        data={fetch(
          // We intentionally delay the reponse to simulate a slow data
          // request that would benefit from streaming
          `https://app-router-api.vercel.app/api/products?delay=5000&filter=${params.id}`,
          {
            // We intentionally disable Next.js Cache to better demo
            // streaming
            cache: 'no-store',
          }
        )}
      />
      {/* </Suspense> */}

      {/* <Suspense fallback={<ReviewsSkeleton />}> */}
      {/* @ts-ignore */}
      <Reviews
        data={fetch(
          // We intentionally delay the reponse to simulate a slow data
          // request that would benefit from streaming
          `https://app-router-api.vercel.app/api/reviews?delay=10000`,
          {
            // We intentionally disable Next.js Cache to better demo
            // streaming
            cache: 'no-store',
          }
        )}
      />
      {/* </Suspense> */}
    </div>
  );
}
