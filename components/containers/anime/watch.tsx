import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ImageIcon, Play } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import Zoro from 'avalynndev-extensions/dist/providers/anime/zoro';
import Anilist from 'avalynndev-extensions/dist/providers/meta/anilist';

export default async function Watch({ id }: any) {
  const anilist = new Anilist(new Zoro());
  const data = await anilist.fetchEpisodesListById(id);
  return (
    <ScrollArea className="h-[40rem] rounded-md border">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((episode: any) => (
          <Link
            key={episode.id.split('$episode$')[1]}
            href={`/anime/watch/${id}/${episode.id}`}
            className="relative flex flex-col rounded p-4"
          >
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
              {episode.image ? (
                <Image
                  src={episode.image}
                  alt={episode.title ? episode.title : `Episode ${episode.number}`}
                  width={1600}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImageIcon />
              )}
              <div className="absolute inset-0 z-50 flex items-center justify-center">
                <Button variant={'ghost'} className="h-12 w-12">
                  <Play className="h-6 w-6 text-white" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold">{`Episode ${episode.number}`}</h2>
              <p className="line-clamp-2 text-gray-700 dark:text-slate-300">
                {episode.title ? episode.title : `Episode ${episode.number}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
