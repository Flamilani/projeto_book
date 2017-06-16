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
			fontSize:"35px",
			textAlign: "center" 
		};
		return (			
			<div className="row">
				<h3 style={TitleStyle}>{ this.props.children }</h3>
				</div>			
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
		var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
		var title = this.state.click ? this.props.textActive : this.props.children;
		return (
			<button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
		);
	}
});

var Form = React.createClass({
	getInitialState: function() {
		return {nome: '', email: '', cidade: 'RJ', assunto: '2', mensagem: ''}
	},

	handleNameChange: function(e) {
		this.setState({nome: e.target.value});
		console.log(this.state.nome);
	},

	render:function() {
		var InputStyle = {
			padding: "10px",
			fontSize: "15px",
			color: "#A7A5A5"
		};
		return (
			<form>
				<div className="form-group">
					<label htmlFor="nome">Nome</label>
					<input style={InputStyle} type="text" onChange={this.handleNameChange} className="form-control" id="nome" placeholder="Nome" required="required" />
				</div>
				<div className="form-group">
					<label htmlFor="email">E-mail</label>
					<input style={InputStyle} type="email" className="form-control" id="email" placeholder="E-mail" required="required" />
				</div>
				<div className="form-group">
					<label htmlFor="cidade">Cidade</label>
					<select defaultValue="SP" className="form-control" id="cidade">
						<option value="PR">Curitiba</option>
						<option value="RJ">Rio de Janeiro</option>
						<option value="SP">São Paulo</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="assunto">Assunto</label>
					<select defaultValue="0" className="form-control" id="assunto">
						<option disable value="0">Selecione...</option>
						<option value="1">Duúvida</option>
						<option value="2">Opinião</option>
						<option value="3">Sugestão</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="mensagem">Mensagem</label>
					<textarea style={InputStyle} className="form-control" id="mensagem" rows="5"></textarea>
				</div>
			</form>
		);
	}
});

var Contact = React.createClass({
	render: function() {
		return (		
			<tr>
				<th scope="row">{this.props.idNumber}</th>
				<td>{this.props.nome}</td>
				<td>{this.props.email}</td>
				<td>{this.props.cidade}</td>
				<td>{this.props.assunto}</td>
				<td>{this.props.children}</td>
			</tr>
			
		)
	}
});

var List = React.createClass({
	render: function() {
		var contactNodes = this.props.data.map(function(contact) {
			return (
				<Contact idNumber={contact.id} nome={contact.nome} email={contact.email} cidade={contact.cidade} assunto={contact.assunto}>
				{contact.mensagem}
			</Contact>
			);			
		});
		return (
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Email</th>
						<th>Cidade</th>
						<th>Assunto</th>
						<th>Mensagem</th>
					</tr>
				</thead>
				<tbody>
					{contactNodes}
				</tbody>
			</table>
		)
	}
});