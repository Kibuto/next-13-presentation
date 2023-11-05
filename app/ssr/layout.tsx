import { TabGroup } from '@/ui/tab-group';

export const metadata = {
  title: 'Streaming (Edge Runtime)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/ssr"
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

      <div className="space-y-10">{children}</div>
    </div>
  );
}
