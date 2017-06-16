
var Header = React.createClass({
  displayName: "Header",


  render: function () {
    return React.createElement(
      "myElement",
      null,
      React.createElement(Nav, { linkUrl: "index.html", title: "Projeto Books API" })
    );
  }
});

var Search = React.createClass({
  displayName: "Search",


  handleSubmit: function (e) {
    e.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.search);

    this.props.localSubmit(input.value);

    input.value = '';
  },

  render: function () {

    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "div",
          { className: "col-lg-1" },
          React.createElement(
            Title,
            null,
            "Pesquisa:"
          )
        ),
        React.createElement(
          "div",
          { className: "col-lg-6" },
          React.createElement("input", { className: "form-control", placeholder: "T\xEDtulo do Livro", ref: "search" })
        ),
        React.createElement(
          "div",
          { className: "col-lg-2" },
          React.createElement(
            "button",
            { className: "btn btn-primary" },
            " ",
            React.createElement("span", { className: "glyphicon glyphicon-search" }),
            " Buscar Livro"
          )
        )
      )
    );
  }
});

var Books = React.createClass({
  displayName: "Books",


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
      "figure",
      null,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "a",
          { href: this.state.previewLink, target: "_blank" },
          "Ver Livro"
        )
      ),
      React.createElement(
        "figcaption",
        null,
        React.createElement(
          "h2",
          null,
          this.state.title,
          React.createElement(
            "span",
            null,
            authors
          )
        )
      ),
      React.createElement(
        "div",
        { className: "details" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            descrip
          ),
          React.createElement(
            "li",
            null,
            this.state.publishedDate
          ),
          React.createElement(
            "li",
            null,
            this.state.publisher
          ),
          React.createElement(
            "li",
            null,
            this.state.pageCount,
            " pages"
          )
        )
      )
    );
  }

});

var Main = React.createClass({
  displayName: "Main",


  getInitialState: function () {
    return { items: [] };
  },

  localSubmit: function (search) {

    this.setState({ items: [] });
    var component = this;

    $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + encodeURIComponent(search) + "&printType=books&orderBy=newest&maxResults=39", function (data) {

      component.setState(data);
      bookshelf();

      $(".front").css("background", "url(img/no_book_cover.jpg)");

      for (var i = 0; i < component.state.items.length; i++) {
        if (component.state.items[i].volumeInfo.imageLinks != null) {

          $("#book-" + component.state.items[i].id).find(".front").css("background", "url(" + component.state.items[i].volumeInfo.imageLinks.thumbnail + ")");
        }
      }

      $(".front").css("background-size", "100% 100%");
      $(".front").css("border", "2px solid #eee");
      $(".front").css("background-size", "100% 100%");
    });
  },

  render: function () {

    var books = [];

    books = this.state.items.map(function (book) {
      return React.createElement(Books, { key: book.id, item: book.volumeInfo, identifier: book.id });
    });

    if (books.length > 0) {
      content = React.createElement(
        Result,
        null,
        " Resultado: ",
        books,
        " "
      );
    } else {
      content = React.createElement(
        "div",
        { className: "search-icon" },
        React.createElement("span", { className: "glyphicon glyphicon-search" })
      );
    }

    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Search, { localSubmit: this.localSubmit }),
      React.createElement(
        "div",
        { className: "main" },
        React.createElement(
          "div",
          { id: "bookshelf", className: "bookshelf" },
          content
        )
      )
    );
  }

});

ReactDOM.render(React.createElement(Main, null), document.getElementById('search'));