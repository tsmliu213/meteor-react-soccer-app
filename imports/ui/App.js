import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="This is a raised Button!" />
      </MuiThemeProvider>
    );
  }
}

export default App;
