import { TableHead, TableRow, TableCell } from "@mui/material";

export default function UserTableHeaderComponent() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">First Name</TableCell>
        <TableCell align="center">Last Name</TableCell>
        <TableCell align="center">Contact No.</TableCell>
        <TableCell align="center">Age</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  );
}
