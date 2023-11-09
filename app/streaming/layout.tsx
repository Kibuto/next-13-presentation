import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';

const title = 'Streaming';

export const metadata = {
  title,
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/streaming"
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
        <ClickCounter />
      </div>

      <div className="space-y-10">{children}</div>
    </div>
  );
}
