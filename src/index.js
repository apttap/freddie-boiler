import React from 'react';
import ReactDOM from "react-dom";

import App from "./js/components/App";


const entry = document.getElementById("container");

entry ? ReactDOM.render(<App />, entry) : false;
