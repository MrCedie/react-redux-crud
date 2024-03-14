import { TableRow, TableCell, CircularProgress } from "@mui/material";

export default function UserTableLoaderComponent() {
  return (
    <TableRow>
      <TableCell colSpan={6} align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
}
