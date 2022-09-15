const Footer = () => {
    return (
        <footer>
            <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-center mt-3 pt-3 fixed-bottom'>
                <p>
                    {'Copyright ⓒ ' + new Date().getFullYear() + ' - '}
                    <a href='https://ramiroguillen.com.ar'>
                        Ramiro Guillén
                    </a>
                </p>
            </nav>
        </footer>
    );
}

export default Footer;
