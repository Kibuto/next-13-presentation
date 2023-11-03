import React from 'react';
import { cookies } from 'next/headers';

import { Boundary } from '@/ui/boundary';
import { Header } from '../components/header';
import { CartCountProvider } from '../components/cart-count-context';
import { TabGroup } from '@/ui/tab-group';

export const metadata = {
  title: 'Streaming (Edge Runtime)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number(cookies().get('_cart_count')?.value || '0');

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="ssr"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Demo',
              slug: '1',
              segment: 'ssr',
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
