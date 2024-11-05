import {  Col, FloatingLabel, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

export const CardMoment = (props) => {
    const { note, date } = props.souvenir;

    const [show, setShow] = useState(false);
    const [editNote, setEditNote] = useState(note); 

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setEditNote(note); 
        setShow(true);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };
    const handleSave = () => {
        props.onSave(editNote); 
        handleClose(); 
    };

    return (
        <Col xs={12} md={5} className="card-moment">
            <span style={{ marginBottom: "1%", fontWeight: "bold" }}>{formatDate(date)}</span><br />
            <p className="px-3 pt-2 mb-0">{note}</p>
            <div style={{ float: "right" }}>
                <button className="delete-btn" onClick={props.onDelete}><MdDelete /></button>
                <button className="mx-3 modif-btn" onClick={handleShow}><FaPencilAlt /></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modifier ce souvenir</Modal.Title>
                </Modal.Header>
                <Form className="p-3">
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                            value={editNote} 
                            onChange={(e) => setEditNote(e.target.value)} 
                        />
                    </FloatingLabel>
                    <button
                        style={{ borderColor: "rgb(3, 90, 57)", marginTop: "3%", borderRadius: "3px", paddingBlock: '1%', paddingInline: '3%', fontWeight: "bold", color: "rgb(3, 90, 57)" }}
                        onClick={handleSave}
                    >
                        Modifier
                    </button>
                    <button
                        style={{ borderColor: "rgb(149 12 12)", marginTop: "3%", marginLeft: "3%", borderRadius: "3px", paddingBlock: '1%', paddingInline: '3%', fontWeight: "bold", color: "rgb(149 12 12)" }}
                        onClick={handleClose}
                    >
                        Annuler
                    </button>
                </Form>
            </Modal>
        </Col>
    );
}
