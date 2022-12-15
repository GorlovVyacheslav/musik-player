import React from 'react';
import './App.scss';
import ButtonSvgNext from './ButtonSvgNext';
import ButtonSvgPrev from './ButtonSvgPrev';
import ButtonSvgPlay from './ButtonSvgPlay';
import ProgressBar from './progressBar';


interface Props {}

const App = ({}: Props) => {
    return (
        <div className="player">
            <div className="songs">
                <ul>
                    <li>
                        asdad
                    </li>
                    <li>
                        sadas
                    </li>
            </ul>
            </div>
            <div className="progress__container">
                <div className="progressBar">
                    <ProgressBar id="progress" />
                </div>
            </div>
            <div className="buttonPrev">
                <ButtonSvgPrev id="prev" />
                <div />
                <div className="Play">
                    <ButtonSvgPlay id="play" />
                </div>
                <div className="Next">
                    <ButtonSvgNext id="next" />
                </div>
            </div>
        </div>
    );
};

export default App;
