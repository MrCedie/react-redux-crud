import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../states/store/store";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
} from "@mui/material";

import UserForm from "../components/userForm";
import UserTableHeaderComponent from "../components/table/tableHeaderComponent";
import UserTableLoaderComponent from "../components/table/tableLoaderComponent";
import UserTableActionsComponent from "../components/table/tableActionsComponent";
import { getUser, getUsers } from "../../../states/actions/userActions";
import { clearUserForm } from "../../../states/slices/userFormSlice";
import { RootState } from "../../../states/slices";
import DeleteUserModalComponent from "../components/modal/deleteUserModal";

const UserScreen: React.FC = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    handleFetchDataList();
  }, []);

  useEffect(() => {
    if (!modalStatus) {
      dispatch(clearUserForm());
    }
  }, [modalStatus]);

  useEffect(() => {}, [users, loading, error]);

  const handleFetchDataList = () => {
    dispatch(getUsers());
  };

  const handleCloseModal = (): void => {
    setModalStatus(false);
  };

  const handleUpdateUser = (id: any): void => {
    dispatch(getUser(id));
    setModalStatus(true);
  };

  const handleDeleteUser = async () => {
    if (deleteUserId) {
      setDeleteUserId(null);
      setDeleteUserModal(false);
      handleFetchDataList();
    }
  };

  const handleDeleteUserModel = (id: string) => {
    setDeleteUserId(id);
    setDeleteUserModal(true);
  };

  function handleCloseForm(): void {
    setModalStatus(false);
    handleFetchDataList();
  }

  return (
    <div>
      <UserTableActionsComponent
        fetchDataList={handleFetchDataList}
        openModal={() => setModalStatus(true)}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <UserTableHeaderComponent />
          <TableBody>
            {loading ? (
              <UserTableLoaderComponent />
            ) : (
              users.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center">{row.contact}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="text"
                      onClick={() => handleUpdateUser(row.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="text"
                      onClick={() => handleDeleteUserModel(row.id)}
                      style={{ color: "red" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={modalStatus} onClose={handleCloseModal}>
        <UserForm refetchTable={() => null} closeForm={handleCloseForm} />
      </Modal>

      <DeleteUserModalComponent
        open={deleteUserModal}
        onClose={() => setDeleteUserModal(false)}
        onAccept={handleDeleteUser}
        userId={deleteUserId}
      />
    </div>
  );
};

export default UserScreen;
