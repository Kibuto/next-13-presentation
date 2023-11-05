import { TabGroup } from '@/ui/tab-group';

const title = 'Intercepting Routes';

export const metadata = {
  title,
};

export default async function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/intercepting-routes"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Demo',
              slug: 'photos',
              segment: 'intercepting-routes',
            },
          ]}
        />
      </div>

      <div className="space-y-10">
        {children}
        {modal}
      </div>
    </div>
  );
}
