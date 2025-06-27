import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa/empresa"
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ClienteConsumiu from "../negocio/cliente/clienteConsumiu";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import CadastrarProduto from "../negocio/produto/cadastrarProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import AtualizaServico from "../negocio/servico/atualizarServiço";
import CadastroServico from "../negocio/servico/cadastrarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ListagemServico from "../negocio/servico/listagemServico";
import Produto from "../modelo/servico-produto/produto";
import Cliente from "../modelo/cliente/cliente";
import CPF from "../modelo/cliente/cpf";
import Genero from "../modelo/cliente/genero";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()

insertProdutos()
insertClientes()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`-----------------------------------------------`)
    console.log(`-------------------  CLIENTE  -----------------`)
    console.log(`-----------------------------------------------`)
    console.log(`           1 - Cadastrar cliente`);
    console.log(`           2 - Listagem`);
    console.log(`           3 - Atualizar Cliente`)
    console.log(`           4 - Deletar Cliente`)
    console.log(`           5 - Registrar Produtos ou Serviço`)
    console.log(`-----------------------------------------------`)
    console.log(`------------------- PRODUTO -------------------`)
    console.log(`-----------------------------------------------`)
    console.log(`           6 - Cadastro de Produto`)
    console.log(`           7 - Listagem`)
    console.log(`           8 - Atualizar Produto`)
    console.log(`           9 - Deletar Produto`)
    console.log(`-----------------------------------------------`)
    console.log(`------------------- SERVIÇO -------------------`)
    console.log(`-----------------------------------------------`)
    console.log(`          10 - Cadastro de Serviço`)
    console.log(`          11 - Listagem`)
    console.log(`          12 - Atualizar Serviço`)
    console.log(`          13 - Deletar Serviço`)
    console.log(`-----------------------------------------------`)
    console.log(`           0 - Sair`);
    console.log(`-----------------------------------------------`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualizar()
            break
        case 4:
            let deletar = new DeletarCliente(empresa.getClientes)
            deletar.deletar()
            break
        case 5:
            let consumo = new ClienteConsumiu(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            consumo.consumo()
            break
        case 6:
            let cadastroProduto = new CadastrarProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break
        case 7:
            let listagemProduto = new ListagemProdutos(empresa.getClientes, empresa.getProdutos)
            listagemProduto.listar()
            break
        case 8:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break
        case 9:
            let deletarProduto = new DeletarProduto(empresa.getProdutos)
            deletarProduto.deletar()
            break
        case 10:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break
        case 11:
            let listagemServico = new ListagemServico(empresa.getClientes, empresa.getServicos)
            listagemServico.listar()
            break
        case 12:
            let atualizarServico = new AtualizaServico(empresa.getServicos)
            atualizarServico.atualizar()
            break
        case 13:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

function insertProdutos() {
    const produtosDeBeleza = [
        { nome: "Sabonete de Argila", valor: 25.99 },
        { nome: "Óleo de Coco Capilar", valor: 15.49 },
        { nome: "Balm Hidratante", valor: 12.99 },
        { nome: "Colônia de Lavanda", valor: 45.99 },
        { nome: "Base Mineral", valor: 30.99 },
        { nome: "Máscara de Abacate", valor: 18.99 },
        { nome: "Escova de Bambu", valor: 29.99 },
        { nome: "Tônico Revitalizante", valor: 35.99 },
        { nome: "Esmalte Vegano", valor: 8.99 },
        { nome: "Condicionador Natural", valor: 22.99 },
        { nome: "Sombra Cremosa", valor: 10.99 },
        { nome: "Gel de Aloe Vera", valor: 14.99 },
        { nome: "Lenço Demaquilante", valor: 7.99 },
        { nome: "Loção Refrescante", valor: 20.99 },
        { nome: "Iluminador em Bastão", valor: 18.99 },
        { nome: "Gloss Transparente", valor: 9.99 },
        { nome: "Pó Translúcido", valor: 14.99 },
        { nome: "Água Termal", valor: 12.99 },
        { nome: "Spray de Brilho", valor: 16.99 },
        { nome: "Máscara Detox", valor: 8.99 },
        { nome: "Esmalte Perolado", valor: 11.99 },
        { nome: "Delineador em Gel", valor: 13.99 },
        { nome: "Bálsamo de Camomila", valor: 6.99 },
        { nome: "Shampoo Herbal", valor: 14.99 },
        { nome: "Esfoliante de Café", valor: 16.99 },
        { nome: "Blush Mineral", valor: 10.99 },
        { nome: "Creme Nutritivo", valor: 9.99 },
        { nome: "Lápis Iluminador", valor: 7.99 },
        { nome: "Colônia Amadeirada", valor: 55.99 },
    ]
    produtosDeBeleza.forEach(produtoInfo => {
        const { nome, valor } = produtoInfo;
        const produto = new Produto(nome, valor);
        empresa.getProdutos.push(produto);
    });
}
function insertClientes() {
    const clientes = [
        new Cliente("Carlos Henrique", "Carlos", new CPF("32165498700", recebeData("15/01/2020")), new Genero("Masculino")),
        new Cliente("Fernanda Lima", "Fernanda", new CPF("65498732100", recebeData("22/02/2019")), new Genero("Feminino")),
        new Cliente("Juliana Prado", "Juliana", new CPF("78945612311", recebeData("10/03/2018")), new Genero("Feminino")),
        new Cliente("Roberto Nunes", "Roberto", new CPF("85296374122", recebeData("05/04/2017")), new Genero("Masculino")),
        new Cliente("Patricia Souza", "Patricia", new CPF("96385274133", recebeData("12/05/2016")), new Genero("Feminino")),
        new Cliente("Eduardo Ramos", "Eduardo", new CPF("14725836944", recebeData("18/06/2015")), new Genero("Masculino")),
        new Cliente("Camila Torres", "Camila", new CPF("25836914755", recebeData("25/07/2014")), new Genero("Feminino")),
        new Cliente("Bruno Martins", "Bruno", new CPF("36914725866", recebeData("30/08/2013")), new Genero("Masculino")),
        new Cliente("Aline Rocha", "Aline", new CPF("74185296377", recebeData("09/09/2012")), new Genero("Feminino")),
        new Cliente("Gabriel Silva", "Gabriel", new CPF("85274196388", recebeData("14/10/2011")), new Genero("Masculino")),
        new Cliente("Renata Dias", "Renata", new CPF("96374185299", recebeData("21/11/2010")), new Genero("Não Binário")),
        new Cliente("Thiago Costa", "Thiago", new CPF("15935725800", recebeData("28/12/2009")), new Genero("Masculino")),
        new Cliente("Larissa Melo", "Larissa", new CPF("35715948611", recebeData("03/01/2008")), new Genero("Não Identificado")),
        new Cliente("Vinicius Teixeira", "Vinicius", new CPF("48635715922", recebeData("17/02/2007")), new Genero("Masculino")),
        new Cliente("Beatriz Faria", "Beatriz", new CPF("95175385233", recebeData("29/03/2006")), new Genero("Feminino")),
        new Cliente("Otávio Pires", "Otávio", new CPF("75395145644", recebeData("11/04/2005")), new Genero("Não Binário")),
        new Cliente("Helena Duarte", "Helena", new CPF("45675395155", recebeData("23/05/2004")), new Genero("Não Binário")),
        new Cliente("Lucas Barros", "Lucas", new CPF("15945675366", recebeData("07/06/2003")), new Genero("Não Binário")),
        new Cliente("Sofia Cardoso", "Sofia", new CPF("35745615977", recebeData("19/07/2002")), new Genero("Não Identificado")),
        new Cliente("Matheus Gomes", "Matheus", new CPF("65415935788", recebeData("01/08/2001")), new Genero("Não Identificado")),
        new Cliente("Isabela Pinto", "Isabela", new CPF("95145675399", recebeData("13/09/2000")), new Genero("Não Binário")),
        new Cliente("Felipe Azevedo", "Felipe", new CPF("35795145600", recebeData("25/10/1999")), new Genero("Não Identificado")),
        new Cliente("Amanda Ribeiro", "Amanda", new CPF("65435795111", recebeData("06/11/1998")), new Genero("Não Binário")),
        new Cliente("Diego Castro", "Diego", new CPF("95165435722", recebeData("18/12/1997")), new Genero("Não Identificado")),
        new Cliente("Marina Lopes", "Marina", new CPF("75315945633", recebeData("30/01/1996")), new Genero("Não Binário")),
        new Cliente("Paulo Mendes", "Paulo", new CPF("45695175344", recebeData("12/02/1995")), new Genero("Não Identificado")),
        new Cliente("Julio Freitas", "Julio", new CPF("15975345655", recebeData("24/03/1994")), new Genero("Não Binário")),
        new Cliente("Leticia Fernandes", "Leticia", new CPF("35715975366", recebeData("05/04/1993")), new Genero("Não Identificado"))
    ]
    clientes.forEach(cliente => {
        empresa.getClientes.push(cliente)
    })


}
function recebeData(data: string): Date {
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    return new Date(ano, mes, dia);
}