import React from 'react';
import { cookies } from 'next/headers';

import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';
import { Header } from '@/app/components/header';
import { CartCountProvider } from '@/app/components/cart-count-context';

const title = 'Streaming';

export const metadata = {
  title,
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartCount = Number(cookies().get('_cart_count')?.value || '0');

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="streaming"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Demo',
              slug: '1',
              segment: 'streaming',
            },
          ]}
        />
      </div>

      <Boundary animateRerendering={false} labels={['Demo']} size="small">
        <CartCountProvider initialCartCount={cartCount}>
          <div className="space-y-10">
            <Header />

            {children}
          </div>
        </CartCountProvider>
      </Boundary>
    </div>
  );
}
