var Header = React.createClass({
  displayName: 'Header',


  handleSubmit: function (e) {
    e.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.search);

    this.props.localSubmit(input.value);

    input.value = '';
  },

  render: function () {

    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { className: 'form-inline', style: { marginTop: 30 + 'px' }, onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control', placeholder: 'T\xEDtulo do Livro', ref: 'search' }),
          React.createElement(
            'button',
            { className: 'btn btn-default' },
            React.createElement('span', { className: 'glyphicon glyphicon-search' })
          )
        )
      )
    );
  }
});

var Footer = React.createClass({
  displayName: 'Footer',


  render: function () {

    return React.createElement(
      'div',
      { className: 'related' },
      React.createElement(
        'p',
        null,
        'Created by :',
        React.createElement(
          'a',
          { href: 'https://twitter.com/fethica', style: { color: '#FFF' }, target: '_blank' },
          'Fethi El Hassasna'
        )
      ),
      React.createElement(
        'a',
        { href: 'http://tympanus.net/codrops/2014/01/14/look-inside-book-preview-with-bookblock/', target: '_blank' },
        React.createElement('img', { src: 'img/bookpreview.png' }),
        React.createElement(
          'h3',
          null,
          'Book Preview'
        )
      ),
      React.createElement(
        'a',
        { href: 'http://facebook.github.io/react/', target: '_blank' },
        React.createElement('img', { src: 'img/react.png' }),
        React.createElement(
          'h3',
          null,
          'React JS'
        )
      ),
      React.createElement(
        'a',
        { href: 'https://developers.google.com/books/?hl=en', target: '_blank' },
        React.createElement('img', { src: 'img/googlebooks.png' }),
        React.createElement(
          'h3',
          null,
          'Google Books API'
        )
      )
    );
  }

});

var Books = React.createClass({
  displayName: 'Books',


  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {

    if (this.props.item != null) {
      this.setState(this.props.item);
    }
  },
  render: function () {

    var authors = "";

    if (this.state.authors != null) {
      for (var i = 0; i < this.state.authors.length; i++) {

        if (i > 1) {
          authors = ", " + this.state.authors[i];
        } else {
          authors = this.state.authors[i];
        }
      }
    }

    var descrip = "...";

    if (this.state.description != null) {
      descrip = this.state.description.substring(0, 180) + "...";
    }

    var id = "";

    if (this.props.identifier != null) {
      id = "book-" + this.props.identifier;
    }

    return React.createElement(
      'figure',
      null,
      React.createElement('div', { className: 'book', id: id }),
      React.createElement(
        'div',
        { className: 'buttons' },
        React.createElement(
          'a',
          { href: this.state.previewLink, target: '_blank' },
          'Preview'
        ),
        React.createElement(
          'a',
          { href: '#' },
          'Details'
        )
      ),
      React.createElement(
        'figcaption',
        null,
        React.createElement(
          'h2',
          null,
          this.state.title,
          React.createElement(
            'span',
            null,
            authors
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'details' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            descrip
          ),
          React.createElement(
            'li',
            null,
            this.state.publishedDate
          ),
          React.createElement(
            'li',
            null,
            this.state.publisher
          ),
          React.createElement(
            'li',
            null,
            this.state.pageCount,
            ' pages'
          )
        )
      )
    );
  }

});

var Main = React.createClass({
  displayName: 'Main',


  getInitialState: function () {
    return { items: [] };
  },

  localSubmit: function (search) {

    this.setState({ items: [] });
    var component = this;
  },

  render: function () {

    var books = [];

    books = this.state.items.map(function (book) {
      return React.createElement(Books, { key: book.id, item: book.volumeInfo, identifier: book.id });
    });

    if (books.length > 0) {
      content = books;
    } else {
      content = React.createElement(
        'div',
        { className: 'search-icon' },
        React.createElement('span', { className: 'glyphicon glyphicon-search' })
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(Header, { localSubmit: this.localSubmit }),
      React.createElement(
        'div',
        { className: 'main' },
        React.createElement(
          'div',
          { id: 'bookshelf', className: 'bookshelf' },
          content
        )
      )
    );
  }

});

ReactDOM.render(React.createElement(Main, null), document.getElementById("scroll-wrap"));