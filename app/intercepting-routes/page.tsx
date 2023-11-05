import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Intercepting Routes</h1>

      <ul>
        <li>
          Intercepting routes allows you to load a route from another part of
          your application within the current layout. This routing paradigm can
          be useful when you want to display the content of a route without the
          user switching to a different context.
        </li>

        <li>
          For example, when clicking on a photo in a feed, you can display the
          photo in a modal, overlaying the feed.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming">
          Docs
        </ExternalLink>
      </div>
    </div>
  );
}
