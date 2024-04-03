import QRCode from 'react-qr-code';
import './style.css';
function Header(attrs: { cafeName: string; instagram: string; logo: any;}) {
    return (
        <header>
            <div>
            <img className='logo' src={attrs.logo} alt={attrs.cafeName} />
            <h1>{attrs.cafeName}</h1>
            </div>
            <QRCode className="QRCafechi" value={'https://instagram.com/' + attrs.instagram}></QRCode>
        </header>
    );
}

export default Header;