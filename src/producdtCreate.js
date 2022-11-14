import React, {useContext, useState} from "react";
import {Header} from './laydout/header';
import {Footer} from './laydout/footer';
import {useNavigate} from 'react-router-dom';
import {Userlogin} from "./userinfo";
import './productCreate.css';
import axios from "axios";

function ProductCreate(){

    const baseUrl = "http://localhost:8080";

    const userinfo = useContext(Userlogin);

    const navigate = useNavigate();

    //뒤로가기 핸들러
    const back = () => {
        if(userinfo.role === 'E'){
            navigate("/mypage/company/manage");
        }else{
            navigate("/mypage/user/manage");
        }
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
    const [productInfo, setProductInfo] = useState({
        p_ENID:userinfo.uid,
        p_ProductName:'',
        p_Category:'',
        p_DetailCategory:'',
        p_Detail:'',
        p_SaleYN:'',
        //optionInputs:[],
    });

    const handleInput = (e) => {

        if(e.target.name === 'p_Category'){

            if(e.target.value === '생활' || e.target.value === '건강' || e.target.value === '멤버쉽'){
                setProductInfo({
                    ...productInfo,
                    ['p_Category']:"라이프스타일",
                    ['p_DetailCategory']:e.target.value,
                })
            }else if(e.target.value === '도서' || e.target.value === '음악' || e.target.value === '영상'){
                setProductInfo({
                    ...productInfo,
                    ['p_Category']:"컨텐츠",
                    ['p_DetailCategory']:e.target.value,
                })
            }else if(e.target.value === '빵' || e.target.value === '유제품' || e.target.value === '죽'){
                setProductInfo({
                    ...productInfo,
                    ['p_Category']:"음식",
                    ['p_DetailCategory']:e.target.value,
                })
            }

        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]:e.target.value,
            })
        }
    }

    // 상품 만들기 누르기
    const createProduct = async (e) => {

        var options = [];

        //옵션 데이터 생성
        var optionContainer = document.getElementsByClassName("option-container");

        for(let i = 0 ; i < optionContainer.length ; i++){

            var optionName = optionContainer.item(i).getElementsByClassName("optionName").item(0).value;
            var salePrice = optionContainer.item(i).getElementsByClassName("salePrice").item(0).value;
            var price = optionContainer.item(i).getElementsByClassName("price").item(0).value;
            var saleYn = optionContainer.item(i).getElementsByClassName("p_SaleYN").item(0).checked;
            var yn;

            if(saleYn == true){
                yn = "Y";

                setProductInfo((prv) => {
                    prv.p_SaleYN = "Y";
                    return prv;
                })

                if(salePrice === ""){
                    salePrice = "0";
                }
            }else{
                yn = "N";
                salePrice = "0";
            }

            var tmp = { p_PDID :"1", p_Optionname : optionName, p_Price : price, p_SaleYN : yn, p_Sale : salePrice};

            options.push(tmp);
        }

        // setProductInfo((prv) => {
        //     prv.optionInputs = options;
        //     return prv;
        // })

        console.log(options);
        console.log(productInfo);

        //return;

        e.preventDefault();

        const formData = new FormData();
        formData.append("multipartFile",fileimage);
        formData.append("productReq",new Blob([JSON.stringify(productInfo)], {type:'application/json'}));
        formData.append("options",new Blob([JSON.stringify(options)], {type:'application/json'}));
        formData.append("detailFile",templateimage);

        //이미지 보내기
        await axios
            .post(baseUrl + "/mypage/company/product",formData, {
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

    const plus = (e) => {
        var optionContainer = document.getElementsByClassName("option-container");

        var newOptionContainer = optionContainer.item(0).cloneNode(true);
        console.log(newOptionContainer);
        newOptionContainer.getElementsByClassName("optionName").item(0).value = '';
        newOptionContainer.getElementsByClassName("salePrice").item(0).value = '';
        newOptionContainer.getElementsByClassName("price").item(0).value = '';
        newOptionContainer.getElementsByClassName("p_SaleYN").item(0).checked = false;

        document.getElementsByClassName("option-box").item(0).append(newOptionContainer);
    }


    const minus = (e) =>{
        var element = document.getElementsByClassName("option-box").item(0);
        var optionContainer = document.getElementsByClassName("option-container");

        if(optionContainer.length < 2){
            return
        }

        element.removeChild(optionContainer.item(optionContainer.length - 1));
    }

    return(
        <div>
            <Header/>

            <div className="locate1"><div className="register_box"><strong>상품 등록</strong></div>
                    <hr className="sun"size="3" width="105%" color="black"/></div>
                    {/* <button className="back_btn" type="button" onClick={back}>뒤로가기</button> */}
                <div className="whole_left">
                <div className="photo_templet_container">
                <div className="photo_upload_container">
                <div> 대표 사진 업로드 </div>
                <div className="preview_img">
                    {preViewMain && (<img alt="preview" src={preViewMain}/>)}
                </div>
                <button onClick={deleteFileImage}> 삭제 </button>
                <input type="file" accept="image/*" onChange={saveFileImage}/></div>

                <div className="sidetosidemargin">&nbsp;</div>

                <div><label>템플릿 등록</label>
                <div className="photo_upload_container">
                    <div className="preview_img">
                        {preViewTemplate && (<img alt="preview1" src={preViewTemplate}/>)}
                    </div>
                    <button onClick={deleteTemplateImage}> 삭제 </button>
                    <input type="file" accept="image/*" onChange={saveTemplateImage}/>
                </div></div></div>
            
            <div className="assas">
            <div><label className="user_profile_dt">상품명</label>
                <input className="user_profile_dd" type="text" name="p_ProductName" onChange={handleInput}/></div>

                <div className="sidetosidemargin">&nbsp;</div>

                <div className="category_option"><label>카테고리설정</label>
                <div><select name="p_Category" onChange={handleInput}>
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
                </select></div></div>

            </div>
            
            <div className="assas">
            <div className="dk_margin"> <label className="user_profile_dt">상품 설명 </label>
                <textarea className="user_profile_dd" name="p_Detail" onChange={handleInput}></textarea></div>

                <div className="sidetosidemargin">&nbsp;</div>

                <div>옵션</div>
                <div>
                    <button onClick={plus}> + </button>
                    <button onClick={minus}> - </button>
                </div>

                <div className="option-box">
                    <div className="option-container">
                                            <span className="user_profile_dt"><label>옵션명</label>
                        <input className="user_profile_dd optionName" type="text" name="optionName" placeholder={"옵션명"} onChange={handleInput}/>
                    </span>

                        <div> <label className="user_profile_dt">가격</label>
                            <input className="user_profile_dd price" type="text" name="p_Price" placeholder={"가격"} onChange={handleInput}/></div>

                        <div><span className="user_profile_dt"><label>할인가격</label>
                            <span className="sale_font"><label>&nbsp;(할인유무</label>
                                    <input className="p_SaleYN" type="checkbox" name="p_SaleYN" value="Y"/>Y)
                            </span>
                        </span>
                            <span className="sale_display"><input className="user_profile_dd salePrice" type="text" name="p_Sale" onChange={handleInput}/></span>
                        </div>
                        <hr/>
                    </div>
                </div>

                </div>

                <button className="btn_margin"type="submit" onClick={createProduct}>제품 만들기</button>

                </div>
            <Footer/>
        </div>
    )
}


export default ProductCreate;