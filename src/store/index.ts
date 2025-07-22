import { create } from "zustand";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => {
    const current = get().count;
    if (current > 0) {
      set({ count: current - 1 });
    } else {
      console.log(alert("Bạn không thể giảm khi acount = 0"));
    }
  },
}));
