import Produto from "../Product/product"
import './cart.css'


function Cart({sale, precoTotal, setSale}){
    


    return(

        <>
            {
                sale.length === 0 ? (
                    <div className="sale_vazio">
                        <h2>Carrinho de Compras</h2>
                        <p>Sua sacola está vazia</p>
                        <p>Adicione itens</p>
                    </div>

                ):(
                    <div className="sale">
                        <h2>Carrinho de Compras</h2>
                        <div className="produtos">
                            {sale.map((item, index) => <Produto item={item} key={index} button={'Remover'}/>)}
                        </div>

                        <div className="precoTotal">
                        <p>Total</p> <span>{`R$ ${precoTotal.toFixed(2)}`}</span>
                        <button onClick={() => setSale([])}>Remover Todos</button>
                        </div>
                    </div>)
            }
        

        </>



    )
}

export default Cart