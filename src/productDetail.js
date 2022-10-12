import React, {useEffect, useState} from "react";
import Header from "./laydout/header";
import {Footer} from "./laydout/footer";
import {useParams} from "react-router-dom";
import './productDetail.css'
import axios from "axios";

//상품이 들어왔다? 그러면 해당 상품이 무엇인지 알아야하는 것
function ProductDetail(){
    //

    const baseUrl = "https://frontdoorprivacy.shop";
    const params = useParams();
    const pdid = params.product_pdid;

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

    useEffect(() => {
        getProductInfo();
    },[])

    const getProductInfo = async () => {
        await axios
            .post(baseUrl + "/product/detail", {
                p_PDID: pdid
            })
            .then((response) => {
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

        const baseUrl = "https://frontdoorprivacy.shop";

        // await axios
        //     .post(baseUrl + "/product/detail/subscribe", {
        //         p_PDID: pdid,
        //         p_USID: localStorage.getItem("uid"),
        //         p_SubscribeCycle: "월",
        //     })
        //     .then((response) => {
        //         console.log(response.data);
        //         if(response.data.message === 'Success'){
        //             alert("구독에 성공하였습니다.")
        //         }else if(response.data.message === 'Failed'){
        //             alert("이미 구독한 상품입니다.")
        //         }else{
        //             alert("오류났습니다. 새로고침후 ㄲ")
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        const onClickPayment = () => {
            const {IMP} = window;
            IMP.init("imp26398049")

            const data={
                pg: 'html5_inicis',
                pay_method: 'card',
                merchant_uid: `mid${new Date().getTime()}`,
                amount: 100,
                name: "상품2",
                buyer_name: "m_name",
                buyer_tel: "m_phoneNumber",                     // 구매자 전화번호
                buyer_email: "m_email",               // 구매자 이메일
            };

            IMP.request_pay(data, callback);
        }

        const callback = (response) => {

            console.log(response.success);
            console.log(response.imp_uid);
            console.log(response.merchant_uid);
            console.log(response.paid_amount);

            const {
                success,
                imp_uid,
                merchant_uid,
                error_msg,
            } = response;

            //
            if (success) {
                console.log("imp_uid" + imp_uid);
                console.log("merchant_uid" + merchant_uid);

                axios
                    .post(baseUrl + "/verifyIamport/" + `${imp_uid}`, {
                     // imp_uid: imp_uid,
                     // merchant_uid: merchant_uid
                    })
                    .then(() => {
                        alert("vertifyIamport 완료");

                    })
                    .catch((error) => {
                        console.log(error);
                    })

                    axios({
                        method: 'post',
                        url: `https://frontdoorprivacy.shop/verifyIamport/`  + `${imp_uid}`,
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        data: {
                            imp_uid: imp_uid,
                            merchant_uid: merchant_uid
                        }
                    })
                    .then(() => {   //res

                        // console.log(res.data.response.amount);
                        //
                        // if (response.paid_amount === res.data.response.amount) {
                        //     alert('결제가 완료되었습니다.')
                        //     axios({
                        //         method: 'post',
                        //         url: baseUrl + `/subscribe/1/payment`,
                        //         data: {
                        //             p_price: 100,
                        //             imp_uid: response.imp_uid
                        //         }
                        //     }).then(() => {
                        //         console.log("잘됨");
                        //
                        //     }).catch((error) => {
                        //         console.log("1");
                        //         console.log(error);
                        //     })
                        // } else {
                        //     console.log("2");
                        //     alert(`결제 실패`);
                        // }
                    })

                console.log("마지막은 되니?")
            } else {
                console.log("3");
                alert("알수 없는 오류");
            }
        }

        onClickPayment();
    }

    const basket = async () => {
        await axios
            .post(baseUrl + "/mypage/user/basket/insert", {
                p_PDID: pdid,
                p_USID: localStorage.getItem("uid"),
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.message === 'Success') {
                    alert("장바구니에 등록하였습니다..")
                } else if (response.data.message === 'Failed') {
                    alert("장바구니에 등록한 상품입니다.")
                } else {
                    alert("오류났습니다. 새로고침후 ㄲ")
                }
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
                    <button onClick={basket}> 장바구니 </button>

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
