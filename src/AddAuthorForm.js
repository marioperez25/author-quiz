import  React from 'react';
import './AddAuthorForm.css';

class AuthorForm extends React.Component{
    constructor(props){ // get props in
        super(props); // push props up
        this.state = {
            name: '',
            imageUrl: '',
            books: ['book 1', 'book 2']
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); // prevent page reload
        this.props.onAddAuthor(this.state);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
                {this.state.books.map((book) => <p>{book}</p>)}
                <input type="submit" value="Add" />
            </div>
        </form>
    }
}

function AddAuthorForm({match, onAddAuthor}){
    return <div className="AddAuthorForm">
      <h1>Add Author:</h1>
      <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>
  }

export default AddAuthorForm;