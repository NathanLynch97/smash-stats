import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UpdateMatchForm extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMatch(this.state.formData, this.props.match.params.id);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Match</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Enemy's Name (required)</label>
            <input
              className="form-control"
              name="enemy"
              value={this.state.formData.enemy}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Stocks (required)</label>
            <input
              className="form-control"
              name="yourStocks"
              value={this.state.formData.yourStocks}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Enemy Stocks</label>
            <input
              className="form-control"
              name="enemyStocks"
              value={this.state.formData.enemyStocks}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE MATCH
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default UpdateMatchForm;