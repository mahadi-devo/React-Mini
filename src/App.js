import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    books: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=753XosXtqfGf9N1K9irKGmUY2looR6Go&secret=${process.env.SECRET}`
    );

    this.setState({ books: res.data.results.books, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
