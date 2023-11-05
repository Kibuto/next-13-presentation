import { cookies } from 'next/headers';

import { Boundary } from '@/ui/boundary';
import { Header } from '@/app/components/header';
import { CartCountProvider } from '@/app/components/cart-count-context';

const title = 'Streaming By Id';

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
