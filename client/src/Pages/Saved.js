import React, { Component } from 'react'
import { Container } from "../Components/Grid"
// import Jumbotron from "../Components/Jumbotron"
import API from "../Utils/API"
import SaveList from "../Components/SaveList"

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }
    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }
    render() {
        return (
            <div>
                <Container fluid>
                {this.state.savedBooks.length ? (
                    <SaveList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SaveList>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default Saved;