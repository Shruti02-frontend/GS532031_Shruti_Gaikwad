import React from "react";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

// Define the type for row data
interface RowData {
    store: string;
    sku: string;
    salesUnits: number;
    price: number;
    cost: number;
  }

const PlanningPage = () => {
  const [rowData, setRowData] = useState<RowData[]>([
    { store: "Store A", sku: "SKU 1", salesUnits: 10, price: 20, cost: 10 },
  ]);

//   const columnDefs = [
    const columnDefs: ColDef<RowData>[] = [
    { field: "store", headerName: "Store", editable: false },
    { field: "sku", headerName: "SKU", editable: false },
    { field: "salesUnits", headerName: "Sales Units", editable: true },
    // { field: "salesDollars", headerName: "Sales $", valueGetter: (params: any) => params.data.salesUnits * params.data.price },
    // { field: "gmDollars", headerName: "GM $", valueGetter: (params: any) => params.data.salesDollars - params.data.salesUnits * params.data.cost },
  ];

  return <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
    <AgGridReact rowData={rowData} columnDefs={columnDefs} />
  </div>;
};

export default PlanningPage;





































// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { ColDef } from "ag-grid-community";
// import { useState } from "react";

// const PlanningPage = () => {
//   //const [rowData, setRowData] = useState([
// //   const [rowData ] = useState([
// //     { store: "Store A", sku: "SKU 1", salesUnits: 10, price: 20, cost: 10 , salesDollars?: number,  gmDollars?: number; },
// //   ]);

// type RowData = {
//     store: string;
//     sku: string;
//     salesUnits: number;
//     price: number;
//     cost: number;
//     salesDollars?: number; // Optional computed field
//     gmDollars?: number; // Optional computed field
//   };

//   const [rowData, setRowData] = useState<RowData[]>([
//     { store: "Store A", sku: "SKU123", salesUnits: 10, price: 5, cost: 3 },
//     { store: "Store B", sku: "SKU456", salesUnits: 15, price: 6, cost: 4 },
//   ]);

//   //const columnDefs = [
//     const columnDefs: ColDef<RowData>[] = [
//     { field: "store", headerName: "Store", editable: false },
//     { field: "sku", headerName: "SKU", editable: false },
//     { field: "salesUnits", headerName: "Sales Units", editable: true },
//     { field: "salesDollars", headerName: "Sales $", valueGetter: (params: any) => params.data.salesUnits * params.data.price },
//     { field: "gmDollars", headerName: "GM $", valueGetter: (params: any) => params.data.salesDollars - params.data.salesUnits * params.data.cost },
//   ];

//   return <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
//     <AgGridReact rowData={rowData} columnDefs={columnDefs} />
//   </div>;
// };

// export default PlanningPage;

  