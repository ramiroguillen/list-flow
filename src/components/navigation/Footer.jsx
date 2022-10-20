const Footer = () => {
    return (
        <footer className='navbar navbar-expand-lg navbar-dark justify-content-center pt-5'>
            <p>
                {'Copyright ⓒ ' + new Date().getFullYear() + ' - '}
                <a href='https://ramiroguillen.com.ar' className="text-white">
                    Ramiro Guillén
                </a>
            </p>
        </footer>
    );
}

export default Footer;
