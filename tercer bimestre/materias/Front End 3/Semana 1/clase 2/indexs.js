//SIMULAMOS QUE VIENE DE UN SERVER
const values = [
    { name: "Esteban Casares", bio: "React Lover"},
    { name: "Katia Prieto", bio: "Developer"},
    { name: "Serafin", bio: "Kahoot game Winner"}
];

const DivCard = () => {
    return (
        <div>
            {
                values.map((value, index) => 
                    <Card 
                        key={index}
                        name={value.name}
                        bio={value.bio}
                    />
                )
            }
        </div>
    )
}

//PROPS es un objecto que almacena TODAS las propiedades que compartas con tu componente.
const Card = ({ name, bio}) => {
    
    return (
        <div>
            <h1>Nombre: {name}</h1>
            <p>Bio: {bio}</p>
        </div>
    )
};

ReactDOM.render(<DivCard />, document.getElementById("root"))