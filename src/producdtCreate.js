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

    const baseUrl = "http://localhost:8080";

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
        // setFileimage(e.target.files);
        // setFileimage(URL.createObjectURL(e.target.files[0]));
        setFileimage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const deleteFileImage = (e) => {
        URL.revokeObjectURL(fileimage);
        setFileimage("");
        console.log(fileimage);
    }

    //템플릿 이미지
    const [templateimage, setTemplateimage] = useState();

    const saveTemplateImage = (e)=>{
        // setTemplateimage(e.target.files);
        setTemplateimage(e.target.files[0]);
        // setTemplateimage(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
    }

    const deleteTemplateImage = (e) => {
        URL.revokeObjectURL(templateimage);
        setTemplateimage("");
        console.log(templateimage);
    }

    //나머지 입력 처리
    const [productInfo, setProductInfo] = useState({
        P_ENID:userinfo.uid,
        P_ProductName:'',
        P_Category:'',
        P_Price:'',
        P_Detail:'',
    });

    const handleInput = (e) => {

        setProductInfo({
            ...productInfo,
            [e.target.name]:e.target.value,
        })

    }

    const createProduct = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("multipartFile",fileimage);
        formData.append("productReq",new Blob([JSON.stringify(productInfo)], { type: "application/json" }));
        formData.append("detailFile",templateimage);

        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }
        console.log(productInfo);
        await axios
            .post(baseUrl + "/mypage/company/product",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

                <p> 대표 사진 업로드 </p>
                <div className="preview_img">
                    {fileimage && (<img alt="preview" src={fileimage}/>)}
                </div>
                <button onClick={deleteFileImage}> 삭제 </button>
                <input type="file" accept="image/*" onChange={saveFileImage}/>

            <div><label>상품명</label>
                <input type="text" name="P_ProductName" onChange={handleInput}/>
            </div>
            <div> <label>카테고리설정</label>
                <select name="P_Category" onChange={handleInput}>
                    <option value="none">카테고리</option>
                    <option value="생활">생활</option>
                    <option value="멤버쉽">멤버쉽</option>
                    <option value="건강">건강</option>
                    <option value="도서">도서</option>
                    <option value="음악">음악</option>
                    <option value="영상">영상</option>
                    <option value="빵">빵</option>
                    <option value="유제품">유제품</option>
                    <option value="죽">죽</option>
                </select>
            </div>
            <div> <label>가격</label>
                <input type="text" name="P_Price" placeholder={"가격"} onChange={handleInput}/>
            </div>
            <div> <label>상품 요약 설명 </label>
                <textarea name="P_Detail" onChange={handleInput}></textarea>
            </div>

                <div><label>템플릿 등록</label>
                    <div className="preview_img">
                        {templateimage && (<img alt="preview1" src={templateimage}/>)}
                    </div>
                    <button onClick={deleteTemplateImage}> 삭제 </button>
                    <input type="file" accept="image/*" onChange={saveTemplateImage}/>
                </div>
                <button type="submit" onClick={createProduct}>제품 만들기</button>


            <Footer/>
        </div>
    )
}


export default ProductCreate;