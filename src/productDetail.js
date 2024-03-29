import React, {useContext, useEffect, useState} from "react";
import Header from "./laydout/header";
import {Footer} from "./laydout/footer";
import {Link, useNavigate, useParams} from "react-router-dom";
import './productDetail.css'
import axios from "axios";
import {Userlogin} from "./userinfo";

function ProductOptionHtml(props){

    var list = props.list;

    var price = props.list.p_Price - props.list.p_Sale;

    return(
        <option value={list.p_Optionname} name="p_Optionname">{list.p_Optionname + " 가격 :  " + price}</option>
    )

}

//상품이 들어왔다? 그러면 해당 상품이 무엇인지 알아야하는 것
function ProductDetail(){
    //http://localhost:8080

    const baseUrl = "http://localhost:8080";
    const params = useParams();
    const pdid = params.product_pdid;
    const logininfo = useContext(Userlogin);

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
        p_Options:[],
    });

    const[option, SetOption] = useState();
    const[quantity, setQuantity] = useState();
    const[subscribeCycle, setSubscribeCycle] = useState();

    const quantityHandle = (e) => {

        if(e.target.value <= 0){
            e.target.value = 0;
            return;
        }

        setQuantity(e.target.value);
    }

    const subscribeCycleHandle = (e) => {

        if(e.target.value <= 0){
            e.target.value = 0;
            return;
        }

        setSubscribeCycle(e.target.value);
    }

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
                    p_ENID: response.data.p_ENID,
                    p_EnterpriseName: response.data.p_EnterpriseName,
                    p_PDID: response.data.p_PDID,
                    p_PhoneNumber: response.data.p_PhoneNumber,
                    p_Price: response.data.p_Price,
                    p_ProductName: response.data.p_ProductName,
                    p_ImageFileName: response.data.p_ImageFileName,
                    p_DetailFileName: response.data.p_DetailFileName,
                    p_Sale: response.data.p_Sale,
                    p_Options: response.data.p_Options,
                })

                document.getElementsByClassName("main-image").item(0).src = "http://localhost:8080/gen/" + response.data.p_ImageFileName;
                document.getElementsByClassName("detail-image").item(0).src = "http://localhost:8080/gen/" + response.data.p_DetailFileName;

                console.log(response.data)
                console.log(localStorage.getItem("role"))
                if(localStorage.getItem("role") === "E"){
                    document.getElementsByClassName("subscribe_btn").item(0).style.display = "none";
                    document.getElementsByClassName("basket_btn").item(0).style.display = "none";
                    document.getElementsByClassName("purchase_box").item(0).style.display = "none";
                }


            })
            .catch((error) => {
                console.log(error);
            })
    }

    const subscript = async () => {

        const baseUrl = "http://localhost:8080";

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

        //보내줘야 하는 것


        const onClickPayment = () => {

            var options = productInfo.p_Options;
            var select = document.getElementsByClassName("option_name").item(0).value;
            var productTotalPrice = 0;

            for(var i = 0 ; i < options.length ; i++){
                if(options[i].p_Optionname === select){
                    productTotalPrice = options[i].p_Price - options[i].p_Sale;
                }
            }

            const price = quantity * subscribeCycle * productTotalPrice;

            const {IMP} = window;
            IMP.init("imp26398049")

            const data={
                pg: 'html5_inicis',
                pay_method: 'card',
                merchant_uid: `mid${new Date().getTime()}`,
                amount: price,
                name: productInfo.p_ProductName,
                buyer_name: "m_name",
                buyer_tel: "m_phoneNumber",           // 구매자 전화번호
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

                axios({
                    method: 'post',
                    url: `http://localhost:8080/verifyIamport/`  + `${imp_uid}`,
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    data: {
                        imp_uid: imp_uid,
                        merchant_uid: merchant_uid
                    }
                })
                .then((res) => {   //res

                    console.log(res.data.amount);
                    console.log(response.paid_amount);

                    var options = productInfo.p_Options;
                    var poid;
                    var select = document.getElementsByClassName("option_name").item(0).value;
                    var count = document.getElementsByClassName("option_count").item(0).value;
                    var cycle = document.getElementsByClassName("subscribe_Cycle").item(0).value;
                    var productTotalPrice = 0;

                    for(var i = 0 ; i < options.length ; i++){
                        if(options[i].p_Optionname === select){
                            productTotalPrice = options[i].p_Price - options[i].p_Sale;
                            poid = options[i].p_POID;
                        }
                    }

                    const price = quantity * subscribeCycle * productTotalPrice;

                    if (response.paid_amount === parseInt(res.data.amount)) {
                        alert('결제가 완료되었습니다.')

                        const paymentReqDTO = {
                            p_imp_uid: response.imp_uid,
                            p_price: productTotalPrice,
                            p_USID: localStorage.getItem("uid"),
                            p_POID: poid,
                            p_SubscribeCycle: cycle,
                            p_Count : count,
                            p_SubscribeName : select,
                        }

                        console.log(paymentReqDTO);

                        axios
                            .post(baseUrl + "/subscribe/payment", paymentReqDTO)
                            .then((response) => {
                                console.log(response.data);
                                console.log("되어야지");
                            })
                            .catch((error)=>{
                                console.log(error);
                            })

                        // axios({
                        //     method: 'post',
                        //     url: baseUrl + `/subscribe/payment`,
                        //     data: {paymentReqDTO}
                        // }).then((data) => {
                        //     console.log(data);
                        //     console.log("잘됨");
                        // }).catch((error) => {
                        //     console.log("1");
                        //     console.log(error);
                        // })


                    } else {
                        console.log("2");
                        alert(`결제 실패`);
                    }
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
                    alert("찜하기에 등록하였습니다..")
                } else if (response.data.message === 'Failed') {
                    alert("찜하기에 등록한 상품입니다.")
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
                    <img className="main-image"/>
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
                    <div className="productitem"> 상품설명 </div>
                    <div className="productinfo_st">{productInfo.p_Detail}</div>

                    <div className="purchase_box">
                        <div>옵션 선택</div>
                        <select className="option_name">
                            {productInfo.p_Options ? productInfo.p_Options.map( list => {
                                return(
                                    <ProductOptionHtml list={list} key={list.p_Optionname}></ProductOptionHtml>
                                )
                            }) : ""}
                        </select>

                        <div>구독 주기</div>
                        <input className="subscribe_Cycle" type="number" onChange={subscribeCycleHandle}/>

                        <div>상품 개수</div>
                        <input className="option_count" type="number" onChange={quantityHandle}/>
                    </div>


                    <button className="subscribe_btn" onClick={subscript}> 구독하기 </button>
                    <button className="basket_btn" onClick={basket}> 찜하기 </button>

                </div></div>
                    <img className="detail-image"/>
                
                            <div className="detail_margin"></div>
            
            </div>
            <Footer/>
        </div>
    )

}


export default ProductDetail
