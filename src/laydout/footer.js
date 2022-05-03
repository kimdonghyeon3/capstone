import './footer.css'

export function Footer(){

    return(
        <footer className="footer">
            <div className="footer_wrapper">
                <div className="footer_title">
                    <img src={require("../img/logo.png")} alt="logo"/>
                    <div>문앞에는 많아지는 구독 서비스들을 한곳에 모아
                        서비스들을 비교하고 관리하는 사이트입니다.</div>
                </div>
                <div className="footer_frontend">
                    <h2>FrontEnd</h2>
                    <div className="id">김동현</div>
                    <div className="email">sh2115521@naver.com</div>
                    <div className="id">손일국</div>
                    <div className="email">sh2115521@naver.com</div>
                </div>
                <div className="footer_backend">
                    <h2>BackEnd</h2>
                    <div className="id">양철진</div>
                    <div className="email">sh2115521@naver.com</div>
                    <div className="id">신예환</div>
                    <div className="email">sh2115521@naver.com</div>
                </div>
                <div className="footer_db">
                    <h2>DataBase</h2>
                    <div className="id">지완</div>
                    <div className="email">sh2115521@naver.com</div>
                </div>
            </div>
        </footer>
    )
}