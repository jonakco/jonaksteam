'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useToastStore } from '@/lib/store';
import { usePathname } from 'next/navigation';

export default function RootLayout() {
  const { triggerToast } = useToastStore();
  const pathname = usePathname();
  const [hasToastShown, setHasToastShown] = useState(false);

  useEffect(() => {
    const remindLaterTimestamp = localStorage.getItem('remindLater');
    const now = new Date().getTime();

    if (remindLaterTimestamp && now < parseInt(remindLaterTimestamp, 10)) {
      return;
    }

    if (!hasToastShown) {
      triggerToast();
      toast('Support My Work 💖', {
        description: `Follow me on instagram`,
        cancel: {
          label: 'follow ❤️',
          onClick: () => {
            window.open('https://www.instagram.com/aantarip', '_blank');
          },
        },
      });
      setHasToastShown(true);
    }
  }, [pathname, triggerToast, hasToastShown]);

  useEffect(() => {
    setHasToastShown(false);
  }, [pathname]);

  return <></>;
}
