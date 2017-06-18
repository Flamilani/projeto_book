var Nav = React.createClass({
  render:function() {
    var NavStyle = {
      margin: "10px",
      backgroundColor: "#4caf50"      
    };
    var HrefStyle = {
      color: "#fff",
      fontWeight: "bold"
    };
    return (
      <nav style={NavStyle} className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
          <a style={HrefStyle} href={ this.props.linkUrl } className="navbar-brand">
            { this.props.title }
          </a>
          </div>
        </div>
      </nav>
    );
  }
});

var Title = React.createClass({
  render:function() {
    var TitleStyle = {
      color: "#777676",
      fontSize:"25px"       
    };
    return (    
      <span style={TitleStyle}>{ this.props.children }</span>
          
    );
  }
});

var Result = React.createClass({
  render:function() {
    var TitleStyle = {
      color: "#000",
      fontSize:"25px",
      textAlign: "center",      
    };
    return (    
      <div style={TitleStyle}>{ this.props.children }</div>
          
    );
  }
});

var Button = React.createClass({  
  
  getInitialState: function() {
    return {
      click:false
    };
  },

  toggleClick: function() {
    this.setState({
      click: !this.state.click
    });
  },

  render:function() {
    var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-primary';
    var title = this.state.click ? this.props.textActive : this.props.children;
    return (
      <button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
    );
  }
});

var Input = React.createClass({ 

  render:function() {   
    return (
      <input ref="search" type="text" className="form-control" placeholder="Título do Livro" />   
    );
  }
});



var Header = React.createClass({

  render: function() {
    return(
      <myElement>
        <Nav linkUrl="index.html" title="Projeto Books API" />           
      </myElement>
    )
  }
});



var Search = React.createClass({

  handleSubmit : function (e) {
    e.preventDefault();
    var input = ReactDOM.findDOMNode(this.refs.search);

    this.props.localSubmit(input.value);

    input.value = '';

  },

  render : function () {

    return (

     
        <div className="container">             
          <form onSubmit={this.handleSubmit}>           
                 <div className="col-lg-1">
                  <Title>
              Pesquisa:   
              </Title>
              </div>
                   <div className="col-lg-6"> 
                    <input className="form-control" placeholder="Título do Livro" ref="search"/>
                    </div>
                    <div className="col-lg-2">  
                          <button className="btn btn-primary"> <span className="glyphicon glyphicon-search"></span> Buscar Livro</button>
                          </div>
           
          </form>
        </div>
      

    );
  }
});

var Books = React.createClass({

  getInitialState : function () {
    return ({});
  },
  componentDidMount : function () {

    if (this.props.item != null) {
      this.setState(this.props.item);
    }

  },
  render : function () {

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

    return (


  
      <figure>
        <div className="buttons"><a href={this.state.previewLink} target="_blank">Ver Livro</a></div>
        <figcaption><h2>{this.state.title}<span>{authors}</span></h2></figcaption>
        <div className="details">
          <ul>
            <li>{descrip}</li>
            <li>{this.state.publishedDate}</li>
            <li>{this.state.publisher}</li>
            <li>{this.state.pageCount} pages</li>
          </ul>
        </div>
      </figure>

    );
  }

});

var Main = React.createClass({

  getInitialState : function () {
    return ({items: []});
  },

  localSubmit : function (search) {

    this.setState({items: []});
    var component = this;

    $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + encodeURIComponent(search) + "&printType=books&orderBy=newest&maxResults=39", function (data) {

      component.setState(data);      

      $(".front").css("background", "url(img/no_book_cover.jpg)");

      for (var i = 0; i < component.state.items.length; i++) {
        if (component.state.items[i].volumeInfo.imageLinks != null) {

          $("#book-" + component.state.items[i].id).find(".front").css("background", "url("+ component.state.items[i].volumeInfo.imageLinks.thumbnail +")");
        }
      }

      $(".front").css("background-size", "100% 100%");
      $(".front").css("border", "2px solid #eee");
      $(".front").css("background-size", "100% 100%");

    });

  },

  render : function () {

    var books = [];

    books = this.state.items.map(function(book) {
      return <Books key={book.id} item={book.volumeInfo} identifier={book.id} />;
    });

    if (books.length > 0) {
      content = <Result> Resultado: {books} </Result>;  
     
    } else {
      content = <div className="search-icon"><span className="glyphicon glyphicon-search"></span></div>
    }

    return (
      <div>
      <Header />
      <Search localSubmit={this.localSubmit}/>
        <div className="main">
          <div id="bookshelf" className="bookshelf">
            {content}
          </div>
        </div>
       
      </div>
    );

  }

});


  ReactDOM.render(
        <Main />,
        document.getElementById('search')
 );
