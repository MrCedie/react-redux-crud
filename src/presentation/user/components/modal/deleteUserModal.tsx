import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../states/slices";
import { AppDispatch } from "../../../../states/store/store";
import { deleteUser } from "../../../../states/actions/userActions";

type DeleteUserModalComponentProps = {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  userId: string | null;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteUserModalComponent: React.FC<DeleteUserModalComponentProps> = ({
  open,
  onClose,
  onAccept,
  userId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, submissionLoading } = useSelector(
    (state: RootState) => state.userForm
  );

  const handleOnAccept = async () => {
    if (!submissionLoading) {
      await dispatch(deleteUser(userId ?? ""));
      onAccept();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography id="server-modal-title" variant="h6" component="h2">
          Are you sure?
        </Typography>
        <Typography
          id="server-modal-description"
          sx={{ pt: 2, marginBottom: "15px" }}
        >
          You're about to delete a user.
        </Typography>

        <Button onClick={() => (!submissionLoading ? onClose() : null)}>
          Cancel
        </Button>
        <Button style={{ color: "red" }} onClick={handleOnAccept}>
          {submissionLoading ? <CircularProgress /> : "Yes"}
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteUserModalComponent;
