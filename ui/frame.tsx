import Image from 'next/image';
import { Photo } from '@/mocks/photos';
import Link from 'next/link';

export function Frame({ slug, photo }: { slug: string; photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white text-slate-800 p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
        <Link href={`/intercepting-routes/photos/${slug}`}>View detail</Link>
      </div>
    </>
  );
}
