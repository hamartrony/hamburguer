import './product.css'


function Produto({item, button, addCart}){

    
  
   


    return(
        <div className="produto">
            <div className='imagem'>
                <img src={item.img} alt={item.name}></img>
            </div>
            <div className='info'>
                {button === 'Adicionar' ? (<h2>{item.name}</h2>) : (<h2>{`${item.name.slice(0, 15)}...`}</h2>)}
                <p>{item.category}</p>
                <span>{`R$ ${item.price.toFixed(2)}`}</span>
                <button className='add' onClick={() => {addCart(item)}}>{button}</button>
                <button className='del' >{button}</button>
            </div>
        </div>



    )
}

export default Produto