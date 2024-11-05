import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { StockageContext } from '../App';

export const SpecialMoment = () => {
    const [souvenir, setSouvenir] = useState({})
    const { souvenirs, setSouvenirs} = useContext(StockageContext);

    const handleChange = ({ target }) => {
        setSouvenir({ note: target.value, date: new Date() })
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setSouvenirs(JSON.parse(localStorage.getItem("liste")) || [])
        if (souvenir.note !== "") {
            setSouvenirs((prev) => [...prev, souvenir])
            setSouvenir({});
        }
        location.reload();
    }

    const addToLocalStorage = () => {
        localStorage.setItem("liste", JSON.stringify(souvenirs));
    }
    useEffect(() => {
        addToLocalStorage();
    }, [souvenirs])

    return (
        <Form onSubmit={handleAdd}>
            <FloatingLabel controlId="floatingTextarea2" label="Écrivez un moment spécial...">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '200px' }}
                    onChange={handleChange}
                    value={souvenir.note || ""}
                />
            </FloatingLabel>
            <button
                style={{ backgroundColor: '#833b69', border: "none", marginTop: "3%", borderRadius: "3px", paddingBlock: '2%', paddingInline: '4%', color: "#30b8b4", fontWeight: "bold" }}
            >
                Ajouter
            </button>
        </Form>
    )
}
