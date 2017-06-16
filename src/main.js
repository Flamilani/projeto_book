var data = [
	
];


var Page = React.createClass({
	getInitialState: function() {
		return{
			data: [
			{id:"1", nome: "Flavio", email: "flavio@email.com", cidade: "PR", assunto: "2" , mensagem: "Texto de mensagem..."}, 
			{id:"2", nome: "Erica", email: "erica@email.com", cidade: "RJ", assunto: "1" , mensagem: "Texto de mensagem 2..."}
		]}		
	},
	render: function() {
		return(
			<myElement>
				<Nav linkUrl="index.html" title="React Projeto" />
				<div className="container">
				<Title>
				Projeto Books				
				</Title>
					<div className="row">
						<Form />
				 		<Button textActive="Carregando...">Enviar</Button>
				 	</div>
				 	<div className="row">
				 		<List data={this.state.data} />
				 		<br /><br /><br />
				 	</div>
				</div>
			</myElement>
		)
	}
});


  ReactDOM.render(
        <Page />,
        document.getElementById('page')
 );
