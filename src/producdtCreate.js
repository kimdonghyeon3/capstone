import React, {useContext, useEffect, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';
import {Userlogin} from "./userinfo";
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './productCreate.css';
import axios from "axios";

function ProductCreate(){

    const userinfo = useContext(Userlogin);

    const navigate = useNavigate();

    //뒤로가기 핸들러
    const back = () => {
        if(userinfo.role === 'E'){
            navigate("/mypage/company/profile");
        }else{
            navigate("/mypage/user/profile");
        }
    }

    //메인 이미지
    const [fileimage, setFileimage] = useState();

    const saveFileImage = (e)=>{
        setFileimage(URL.createObjectURL(e.target.files[0]));
    }

    const deleteFileImage = (event) => {
        URL.revokeObjectURL(fileimage);
        setFileimage("");
    }

    //템플릿 이미지
    const [template, setTemplate] = useState([]);

    const saveTemplate = (e) => {
        const nowSelectImgList = e.target.files;
        const nowImageURLList = [...template];

        for(let i = 0 ; i < nowSelectImgList.length ; i++){
            const nowImageURL = URL.createObjectURL(nowSelectImgList[i])
            nowImageURLList.push(nowImageURL);
        }
        setTemplate(nowImageURLList);
    }

    const createProduct = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("mainImg",fileimage);

        await axios
            .post("",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                alert("보내기 성공");
                console.log(response.data);
            })
            .catch((e) => { console.log(e); })

    }


    return(
        <div>
            <Header/>
            <button type="button" onClick={back}>뒤로가기</button>
            <h2 className="company_profile_h2"> 상품 등록 페이지</h2>
            <hr/>
            <form onSubmit={createProduct}>
                <p> 대표 사진 업로드 </p>
                <div className="preview_img">
                    {fileimage && (<img alt="preview" src={fileimage}/>)}
                </div>
                <button onClick={() => deleteFileImage()}> 삭제 </button>
                <input type="file" accept="image/*" onChange={saveFileImage}/>
            <div><label>상평명</label>
                <input type="text"/>
            </div>
            <div> <label>카테고리설정</label>
                <select>
                    <option></option>
                    <option>lifestyle</option>
                    <option>sw</option>
                </select>
            </div>
            <div> <label>월/가격 및 옵션</label>
                <select>
                    <option></option>
                    <option>월</option>
                    <option>년</option>
                </select>
                <input type="number" placeholder={"가격"}/>
            </div>
            <div><label>문의 번호</label>
                <input type="text"/>
            </div>
            <div> <label>상품 요약 설명 </label>
                <textarea></textarea>
            </div>
            <div><label>템플릿 등록</label>
                <label></label>
                <input type="file" multiple="multiple" accept=".jpg,.jpeg,.png"/>
            </div>
                <button type="submit">제품 만들기</button>
            </form>
            <Footer/>
        </div>
    )
}


export default ProductCreate;