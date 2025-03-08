import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addStore, deleteStore } from "../redux/storesSlice";
import { Button, TextField, List, ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const StoresPage = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state: RootState) => state.stores.stores);
  const [storeName, setStoreName] = useState("");

  return (
    <div>
      <h1>Stores</h1>
      <TextField
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        label="Store Name"
      />
      <Button onClick={() => { if (storeName.trim()) { dispatch(addStore(storeName)); setStoreName(""); } }}>
        Add Store
      </Button>
      <List>
        {stores.map((store) => (
          <ListItem key={store.id}>
            {store.name}
            <IconButton onClick={() => dispatch(deleteStore(store.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default StoresPage;









// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { addStore, updateStore, deleteStore } from "../redux/storesSlice";

// const StoresPage = () => {
//   const dispatch = useDispatch();
//   const stores = useSelector((state: RootState) => state.stores.stores);
//   const [storeName, setStoreName] = useState("");

//   const handleAddStore = () => {
//     if (storeName.trim()) {
//       dispatch(addStore(storeName));
//       setStoreName("");
//     }
//   };

//   return (
//     <div>
//       <h1>Stores</h1>
//       <input
//         type="text"
//         value={storeName}
//         onChange={(e) => setStoreName(e.target.value)}
//         placeholder="Enter store name"
//       />
//       <button onClick={handleAddStore}>Add Store</button>

//       <ul>
//         {stores.map((store) => (
//           <li key={store.id}>
//             {store.name}{" "}
//             <button onClick={() => dispatch(deleteStore(store.id))}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StoresPage;



