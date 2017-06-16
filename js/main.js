var data = [];

var Page = React.createClass({
	displayName: "Page",

	getInitialState: function () {
		return {
			data: [{ id: "1", nome: "Flavio", email: "flavio@email.com", cidade: "PR", assunto: "2", mensagem: "Texto de mensagem..." }, { id: "2", nome: "Erica", email: "erica@email.com", cidade: "RJ", assunto: "1", mensagem: "Texto de mensagem 2..." }] };
	},
	render: function () {
		return React.createElement(
			"myElement",
			null,
			React.createElement(Nav, { linkUrl: "index.html", title: "React Projeto" }),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					Title,
					null,
					"Projeto Books"
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(Form, null),
					React.createElement(
						Button,
						{ textActive: "Carregando..." },
						"Enviar"
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(List, { data: this.state.data }),
					React.createElement("br", null),
					React.createElement("br", null),
					React.createElement("br", null)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));