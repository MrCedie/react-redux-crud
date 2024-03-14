import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../../states/store/store";
import { addUser, updateUser } from "../../../states/actions/userActions";
import { RootState } from "../../../states/slices";

type UserFormProps = {
  refetchTable: () => void;
  closeForm: () => void;
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

const UserForm: React.FC<UserFormProps> = ({ refetchTable, closeForm }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, submissionLoading } = useSelector(
    (state: RootState) => state.userForm
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!submissionLoading && !loading) {
      const formData = new FormData(event.target as HTMLFormElement);
      const data: any = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      if (user) {
        await dispatch(updateUser({ id: user?.id ?? "", formData: data }));
        closeForm();
        return;
      }

      await dispatch(addUser(data));
      closeForm();
      return;
    }
  };

  return (
    <Box sx={style}>
      {loading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <FormControl fullWidth margin="normal">
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              defaultValue={user?.firstName ?? ""}
            />
          </FormControl>

          {/* Last Name */}
          <FormControl fullWidth margin="normal">
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              defaultValue={user?.lastName ?? ""}
            />
          </FormControl>

          {/* Email Address */}
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              name="email"
              defaultValue={user?.email ?? ""}
            />
          </FormControl>

          {/* Age */}
          <FormControl fullWidth margin="normal">
            <TextField
              label="Age"
              variant="outlined"
              name="age"
              defaultValue={user?.age ?? ""}
            />
          </FormControl>

          {/* Contact */}
          <FormControl fullWidth margin="normal">
            <TextField
              label="Contact"
              variant="outlined"
              name="contact"
              defaultValue={user?.contact ?? ""}
            />
          </FormControl>

          {/* Submit Button */}
          <FormControl fullWidth margin="normal">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ height: 50 }}
            >
              {submissionLoading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </FormControl>
        </form>
      )}
    </Box>
  );
};

export default UserForm;
