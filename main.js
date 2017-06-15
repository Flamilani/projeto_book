var Nav = React.createClass({
	render:function() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
					<a href={ this.props.linkUrl } className="navbar-brand">
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
		return (
			<div className="container">
				<div className="row">
					<h3>{ this.props.title }</h3>
				</div>
			</div>
		);
	}
});

 ReactDOM.render(
        <Nav linkUrl="index.html" title="Teste React" />,
        document.getElementById('nav')
 );

 ReactDOM.render(
        <Title title="Projeto" />,
        document.getElementById('title')
 );