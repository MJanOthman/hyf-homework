import { useContext } from "react";
import { gitHubUsersContext } from "./context";
export function UsersList() {
  const usersContext = useContext(gitHubUsersContext);

  return (
    <div>
      {usersContext.inputText === ""
        ? "No results..."
        : usersContext.users.map((user) => <li key={user.id}>{user.login}</li>)}
    </div>
  );
}
