const frutasEnStock = ["Manzana", "Pera", "Naranja", "Banana", "Kiwi"];
const frutasSinStock = ["Durazno", "Cereza", "Anana"];

const DivCard = () =>{
    return (
        <div>
            <h1>Lista de productos en stock:</h1>
            <ul>
                {
                    frutasEnStock.map((value, index) =>
                        <List
                            key = {index}
                            fruta = {value}
                        />
                    )
                }
            </ul>
                
            <h2>Productos en falta:</h2>
                <ul>
                    {
                        frutasSinStock.map((value, index=10) =>
                            <List
                                key = {index}
                                fruta = {value}
                            />
                        )
                    }
                </ul>
        </div>
        
    )
}

const List = ({fruta}) => {
    return ( <li>{fruta}</li>)
};

console.log(DivCard)

ReactDOM.render(<DivCard />, document.getElementById("root"))
    
