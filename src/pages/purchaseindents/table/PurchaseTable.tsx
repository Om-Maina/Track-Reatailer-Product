import React, { useState, useEffect } from "react";
import "./PurchaseItemTable.css";
import { connect, useSelector } from "react-redux";
import { fetchTableDataRequest } from "../../../actions/purchaseIndentsActions";
import { Typography } from "@mui/material";
import { RootState } from "../../../reducers/rootReducer";

interface Retailer {
  sr: number;
  ItemDescription: string;
  Unit: string;
  RequiredQuantity: number;
  StockQuantity: number;
  Rate: number;
  Total: number;
}

interface ItemTableProps {
  retailers: Retailer[];
  fetchTableDataRequest: () => void;
}

const ItemTable: React.FC<ItemTableProps> = ({
  retailers,
  fetchTableDataRequest,
}: ItemTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tabledata = useSelector((state: RootState) => state.table.data);

  useEffect(() => {
    fetchTableDataRequest();
  }, [fetchTableDataRequest]);

  const totalSum = retailers.reduce(
    (acc, retailer) => acc + (retailer.Total || 0),
    0
  );

  return (
    <div className="App">
      <div className="table-container-Item">
        <table id="table-Item">
          <thead>
            <tr className="tablerow">
              <th className="purchase-tablehead-sr">Sr. No</th>
              <th
                className="purchase-tablehead-itemdescription"
                id="itemdescription"
              >
                Item Description
              </th>
              <th className="purchase-tablehead-unit">Unit</th>
              <th className="purchase-tablehead-required">Required Quantity</th>
              <th className="purchase-tablehead-stock">Stock Quantity</th>
              <th className="purchase-tablehead-rate">Rate</th>
              <th className="purchase-tablehead-total">Total</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {(rowsPerPage > 0
              ? retailers.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : retailers
            ).map((retailer, index) => (
              <tr
                key={retailer.sr}
                className="purchade-tabledata"
                style={{
                  height: index === retailers.length - 1 ? "88px" : "auto",
                }}
              >
                <td className="purchade-tabledata">{retailer.sr}</td>
                <td className="purchade-tabledata">
                  {retailer.ItemDescription}
                </td>
                <td className="purchade-tabledata">{retailer.Unit}</td>
                <td className="purchade-tabledata">
                  {retailer.RequiredQuantity}
                </td>
                <td className="purchade-tabledata">{retailer.StockQuantity}</td>
                <td className="purchade-tabledata">{retailer.Rate}</td>
                <td className="purchade-tabledata">{retailer.Total}</td>
              </tr>
            ))}
            <tr>
              <td className="AllTotalRow" colSpan={7}>
                {" "}
                <span className="total-text"> Total (₹)</span>{" "}
                <Typography className="totalsum-amount">17450</Typography>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  retailers: state.table?.data || [],
});

const mapDispatchToProps = {
  fetchTableDataRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);
