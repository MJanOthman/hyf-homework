import { useEffect, useState } from "react";
import { Header } from "./HeaderComponent";
import { GitHubUsersProvider } from "./context.js";
import { UsersList } from "./usersListComponent";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  async function fetchGithubApi() {
    const response = await fetch(
      `https://api.github.com/search/users?q=${inputValue}`
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    if (inputValue !== "") {
      setIsLoading(true);
      fetchGithubApi().then((data) => setUsers(data.items));
      setIsLoading(false);
    }
  }, [inputValue]);

  const onChanogeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const contextValue = {
    onInputChange: onChanogeHandler,
    isloading: isloading,
    users: users,
    inputText: inputValue,
  };

  return (
    <div className="App">
      <GitHubUsersProvider value={contextValue}>
        <Header />
        {isloading ? <h4>Loading...</h4> : ""}
        <UsersList />
      </GitHubUsersProvider>
    </div>
  );
}

export default App;
