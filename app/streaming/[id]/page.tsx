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
      <Suspense fallback={<SkeletonSingleProduct />}>
        {/* @ts-ignore */}
        <SingleProduct
          data={fetch(
            `https://app-router-api.vercel.app/api/products?id=${params.id}&delay=2000`
          )}
        />
      </Suspense>

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

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        {/* @ts-ignore */}
        <RecommendedProducts
          path="/streaming"
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
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
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
      </Suspense>
    </div>
  );
}

const SkeletonSingleProduct = () => (
  <div className="grid grid-cols-4 gap-6">
    <div className="col-span-full lg:col-span-1">
      <div className="space-y-2">
        <ProductSkeleton />
      </div>
    </div>

    <div className="col-span-full space-y-4 lg:col-span-2">
      <ProductSkeleton />
    </div>
  </div>
);

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function ProductSkeleton() {
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />

      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}
