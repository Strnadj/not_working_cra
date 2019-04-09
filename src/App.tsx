import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { injectable, inject, Container } from 'inversify';

@injectable()
class Test {
  constructor() {
    //
  }

  hello(): string {
    return "TEST";
  }
}

const TYPES = {
  Test: Symbol("TEST"),
  TestUsage: Symbol("TESTUSAGE")
}

@injectable()
class TestUsage {
  private _test: Test;

    public constructor(
        @inject(TYPES.Test) test: Test,
    ) {
      this._test = test;
    }

    public pokus() {
      console.log(this._test.hello());
    }

}

var container = new Container();
container.bind<Test>(TYPES.Test).to(Test);
container.bind<TestUsage>(TYPES.TestUsage).to(TestUsage);

const f = container.get<TestUsage>(TYPES.TestUsage);
f.pokus();


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
