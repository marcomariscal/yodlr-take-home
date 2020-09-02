import React, { useState, useEffect, useCallback } from "react";
import { getUsers } from "./helpers";
import Spinner from "./Spinner";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { activateAdmin } from "./helpers";

const Users = ({ searchValue = null }) => {
  const [loaded, setLoaded] = useState(false);
  const [usersFromAPI, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // handles searching/filtering for users
  const searchFor = (searchValue) => {
    if (searchValue) {
      setFilteredUsers(
        usersFromAPI.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchValue) ||
            user.lastName.toLowerCase().includes(searchValue)
        )
      );
    }
  };

  // get all users from the backend API
  useEffect(() => {
    async function getUsersFromBackend() {
      const users = await getUsers();
      setUsers(users);
      setLoaded(true);
    }

    getUsersFromBackend();
  }, []);

  // filter for users if searching
  useEffect(() => {
    searchFor(searchValue);
  }, [searchValue, usersFromAPI]);

  // handles toggling the admin button and sending this new admin property for the specific user to the backend
  // updates the specific user in state
  const handleActivateAdmin = async (userId) => {
    const adminUser = usersFromAPI.filter((user) => user.id === userId);
    const user = { ...adminUser[0], state: "active" };

    // update user to admin on the backend
    await activateAdmin(userId, user);

    // update the users in state with the updated user who is now admin
    setUsers((u) =>
      u.map((user) =>
        user.id === userId ? { ...user, state: "active" } : user
      )
    );
  };

  const users = filteredUsers && searchValue ? filteredUsers : usersFromAPI;
  const render = !users.length ? (
    <p>No users...</p>
  ) : (
    <List className="Users">
      {users.map((user) => {
        return (
          <ListItem key={user.id}>
            <ListItemText
              id={user.id}
              primary={`${user.firstName} ${user.lastName}`}
            />

            <Button
              onClick={() => handleActivateAdmin(user.id)}
              variant="contained"
              color="secondary"
              size="small"
              disabled={user.state === "active" ? true : false}
            >
              {user.state === "pending" ? "Activate Admin" : "Admin"}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );

  return <div>{!loaded ? <Spinner /> : render}</div>;
};

export default Users;
