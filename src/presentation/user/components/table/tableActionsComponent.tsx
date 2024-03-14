import { Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";

type UserTableActionsComponentProps = {
  fetchDataList: () => void;
  openModal: () => void;
};

const UserTableActionsComponent: React.FC<UserTableActionsComponentProps> = ({
  fetchDataList,
  openModal,
}) => {
  return (
    <Grid container alignItems="center" style={{ marginBottom: 20 }}>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ marginRight: 10 }}
        />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          style={{ height: 55, marginRight: 5 }}
          onClick={fetchDataList}
        >
          <CachedIcon />
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={openModal}
          style={{ height: 55, backgroundColor: "green" }}
        >
          <AddIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserTableActionsComponent;
