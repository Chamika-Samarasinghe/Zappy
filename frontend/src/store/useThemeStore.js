import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("zappy-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("zappy-theme", theme);
    set({ theme });
  },
}));
