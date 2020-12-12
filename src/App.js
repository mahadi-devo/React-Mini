import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import BookLists from './components/users/BookLists';

class App extends Component {
  state = {
    lists: [],
    loading: false,
    books: [],
  };

  // Get Book Listname
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=753XosXtqfGf9N1K9irKGmUY2looR6Go&secret=${process.env.SECRET}`
    );

    this.setState({ lists: res.data.results, loading: false });
  }

  // Get Books under a list
  getBooks = async (list_name) => {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/${list_name}?api-key=753XosXtqfGf9N1K9irKGmUY2looR6Go&secret=${process.env.SECRET}`
    );

    this.setState({ books: res.data.results.books, loading: false });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <div className='container'>
                    <h1 className='p-2'>Book Lists Name</h1>
                    <Users
                      loading={this.state.loading}
                      lists={this.state.lists}
                    />
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </div>
        <Route
          exact
          path='/books/:list_name'
          render={(props) => (
            <BookLists
              {...props}
              getBooks={this.getBooks}
              books={this.state.books}
              loading={this.state.loading}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
