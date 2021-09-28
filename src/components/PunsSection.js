import React from 'react';
import '../components/PunsSection.css';
import Popup from 'reactjs-popup';

function PunsSection() {
    return (
    <div className="pun-container">
        <div className='pun-wrapper'>
            <h1>feeling punny? click on the yolks below..</h1>
                <Popup
                    trigger={<button className="button"><img class="img-puns" src={"images/egg_joke_1.png"} /> why do people love having hard-boiled eggs for breakfast? </button>}
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
                    trigger={<button className="button"><img class="img-puns" src={"images/egg_pun_3.png"} /> what did the egg do when it saw the frying pan?
                    </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> it scrambled! </div>
                    </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="button"><img class="img-puns" src={"images/egg_joke_2.png"} /> what did the egg say about escaping the chef? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> i might whisk it and run! </div>
                    </div>
                    )}
                </Popup>
                <Popup
                    trigger={<button className="button"><img class="img-puns" src={"images/egg_pun_4.png"} /> how did the breakfast burrito find out it was sick? </button>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> it had an eggs-amination! </div>
                    </div>
                    )}
                </Popup>
            </div>
        </div>
    )
}

export default PunsSection
