import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchWithRefAttribute onSearch={value => alert('SearchWithRefAttribute: ' + value)} />
        <SearchWithLocalState onSearch={value => alert('SearchWithLocalState: ' + value)} />
      </div>
    );
  }
}

class SearchWithRefAttribute extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { value } = this.input;

    this.props.onSearch(value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          ref={node => this.input = node}
          type="text"
        />
        <button type="submit">
          Search With Ref Attribute
        </button>
      </form>
    );
  }
}

class SearchWithLocalState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      query: value
    });
  }

  onSubmit(event) {
    const { query } = this.state;

    this.props.onSearch(query);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          type="text"
        />
        <button type="submit">
          Search With Local State
        </button>
      </form>
    );
  }
}

export default App;
