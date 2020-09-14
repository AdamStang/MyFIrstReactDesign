import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

function MyFooter(){
    return (
        <footer>
            <div className="upperFooter">
                <div className="About">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <address>
                        ABCDEFGH <br/>
                        ijklmno@gmail.com <br/>
                        Pqrstu 123 <br/>
                        456 78 <br/>
                    </address>
                </div>
            </div>
            <div className="lowerFooter">
                <p>&copy; 2020 Adam Stang</p>
            </div>
        </footer>
    )
}

export default MyFooter;