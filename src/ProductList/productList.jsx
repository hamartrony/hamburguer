import Produto from "../Product/product"
import './productList.css'

function ProductList({prod, addCart, busca, setFiltro}){
        
    

    


    return(
        <>
            
            <div className="vitrine">
                           
                {prod.map((item) => <Produto item={item} key={item.id} addCart={addCart} button={'Adicionar'}/>)}
               
            </div>
        </>





    )
}

export default ProductList