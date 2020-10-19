import React, {Component} from 'react';

class AddNotePage extends Component {
  state = {
    invalidForm: true,
    formData: {
      description: '',
    }
  };

  
  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddNote(this.state.formData, this.props.match.params.id);
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
        <h1>Add Note</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Note's Description (required)</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD Note
          </button>
        </form>
      </>
    );
  }
}
export default AddNotePage;