import QRCode from "react-qr-code";
import './style.css';
function QRcode(attrs:{instagram:string; description: string;}){
    return(
        <article className="article-instagram">
            <QRCode className="article-instagram-QR-code" value={"https://instagram.com/" + attrs.instagram }></QRCode>
            <div className="article-instagram-caption">
            <h3 className="article-instagram-id">{"@"+attrs.instagram}</h3>
            <p className="article-instagram-description">{attrs.description}</p> 
            </div>
        </article>
    );
}
export default QRcode; 