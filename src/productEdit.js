import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Footer} from "./laydout/footer";
import Header from "./laydout/header";
import {Userlogin} from "./userinfo";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function ProductEdit(props){

    const params = useParams();
    const pdid = params.edit_pdid;
    // const {productId} = useParams().product_pdid;
    // console.log(productId);

    const baseUrl = "https://www.frontdoorprivacy.shop";
    const navigateback = useNavigate();
    const userinfo = useContext(Userlogin);

    const [productInfo, setProductInfo] = useState({
        category : "",
        detail : "",
        detailCategory : "",
        detailFileName : "",
        enid : "",
        imageFileName : "",
        imageFilePath : "",
        price : "",
        productName : "",
        saleYN : "",
    });

    const [productOptionInfo, setProductOptionInfo] = useState([
        {optionname : "",
            poid : "",
            price : "",
            sale : "",
            saleYN : "",}
    ]);

    //뒤로가기 핸들러
    const back = () => {
        if(userinfo.role === 'E'){
            navigateback("/mypage/company/profile");
        }else{
            navigateback("/mypage/user/profile");
        }
    }

    useEffect(()=>{                         //첫 페이지 시작시 값 1번만 실행
        getProductInfo();
    },[]);

    async function getProductInfo(){            //spring 연동 값 받아오기
        //console.log(pdid);
        await axios
            .post(baseUrl + "/product/update", {
                pdid:pdid,
            })
            .then((response) => {
                console.log(response.data);
                setProductInfo(response.data);

                document.getElementsByClassName("product_name").item(0).value = response.data.productName;
                document.getElementsByClassName("product_detail").item(0).value = response.data.detail;

                setPreViewMain("https://www.frontdoorprivacy.shop/gen/" + response.data.imageFileName);
                setPreViewTemplate("https://www.frontdoorprivacy.shop/gen/" + response.data.detailFileName);
            })
            .catch((error)=>{
                console.log(error);
            })

        await axios
            .post(baseUrl + "/productoption/update", {
                pdid:pdid,
            })
            .then((response) => {
                console.log(response.data);
                setProductOptionInfo(response.data);

                for(var i = 0 ; i < response.data.length ; i++){
                    if(i == 0){
                        var oldOptionContainer = document.getElementsByClassName("option-container").item(0);

                        oldOptionContainer.getElementsByClassName("optionName").item(0).value = response.data[i].optionname;
                        oldOptionContainer.getElementsByClassName("salePrice").item(0).value = response.data[i].sale;
                        oldOptionContainer.getElementsByClassName("price").item(0).value = response.data[i].price;
                        if(response.data[i].saleYN ==="Y"){
                            oldOptionContainer.getElementsByClassName("p_SaleYN").item(0).checked = true;
                        }else{
                            oldOptionContainer.getElementsByClassName("p_SaleYN").item(0).checked = false;
                        }

                        continue;
                    }

                    var optionContainer = document.getElementsByClassName("option-container").item(0);

                    var newOptionContainer = optionContainer.item(0).cloneNode(true);
                    //console.log(newOptionContainer);
                    newOptionContainer.getElementsByClassName("optionName").item(0).value = response.data[i].optionname;
                    newOptionContainer.getElementsByClassName("salePrice").item(0).value = response.data[i].sale;
                    newOptionContainer.getElementsByClassName("price").item(0).value = response.data[i].price;
                    if(response.data[i].saleYN ==="Y"){
                        newOptionContainer.getElementsByClassName("p_SaleYN").item(0).checked = true;
                    }else{
                        newOptionContainer.getElementsByClassName("p_SaleYN").item(0).checked = false;
                    }

                    document.getElementsByClassName("option-box").item(0).append(newOptionContainer);
                }

                //데이터를 순회하면서 option 값을 뽑아내
                //옵션 태그를 만들어야된다.
                //그러면 옵션 태그 요거를 통채로 만들어야 된다.
                //그러면 기존에 1개에 있는거에는 값을 넣어주자.
                //그 후에는 전에거에 복사해서 value 값만 변경해 주면 된다.

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
        p_Detail:'',
        p_SaleYN:'',
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

    const plus = (e) => {
        var optionContainer = document.getElementsByClassName("option-container");

        var newOptionContainer = optionContainer.item(0).cloneNode(true);
        //console.log(newOptionContainer);
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

    const editProduct = async (e) => {

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

                setProductEditInfo((prv) => {
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

            var tmp = { p_PDID :pdid, p_Optionname : optionName, p_Price : price, p_SaleYN : yn, p_Sale : salePrice};

            options.push(tmp);
        }

        console.log(productEditInfo);
        console.log(options);

        e.preventDefault();

        const formData = new FormData();
        formData.append("multipartFile",fileimage);
        formData.append("productReq",new Blob([JSON.stringify(productEditInfo)], {type:'application/json'}));
        formData.append("options",new Blob([JSON.stringify(options)], {type:'application/json'}));
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
                    navigateback("/mypage/company/profile");
                }else{
                    navigateback("/mypage/user/profile");
                }
            })
            .catch((e) => { console.log(e); })
    }

    return(
        <div>
            <Header/>
            {/* <button type="button" onClick={back}>뒤로가기</button> */}

            <div className="locate1"><div className="register_box"><strong>상품 수정</strong></div>
                    <hr className="sun"size="3" width="105%" color="black"/></div>

            <div className="whole_left">
            <div className="pen"> 대표 사진 편집 </div>
            <div className="width_jo">
            <div className="preview_img">
                {preViewMain && (<img alt="preview" src={preViewMain}/>)}
                <button onClick={deleteFileImage}> 삭제 </button>
            <input type="file" accept="image/*" onChange={saveFileImage}/></div>

            <div className="product_margin">
            <label>상품명 편집</label>
                <div><input  className="user_profile_dd product_name" type="text" name="p_ProductName" onChange={handleInput}/></div>
            


  


            <div className="category_option"> <label>카테고리설정 편집</label>
                <div><select name="p_Category" onChange={handleInput}>
                    <option value={productInfo.detailCategory}>{productInfo.detailCategory}</option>
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
            
                <label>상품 설명 편집</label>
            <div> 
                <textarea  className="user_profile_dd product_detail" name="p_Detail" onChange={handleInput}></textarea></div>
            
            <div>옵션</div>
            <div>
                <button onClick={plus}> + </button>
                <button onClick={minus}> - </button>
            </div>

            <div className="option-box">
                <div className="option-container">
                        <div><label>옵션명</label></div>
                        <input className="user_profile_dd optionName" type="text" name="optionName" placeholder={"옵션명"} onChange={handleInput}/>


                    <div> <label>가격</label></div>
                        <input className="user_profile_dd price" type="text" name="p_Price" placeholder={"가격"} onChange={handleInput}/>
                    

                    <div><label>할인가격</label>
                            <span className="sale_font"><label>&nbsp;(할인유무</label>
                                    <input className="p_SaleYN" type="checkbox" name="p_SaleYN" value="Y"/>Y)
                            </span>
                        
                        <span className="sale_display"><input className="user_profile_dd salePrice" type="text" name="p_Sale" onChange={handleInput}/></span>
                    </div>
                </div>
            </div></div>
            </div>
            
<div className="lolo"><label>템플릿 편집</label>
    <div className="preview_img1">
        {preViewTemplate && (<img alt="preview1" src={preViewTemplate}/>)}
    </div></div>
    <button onClick={deleteTemplateImage}> 삭제 </button>
    <input type="file" accept="image/*" onChange={saveTemplateImage}/>


                    <div  className="btn_lo"><button type="submit" onClick={editProduct}>제품 수정하기</button></div></div>
            <Footer/>
        </div>
    )
}

export default ProductEdit;