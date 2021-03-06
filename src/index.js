import "./styles/prism.css"
import React from "react"
import ReactDOM from "react-dom"
import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import {TestnetConfig} from "./config/testnet-config.comp"
import {LocalConfig} from "./config/local-config.comp"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import {Account} from "./pages/account.comp"
import {Event} from "./pages/event.comp"

window.fcl = fcl
window.t = t

const NoMatch = () => <div>Sadly No</div>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/testnet/" component={TestnetConfig} />
      <Route path="/local/" component={LocalConfig} />
      <Switch>
        <Route exact path="/testnet/account/0x:address" component={Account} />
        <Route exact path="/local/account/0x:address" component={Account} />
        <Route exect path="/testnet/event/:eventKey" component={Event} />
        <Route exect path="/local/event/:eventKey" component={Event} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
