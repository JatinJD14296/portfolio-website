import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/JatinJD14296/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PortfolioPage;
