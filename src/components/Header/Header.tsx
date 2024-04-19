import QRCode from 'react-qr-code';
import { ThemeModeContext } from '../../App';
import { useContext } from 'react';
import './style.css';

function Header(attrs: { cafeName: string; instagram: string; logo: any;}) {

    const themeMode = useContext(ThemeModeContext);


    return (
        <header className={'header-' + themeMode}>
            <div className=''>
                <img className='logo' src={attrs.logo} alt={attrs.cafeName} />
                <h1 className={'cafe-name-' + themeMode}>{attrs.cafeName}</h1>
            </div>
            <QRCode className="qr-cafechi" value={'https://instagram.com/' + attrs.instagram}></QRCode>
        </header>
    );
}

export default Header;