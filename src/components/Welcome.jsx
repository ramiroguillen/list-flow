import { BsKey, BsShieldLock } from 'react-icons/bs';

const Welcome = () => {

    return (
        <main id="tasks" className='d-flex justify-content-center'>
            <div className='col-md-6 mt-3'>
                <div className='card' style={{ position: 'relative', height: '32rem' }}>
                    <div className='card-body' data-mdb-perfect-scrollbar='true'>
                        <h2 className="text-center mt-5">Welcome!</h2>
                        <div className="mt-5">
                            <h3 className="text-center">You need to login to access the information.</h3>
                            <h1 className="text-center mt-5"><BsKey /> <BsShieldLock /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Welcome;