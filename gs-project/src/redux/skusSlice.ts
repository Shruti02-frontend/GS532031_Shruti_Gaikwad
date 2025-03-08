import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SKU = {
  id: number;
  name: string;
  price: number;
  cost: number;
};

interface SKUsState {
  skus: SKU[];
}

const initialState: SKUsState = {
  skus: [],
};

const skusSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSKU: (state, action: PayloadAction<{ name: string; price: number; cost: number }>) => {
      const newSKU = { id: Date.now(), ...action.payload };
      state.skus.push(newSKU);
    },
    updateSKU: (state, action: PayloadAction<{ id: number; name: string; price: number; cost: number }>) => {
      const sku = state.skus.find((s) => s.id === action.payload.id);
      if (sku) Object.assign(sku, action.payload);
    },
    deleteSKU: (state, action: PayloadAction<number>) => {
      state.skus = state.skus.filter((sku) => sku.id !== action.payload);
    },
  },
});

export const { addSKU, updateSKU, deleteSKU } = skusSlice.actions;
export default skusSlice.reducer;
