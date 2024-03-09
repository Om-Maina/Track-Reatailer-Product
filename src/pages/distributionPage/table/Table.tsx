// App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRetailersData } from '../../../actions/retailerActions';
import { RootState } from '../../../reducers';
import { Add, Remove, Update } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TableStyles.css";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/material";

export interface Retailer {
  sr: string;
  id: string;
  name: string;
  phone: string;
  status: string;
  icon: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const retailers = useSelector((state: RootState) => state.retailers.retailersData);

  useEffect(() => {
    dispatch(fetchRetailersData());
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <Box className="App">
      <Box className="table-container">
        <table id="table">
          <thead>
            <tr className="tablerow">
              <th className="tablehead" colSpan={2}>
                Retailer ID
              </th>
              <th className="tablehead">Name</th>
              <th className="tablehead">Phone</th>
              <th className="tablehead">Status</th>
              <th className="tablehead"> </th>
            </tr>
          </thead>
          <tbody className="tableBody">
          <tr className="tablerow">
              <td className="tabledata, bordercollapse"></td>
              <td className="tabledata"></td>
              <td className="tabledata"></td>
              <td className="tabledata"></td>
              <td className="tabledata"></td>
              <td className="tabledata"></td>
            </tr>
            {(rowsPerPage > 0
              ? retailers.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : retailers
            ).map((retailer: Retailer, index: number) => (
              <tr className="tablerow" key={retailer.id}>
                <td className="tabledata, bordercollapse" id="serail-number">
                  {retailer.sr}
                </td>
                <td className="tabledata" id="serail-number">
                  {retailer.id}
                </td>
                <td className="tabledata" id="serail-number">
                  {retailer.name}
                </td>
                <td className="tabledata" id="phone-number">
                  {retailer.phone}
                </td>
                <td
                  className={
                    retailer.status === "inactive"
                      ? "inactive-status"
                      : "active"
                  }
                >
                  {retailer.status}
                </td>
                <td className="tabledata" id="icon">
                  {index !== -1 && retailer.icon === "show" && (
                    <>
                      <Add id="icon" />
                      <Remove id="icon" />
                      <Update id="icon" />
                      <FontAwesomeIcon icon={faTrashAlt} id="icon-trash-can" />
                    </>
                  )}
                </td>
              </tr>
            ))}
               <tr className="tablerow">
              <td className="tabledata tabledata-border-sr"></td>
              <td className="tabledata tabledata-border-id"></td>
              <td className="tabledata tabledata-border"></td>
              <td className="tabledata tabledata-border"></td>
              <td className="tabledata tabledata-border"></td>
              <td className="tabledata tabledata-border"></td>
            </tr>
          </tbody>
        </table>
        <Box className="table-pagination">
          <TablePagination
            component="div"
            count={retailers.length}
            rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
