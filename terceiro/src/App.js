import {useState} from 'react';
function App() {

  const [produto, setProduto] = useState(
    [
      {
        id: 500,
        nome: "Mouse",
        categoria: "informatica",
        preco: 50.50,
      },
      {
        id: 501,
        nome: "Teclado",
        categoria: "informatica",
        preco: 150.90,
      },
    ]
  );
  
  console.log(produto);
  return (
  <div>
    <button 
      onClick={() => {
        let id = prompt("Entre com id do produto");
        let nome = prompt("Entre com o nome do produto");
        let categoria = prompt("Entre com a categoria do produto");
        let preco = prompt("Entre com o preco do produto");
      
        setProduto(
          produto.concat({
            id: 502,
            nome: "Smartphone", 
            categoria: "Telefonia", 
            preco: 5000,
          })
        );
      }}
    >
      Adicionar produto
    </button>

    <h2>Produtos Cadastrados</h2>

    {produto.map((item,index) => (
    
    <div key={index}>
      <h3>{item.nome}</h3>
      <ul>
        <li>Código do Produto {item.id}</li>
        <li>Categoria do Produto {item.categoria}</li>
        <li>Preço do Produto {item.preco}</li>
      </ul>
    </div>
    
    ))}

  </div>
  );
}

export default App;
