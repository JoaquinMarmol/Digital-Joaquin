const values = [
    { titulo: "lista de productos en stock", bio: "Manzana Pera Naranja Banana, Kiwi"},
    { subtitulo: "productos en falta", bio: "Durazno, Cereza, Anana"},
];

const DivCard = () => {
    return (
        <div>
            {
                values.map((value, index) => 
                    <Card 
                        key={index}
                        subtitulo={value.subtitulo}
                        titulo={value.titulo}
                        bio={value.bio}
                    />
                )
            }
        </div>
    )
}


const Card = ({ titulo, bio}) => {
    
    return (
        <div>
            <h1>productos en falta {titulo}</h1>
            <li> {bio}</li>
            
        </div>
    )
};

ReactDOM.render(<DivCard />, document.getElementById("root"))