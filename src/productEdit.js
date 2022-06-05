import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Footer} from "./laydout/footer";
import Header from "./laydout/header";
import {Userlogin} from "./userinfo";
import {useNavigate} from "react-router-dom";

function ProductEdit(){

    const baseUrl = "http://localhost:8080";
    const navigate = useNavigate();
    const userinfo = useContext(Userlogin);

    const [productInfo, setProductInfo] = useState();

    //뒤로가기 핸들러
    const back = () => {
        if(userinfo.role === 'E'){
            navigate("/mypage/company/profile");
        }else{
            navigate("/mypage/user/profile");
        }
    }

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        await axios
            .post(baseUrl + "/product/edit/get", {
                p_USID:localStorage.getItem("uid"),
            })
            .then((response) => {
                console.log(response.data);
                setProductInfo(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    //메인 이미지
    const [fileimage, setFileimage] = useState();
    const [preViewMain, setPreViewMain] = useState();
    const [preViewTemplate, setPreViewTemplate] = useState();

    const saveFileImage = (e)=>{
        setPreViewMain(URL.createObjectURL(e.target.files[0]));
        setFileimage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const deleteFileImage = (e) => {
        URL.revokeObjectURL(preViewMain);
        setPreViewMain("");
        setFileimage("");
        console.log(fileimage);
    }

    //템플릿 이미지
    const [templateimage, setTemplateimage] = useState();

    const saveTemplateImage = (e)=>{
        setPreViewTemplate(URL.createObjectURL(e.target.files[0]));
        setTemplateimage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const deleteTemplateImage = (e) => {
        URL.revokeObjectURL(preViewTemplate);
        setPreViewTemplate("");
        setTemplateimage("");
        console.log(templateimage);
    }

    //나머지 입력 처리
    const [productEditInfo, setProductEditInfo] = useState({
        p_ENID:userinfo.uid,
        p_ProductName:'',
        p_Category:'',
        p_DetailCategory:'',
        p_Price:'',
        p_Detail:'',
        p_SaleYN:'',
        p_Sale:'',
    });

    const handleInput = (e) => {

        if(e.target.name === 'p_Category'){

            if(e.target.value === '생활' || e.target.value === '건강' || e.target.value === '멤버쉽'){
                setProductEditInfo({
                    ...productEditInfo,
                    ['p_Category']:"라이프스타일",
                    ['p_DetailCategory']:e.target.value,
                })
            }else if(e.target.value === '도서' || e.target.value === '음악' || e.target.value === '영상'){
                setProductEditInfo({
                    ...productEditInfo,
                    ['p_Category']:"컨텐츠",
                    ['p_DetailCategory']:e.target.value,
                })
            }else if(e.target.value === '빵' || e.target.value === '유제품' || e.target.value === '죽'){
                setProductEditInfo({
                    ...productInfo,
                    ['p_Category']:"음식",
                    ['p_DetailCategory']:e.target.value,
                })
            }

        }else{
            setProductEditInfo({
                ...productEditInfo,
                [e.target.name]:e.target.value,
            })
        }

    }

    const editProduct = async (e) => {

        console.log(productEditInfo);

        e.preventDefault();

        const formData = new FormData();
        formData.append("multipartFile",fileimage);
        formData.append("productReq",new Blob([JSON.stringify(productInfo)], {type:'application/json'}));
        formData.append("detailFile",templateimage);

        //이미지 보내기
        await axios
            .post(baseUrl + "/product/edit",formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((response) => {
                alert("상품이 성공적으로 등록되었습니다.");
                console.log(response.data);
                if(userinfo.role === 'E'){
                    navigate("/mypage/company/profile");
                }else{
                    navigate("/mypage/user/profile");
                }
            })
            .catch((e) => { console.log(e); })
    }

    return(
        <div>
            <Header/>
            <button type="button" onClick={back}>뒤로가기</button>
            <h2 className="company_profile_h2"> 상품 편집 페이지</h2>
            <hr/>

            <p> 대표 사진 편집 </p>
            <div className="preview_img">
                {preViewMain && (<img alt="preview" src={preViewMain}/>)}
            </div>
            <button onClick={deleteFileImage}> 삭제 </button>
            <input type="file" accept="image/*" onChange={saveFileImage}/>

            <div><label>상품명 편집</label>
                <input type="text" name="p_ProductName" onChange={handleInput}/>
            </div>

            <div><label>할인유무 편집</label>
                <div><input type="radio" name="p_SaleYN" value="Y" onChange={handleInput}/>Y</div>
                <div><input type="radio" name="p_SaleYN" value="N" onChange={handleInput}/>N</div>
            </div>

            <div><label>할인가격 편집</label>
                <input type="text" name="p_Sale" onChange={handleInput}/>
            </div>

            <div> <label>카테고리설정 편집</label>
                <select name="p_Category" onChange={handleInput}>
                    <option value="none">카테고리</option>
                    <option value="생활">라이프스타일/생활</option>
                    <option value="멤버쉽">라이프스타일/멤버쉽</option>
                    <option value="건강">라이프스타일/건강</option>
                    <option value="도서">컨텐츠/도서</option>
                    <option value="음악">컨텐츠/음악</option>
                    <option value="영상">컨텐츠/영상</option>
                    <option value="빵">음식/빵</option>
                    <option value="유제품">음식/유제품</option>
                    <option value="죽">음식/죽</option>
                </select>
            </div>

            <div> <label>가격 편집</label>
                <input type="text" name="p_Price" placeholder={"가격"} onChange={handleInput}/>
            </div>

            <div> <label>상품 요약 설명 편집</label>
                <textarea name="p_Detail" onChange={handleInput}></textarea>
            </div>

            <div><label>템플릿 편집</label>
                <div className="preview_img">
                    {preViewTemplate && (<img alt="preview1" src={preViewTemplate}/>)}
                </div>
                <button onClick={deleteTemplateImage}> 삭제 </button>
                <input type="file" accept="image/*" onChange={saveTemplateImage}/>
            </div>
            <button type="submit" onClick={editProduct}>제품 수정하기</button>


            <Footer/>
        </div>
    )
}

export default ProductEdit;