var Nav = React.createClass({
	displayName: "Nav",

	render: function () {
		var NavStyle = {
			margin: "10px",
			backgroundColor: "#4caf50"
		};
		var HrefStyle = {
			color: "#fff",
			fontWeight: "bold"
		};
		return React.createElement(
			"nav",
			{ style: NavStyle, className: "navbar navbar-default" },
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "navbar-header" },
					React.createElement(
						"a",
						{ style: HrefStyle, href: this.props.linkUrl, className: "navbar-brand" },
						this.props.title
					)
				)
			)
		);
	}
});

var Title = React.createClass({
	displayName: "Title",

	render: function () {
		var TitleStyle = {
			color: "#777676",
			fontSize: "25px"
		};
		return React.createElement(
			"span",
			{ style: TitleStyle },
			this.props.children
		);
	}
});

var Result = React.createClass({
	displayName: "Result",

	render: function () {
		var TitleStyle = {
			color: "#000",
			fontSize: "25px",
			textAlign: "center"
		};
		return React.createElement(
			"div",
			{ style: TitleStyle },
			this.props.children
		);
	}
});

var Button = React.createClass({
	displayName: "Button",


	getInitialState: function () {
		return {
			click: false
		};
	},

	toggleClick: function () {
		this.setState({
			click: !this.state.click
		});
	},

	render: function () {
		var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-primary';
		var title = this.state.click ? this.props.textActive : this.props.children;
		return React.createElement(
			"button",
			{ onClick: this.toggleClick, className: btnClass },
			title
		);
	}
});

var Input = React.createClass({
	displayName: "Input",


	render: function () {
		return React.createElement("input", { ref: "search", type: "text", className: "form-control", placeholder: "T\xEDtulo do Livro" });
	}
});