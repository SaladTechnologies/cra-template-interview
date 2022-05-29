import type { FunctionComponent } from 'react';

export interface AppProps {}

export const App: FunctionComponent<AppProps> = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">
        Hello, World!
      </h1>
      <p className="block">
        This is a TypeScript, React, and Bulma powered web application!
      </p>
      <p className="block">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  </section>
);
