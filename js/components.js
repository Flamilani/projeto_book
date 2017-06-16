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
			fontSize: "35px",
			textAlign: "center"
		};
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"h3",
				{ style: TitleStyle },
				this.props.children
			)
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
		var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
		var title = this.state.click ? this.props.textActive : this.props.children;
		return React.createElement(
			"button",
			{ onClick: this.toggleClick, className: btnClass },
			title
		);
	}
});

var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		return { nome: '', email: '', cidade: 'RJ', assunto: '2', mensagem: '' };
	},

	handleNameChange: function (e) {
		this.setState({ nome: e.target.value });
		console.log(this.state.nome);
	},

	render: function () {
		var InputStyle = {
			padding: "10px",
			fontSize: "15px",
			color: "#A7A5A5"
		};
		return React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "nome" },
					"Nome"
				),
				React.createElement("input", { style: InputStyle, type: "text", onChange: this.handleNameChange, className: "form-control", id: "nome", placeholder: "Nome", required: "required" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "email" },
					"E-mail"
				),
				React.createElement("input", { style: InputStyle, type: "email", className: "form-control", id: "email", placeholder: "E-mail", required: "required" })
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "cidade" },
					"Cidade"
				),
				React.createElement(
					"select",
					{ defaultValue: "SP", className: "form-control", id: "cidade" },
					React.createElement(
						"option",
						{ value: "PR" },
						"Curitiba"
					),
					React.createElement(
						"option",
						{ value: "RJ" },
						"Rio de Janeiro"
					),
					React.createElement(
						"option",
						{ value: "SP" },
						"S\xE3o Paulo"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "assunto" },
					"Assunto"
				),
				React.createElement(
					"select",
					{ defaultValue: "0", className: "form-control", id: "assunto" },
					React.createElement(
						"option",
						{ disable: true, value: "0" },
						"Selecione..."
					),
					React.createElement(
						"option",
						{ value: "1" },
						"Du\xFAvida"
					),
					React.createElement(
						"option",
						{ value: "2" },
						"Opini\xE3o"
					),
					React.createElement(
						"option",
						{ value: "3" },
						"Sugest\xE3o"
					)
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "mensagem" },
					"Mensagem"
				),
				React.createElement("textarea", { style: InputStyle, className: "form-control", id: "mensagem", rows: "5" })
			)
		);
	}
});

var Contact = React.createClass({
	displayName: "Contact",

	render: function () {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"th",
				{ scope: "row" },
				this.props.idNumber
			),
			React.createElement(
				"td",
				null,
				this.props.nome
			),
			React.createElement(
				"td",
				null,
				this.props.email
			),
			React.createElement(
				"td",
				null,
				this.props.cidade
			),
			React.createElement(
				"td",
				null,
				this.props.assunto
			),
			React.createElement(
				"td",
				null,
				this.props.children
			)
		);
	}
});

var List = React.createClass({
	displayName: "List",

	render: function () {
		var contactNodes = this.props.data.map(function (contact) {
			return React.createElement(
				Contact,
				{ idNumber: contact.id, nome: contact.nome, email: contact.email, cidade: contact.cidade, assunto: contact.assunto },
				contact.mensagem
			);
		});
		return React.createElement(
			"table",
			{ className: "table" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"ID"
					),
					React.createElement(
						"th",
						null,
						"Nome"
					),
					React.createElement(
						"th",
						null,
						"Email"
					),
					React.createElement(
						"th",
						null,
						"Cidade"
					),
					React.createElement(
						"th",
						null,
						"Assunto"
					),
					React.createElement(
						"th",
						null,
						"Mensagem"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				contactNodes
			)
		);
	}
});