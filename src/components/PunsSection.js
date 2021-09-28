import React from 'react';
import '../components/PunsSection.css';
import Popup from 'reactjs-popup';

function PunsSection() {
    return (
    <div className="pun-container">
        <div className='pun-wrapper'>
            <h1>feeling punny? click on the yolks below..</h1>
                <Popup
                    trigger={<button className="button"><img src={"images/boiled_main.png"} /> why do people love having hard-boiled eggs for breakfast? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> they're so hard to beat! </div>
                    </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="button"><img src={"images/boiled_main.png"} /> why do people love having hard-boiled eggs for breakfast? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> they're so hard to beat! </div>
                    </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="button"><img src={"images/boiled_main.png"} /> why do people love having hard-boiled eggs for breakfast? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> they're so hard to beat! </div>
                    </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="button"><img src={"images/boiled_main.png"} /> why do people love having hard-boiled eggs for breakfast? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> they're so hard to beat! </div>
                    </div>
                    )}
                </Popup>
            </div>
        </div>
    )
}

export default PunsSection
