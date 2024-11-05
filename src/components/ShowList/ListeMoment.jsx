import { useContext, useEffect } from "react"
import { CardMoment } from "./CardMoment"
import { Row } from "react-bootstrap"
import { StockageContext } from "../../App";

export const ListeMoment = () => {
    const { souvenirs, setSouvenirs} = useContext(StockageContext);

    useEffect(() => {
        const liste = JSON.parse(localStorage.getItem("liste")) || [];
        const sortedListe = liste.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSouvenirs(sortedListe);
    }, []);

    const handleDelete = (id) => {
        const updatedSouvenirs = souvenirs.filter((_, index) => index !== id);
        setSouvenirs(updatedSouvenirs);
        localStorage.setItem("liste", JSON.stringify(updatedSouvenirs));
    };
    
    const handleSave = (id, updatedNote) => {
        const updatedSouvenirs = souvenirs.map((souvenir, index) =>
            index === id ? { ...souvenir, note: updatedNote } : souvenir
        );
        setSouvenirs(updatedSouvenirs);
        localStorage.setItem("liste", JSON.stringify(updatedSouvenirs));
    };

    return (
        <Row>
            <h4>Liste des Souvenirs</h4>
            {souvenirs.length !== 0 ?
                souvenirs.map((souvenir, id) =>
                    <CardMoment
                        key={id}
                        souvenir={souvenir}
                        onDelete={() => handleDelete(id)}
                        onSave={(updatedNote) => handleSave(id, updatedNote)}

                    />
                ) :
                <p>Liste Vide</p>
            }
        </Row>
    )
}
