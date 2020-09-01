import React from 'react';
import './App.css';

import ThreadsSection from './features/threads/ThreadsSection';

function App() {
  return (
    <div className="app">
      <div className="app-container">
      <header className="app-header">
        <h1>Agora</h1>
      </header>
      <aside className="app-sidebar">
        <ThreadsSection></ThreadsSection>
      </aside>
      <main className="app-main">
        <h2>Comments</h2>
      </main>
      <footer className="app-footer">
        <small>Made with <span className="emoji">🤍</span>in Barcelona by <a href="https://github.com/ferranbx" target="blank" className="link">ferranbx</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
