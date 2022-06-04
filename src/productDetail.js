import React, {useContext, useEffect, useState} from "react";
import Header from "./laydout/header";
import {Footer} from "./laydout/footer";
import {useParams} from "react-router-dom";
import './productDetail.css'
import axios from "axios";
import {Userlogin} from "./userinfo";


//상품이 들어왔다? 그러면 해당 상품이 무엇인지 알아야하는 것
function ProductDetail(){

    const baseUrl = "http://localhost:8080";
    const params = useParams();
    const pdid = params.product_pdid;

    const loginInfo = useContext(Userlogin);

    const[productInfo, setProductInfo] = useState({
        p_Category: '',
        p_Detail: '',
        p_DetailFileName: '',
        p_ENID: '',
        p_EnterpriseName: '',
        p_ImageFileName: '',
        p_ImageFilePath: '',
        p_PDID: '',
        p_PhoneNumber: '',
        p_Price: '',
        p_ProductName: '',
        p_Sale: '',
    });

    console.log(pdid)

    useEffect(() => {
        getProductInfo();
    },[])

    const getProductInfo = async () => {
        await axios
            .post(baseUrl + "/product/detail", {
                p_PDID: pdid
            })
            .then((response) => {
                console.log(response.data);
                setProductInfo({
                    ...productInfo,
                    p_Category: response.data.p_Category,
                    p_Detail: response.data.p_Detail,
                    p_DetailFileName: response.data.p_DetailFileName,
                    p_ENID: response.data.p_ENID,
                    p_EnterpriseName: response.data.p_EnterpriseName,
                    p_ImageFileName: response.data.p_ImageFileName,
                    p_ImageFilePath: response.data.p_ImageFilePath,
                    p_PDID: response.data.p_PDID,
                    p_PhoneNumber: response.data.p_PhoneNumber,
                    p_Price: response.data.p_Price,
                    p_ProductName: response.data.p_ProductName,
                    p_Sale: response.data.p_Sale,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const subscript = async () => {

        await axios
            .post(baseUrl + "/product/detail/subscript", {
                p_PDID: pdid,
                p_USID: loginInfo.uid,
                p_Period: "월",
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return(
        <div>
            <Header/>
            <div className="container">

            <div className="top">
                <div className="left">
                    <img/>
                </div>

                <div className="right">
                    <div className="productitem"> 상품명 </div>
                    <div>{productInfo.p_ProductName}</div>
                    <div className="productitem"> 카테고리 분류 </div>
                    <div>{productInfo.p_Category}</div>
                    <div className="productitem"> 할인가격 </div>
                    <div>{productInfo.p_Sale}</div>
                    <div className="productitem"> 기업 </div>
                    <div>{productInfo.p_EnterpriseName}</div>
                    <div className="productitem"> 가격 </div>
                    <div>{productInfo.p_Price - productInfo.p_Sale}</div>
                    <div className="productitem"> 상품요약설명 </div>
                    <div>{productInfo.p_Detail}</div>
                    <button onClick={subscript}> 구독하기 </button>
                </div>
            </div>

            <div className="bottom">
                <img/>
            </div>
            </div>
            <Footer/>
        </div>
    )

}

export default ProductDetail
