import './Navbar.css';

const Navbar = () =>{
    return (
        <div className="nav-wrapper">
            <div className="nav-icon">
                <h4>H F</h4>
            </div>
            <div className="nav-items">
                <div className='singleItem-container'>
                    <img src="https://img.icons8.com/fluency-systems-regular/48/000000/video-call.png" alt=''/>
                    <h4>Live</h4>
                </div>
                <div className='singleItem-container'>
                <img src="https://img.icons8.com/external-outline-andi-nur-abdillah/64/000000/external-Membership-gym-(outline)-outline-andi-nur-abdillah.png" alt=''/>                    <h4>Membership</h4>
                </div>
                <div className='singleItem-container'>
                    <img src="https://img.icons8.com/ios/100/000000/exercise.png" alt=''/> 
                    <h4>Plans</h4>
                </div>
                <div className='singleItem-container'>
                    <img src="https://img.icons8.com/ios/50/000000/circled-menu.png" alt=''/>
                    <h4>More</h4>
                </div>
            </div>
            <div className="nav-login">
                <img src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png" alt=''/>
                <h4>Login</h4>
            </div>
        </div>
    )
}

export default Navbar;