
import { create } from 'zustand';

interface ToastStore {
  hasShown: boolean;
  triggerToast: () => void;
  resetToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  hasShown: false,
  triggerToast: () => set({ hasShown: true }),
  resetToast: () => set({ hasShown: false }),
}));
