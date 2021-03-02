import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const MyLink = (props: any) => (
  <a
    css={css`
      color: hotpink;
      &:hover {
        color: darkorchid;
      }
    `}
    {...props}
  />
);

function App() {
  return (
    <Router>
      <nav
        css={css`
          background-color: var(--bg-color);
        `}
      >
        <ul
          css={css`
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0px;
            height: var(--navbar-height);
            > :not(:last-child) {
              margin-right: 10px;
            }
            a,
            a:visited {
              color: white;
              text-decoration: none;
            }
            a:hover {
              color: var(--link-hover);
            }
          `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/users">
          <div>Users</div>
        </Route>
        <Route path="/">
          <Root />
        </Route>
      </Switch>
    </Router>
  );
}

const Root = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <MyLink>My Link</MyLink>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
