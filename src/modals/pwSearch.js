import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import axios from "axios";

const PwSearch = ({show, onHide}) => {

    const baseUrl = "http://localhost:8080"

    const [findid,setFindId] = useState({
        name:"",
        birth:"",
        email:"",
        role:"U",
    });

    const handleChange = (e) => {
        if(e.target.name === "flexRadioDefault"){
            setFindId({
                ...findid,
                role: e.target.value,
            });
        }else{
            setFindId({
                ...findid,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(findid.name);
        console.log(findid.birth);
        console.log(findid.email);
        console.log(findid.role);
        await axios
            .post(baseUrl + "/findpw", findid)
            .then((response) =>{
                if(response.data != null){
                    alert(response.data);
                }else{
                    alert("등록되지 않은 이름/생일/이메일입니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }//

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        비밀번호 찾기
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>이름</Form.Label>
                            <Form.Control name="name" onChange={handleChange} placeholder="이름을 입력해 주세요" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>생년월일</Form.Label>
                            <Form.Control name="birth" onChange={handleChange} placeholder="19981119 형태로 입력해주세요" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} placeholder="이메일을 입력해 주세요" />
                        </Form.Group>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="U" onClick={handleChange}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                일반회원
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="E" onClick={handleChange}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                기업회원
                            </label>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Container>
        </Modal>
    );
};

export default PwSearch;