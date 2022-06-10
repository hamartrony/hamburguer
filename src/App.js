import { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";
import Cart from "./Cart/cart";
import ProductList from "./ProductList/productList";

function App() {
  const [prod, setProd] = useState([]);
  const [sale, setSale] = useState([]);
  const [filtro, setFiltro] = useState([]);

  function addCart(item) {
    //Adicionar no carrinho ##################################
    if (sale.find((produto) => produto.id === item.id)) {
      alert("Voce ja adicionou este produto");
    } else {
      setSale([...sale, item]);
    }
  }

  const precoTotal = sale.reduce((total, atual) => total + atual.price, 0);

  function busca(text) {
    //FILTRO por palavras
    const leng = text.length;

    const produtoNam = prod.filter(
      (item) => item.name.slice(0, leng).toLowerCase() === text.toLowerCase()
    );
    const produtoCat = prod.filter(
      (item) =>
        item.category.slice(0, leng).toLowerCase() === text.toLowerCase()
    );

    setFiltro([...filtro, ...produtoCat, ...produtoNam]);
    console.log(filtro);
  }

  // function delCart(item){  // Remover do carrinho ###########################
  //   console.log(item)
  //   const deleta = sale.filter((produto) => produto.count !== item.count)
  //   setSale(deleta)

  // }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProd(response));
  }, []);

  const [pesq, setPesq] = useState(); // armazena teto da pesquisa
  const texto = (e) => {
    setPesq(e.target.value);
  }; //

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <h1>Burguer</h1>
          <h2>Boi Ralado</h2>
          <div className="pesquisa">
            <input
              type="text"
              placeholder="Sanduiche"
              onChange={(e) => {
                texto(e);
                setFiltro([]);
              }}
            />
            <button onClick={() => busca(pesq)}>Pesquisar</button>
          </div>
        </div>
        <div className="main">
          {filtro.length > 0 ? (
            <ProductList
              prod={filtro}
              addCart={addCart}
              busca={busca}
              setFiltro={setFiltro}
            />
          ) : (
            <ProductList
              prod={prod}
              addCart={addCart}
              busca={busca}
              setFiltro={setFiltro}
            />
          )}
          <Cart sale={sale} precoTotal={precoTotal} setSale={setSale} />
        </div>
      </header>
    </div>
  );
}

export default App;
