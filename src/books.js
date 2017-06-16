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

