import { useContext } from "react";
import { gitHubUsersContext } from "./context";
export function Header() {
  const usersContext = useContext(gitHubUsersContext);

  return (
    <>
      <h1>Github User Search</h1>
      <input
        type="text"
        value={usersContext.inputText}
        onChange={usersContext.onInputChange}
      />
    </>
  );
}
