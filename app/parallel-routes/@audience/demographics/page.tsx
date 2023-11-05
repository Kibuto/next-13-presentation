import { Boundary } from '@/ui/boundary';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Boundary labels={['@audience/demographics/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Demographics</h2>
      </div>
    </Boundary>
  );
}
