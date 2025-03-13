import { create } from "zustand"

type ChatState = {
  isChatOpen: boolean
  toggleChat: () => void
  openChat: () => void
  closeChat: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  isChatOpen: false,
  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  openChat: () => set({ isChatOpen: true }),
  closeChat: () => set({ isChatOpen: false }),
}))

