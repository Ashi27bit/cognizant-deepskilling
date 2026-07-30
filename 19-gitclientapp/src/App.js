import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const username = 'techiesyed';

  useEffect(() => {
    const client = new GitClient();
    client.getRepositories(username).then(data => setRepos(data));
  }, []);

  return (
    <div>
      <h1>Repositories for {username}</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
