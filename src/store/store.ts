import Lenis from "lenis";
import { create } from "zustand";

interface GeneralState {
  lenis: Lenis | null;
  setLenis: (lenis: Lenis) => void;
}

const useGeneralStore = create<GeneralState>((set) => ({
  lenis: null,
  setLenis(lenis) {
    set(() => ({ lenis: lenis }));
  },
}));

export default useGeneralStore;
