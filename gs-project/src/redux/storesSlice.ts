// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type Store = {
//   id: number;
//   name: string;
// };

// interface StoresState {
//   stores: Store[];
// }

// const initialState: StoresState = {
//   stores: [],
// };

// const storesSlice = createSlice({
//   name: "stores",
//   initialState,
//   reducers: {
//     addStore: (state, action: PayloadAction<string>) => {
//       const newStore = { id: Date.now(), name: action.payload };
//       state.stores.push(newStore);
//     },
//     updateStore: (state, action: PayloadAction<{ id: number; name: string }>) => {
//       const store = state.stores.find((s) => s.id === action.payload.id);
//       if (store) store.name = action.payload.name;
//     },
//     deleteStore: (state, action: PayloadAction<number>) => {
//       state.stores = state.stores.filter((store) => store.id !== action.payload);
//     },
//   },
// });

// export const { addStore, updateStore, deleteStore } = storesSlice.actions;
// export default storesSlice.reducer;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Store = { id: number; name: string };
interface StoresState { stores: Store[] }

const initialState: StoresState = { stores: [] };

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<string>) => {
      state.stores.push({ id: Date.now(), name: action.payload });
    },
    updateStore: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const store = state.stores.find((s) => s.id === action.payload.id);
      if (store) store.name = action.payload.name;
    },
    deleteStore: (state, action: PayloadAction<number>) => {
      state.stores = state.stores.filter((store) => store.id !== action.payload);
    },
  },
});

export const { addStore, updateStore, deleteStore } = storesSlice.actions;
export default storesSlice.reducer;
