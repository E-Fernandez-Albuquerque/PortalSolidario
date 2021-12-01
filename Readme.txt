0 - Instalar o Node.js

	0.1 O download pode ser realizado a partir do  endereço: 'https://nodejs.org/en/'
	0.2 Realizar o download da versão LTS - Atualmente na versão 16.13.1
	0.3 Instalar o node.js

1 - Instalar o Command Line Interface do Angular
	
	1.1 Acessar a pasta do projeto (/PortalSolidario) via terminal 
	1.2 Executar o comando para instalação do CLI
		1.2.1 Para sistemas operacionais Windows, utilizar o comando "npm i -g @angular/cli"
		1.2.2 Para sistemas operacionais Linux é necessário permissão de superusuário: "sudo npm i -g @angular/cli"

2 - Reiniciar o sistema operacional

3 - Inicializar o servidor local
	3.1 Acessar a pasta do projeto a partir do terminal
	3.2 Acessar a pasta '/frontend'
	3.3 Executar o comando 'npm start'
	3.4 Aguardar a compilação do projeto

	Obs: Caso tenha problemas na compilação, utilizar os comandos:
		npm install
		ng update
		npm update
	
	Obs2: Caso tenha problemas na atualização do 'ng update', referente à execução de scripts no Sistema operacional Windows (utilizar o PowerShell como administrador):
		Set-ExecutionPolicy -ExecutionPolicy AllSigned

4 - Acessar o servidor local
	4.1 Acessar http://localhost:8000 a partir do naveador
	