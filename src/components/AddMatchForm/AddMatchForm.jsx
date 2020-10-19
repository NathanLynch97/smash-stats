import React, {Component} from 'react';

class AddMatchForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      enemy: '',
      yourStocks: '',
      enemyStocks: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddMatch(this.state.formData, this.props.match.params.id);
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
        <h1>Add Match</h1>
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
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD MATCH
          </button>
        </form>
      </>
    );
  }
}

export default AddMatchForm;