import { Frame } from '@/ui/frame';
import { Modal } from '@/ui/modal';
import swagPhotos, { Photo } from '@/mocks/photos';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return (
    <Modal>
      <Frame slug={photoId} photo={photo} />
    </Modal>
  );
}
