function lista(){
    let array = []
    for (let contador = 0; contador < 11; contador++){
        array.push(<span>{contador},</span>)
    }

    return array
}




function exercicio(){
    
    return (
        
         <div>{lista()}</div>
    )
}





export default exercicio