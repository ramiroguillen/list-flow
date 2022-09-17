const Footer = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark justify-content-center pt-5' style={{ height: '12.5%', backgroundColor: '#252526', overflow: 'hidden' }}>
            <p style={{ color: 'white' }}>
                {'Copyright ⓒ ' + new Date().getFullYear() + ' - '}
                <a href='https://ramiroguillen.com.ar' style={{ textDecoration: 'none', color: 'white' }}>
                    Ramiro Guillén
                </a>
            </p>
        </nav>
    );
}

export default Footer;
