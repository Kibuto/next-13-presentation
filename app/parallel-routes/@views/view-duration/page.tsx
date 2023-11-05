import { Boundary } from '@/ui/boundary';
import BuggyButton from '@/ui/buggy-button';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Boundary labels={['@views/view-duration/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">View Duration</h2>
        <BuggyButton />
      </div>
    </Boundary>
  );
}
