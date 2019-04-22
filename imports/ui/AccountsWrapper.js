import React from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";

class AccountsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }

  componentWillunmount() {
    Blaze.remove(this.view);
  }

  render() {
    return <span ref="container" />;
  }
}

export default AccountsWrapper;
