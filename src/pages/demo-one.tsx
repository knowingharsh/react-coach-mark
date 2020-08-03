import React, { useRef, useState } from "react";
import { CoachMark } from './../lib';

const DemoOne: React.FC = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [activatedNumber, setActivateNumber] = useState<number>(1);
    const next = () => setActivateNumber(activatedNumber + 1);
    const data: any = [
        {
            component: <div>I am at Bottom, <button onClick={next}>Next</button></div>,
            reference: ref1,
            tooltip: { position: 'bottom' }
        },
        {
            component: <div>I am at Top, <button onClick={next}>Next</button></div>,
            reference: ref2,
            tooltip: { position: 'top' }
        },
        {
            component: <div>I am at Left <button onClick={next}>Next</button></div>,
            reference: ref3,
            tooltip: { position: 'left' }
        },
        {
            component: <div>I am at Right, <button onClick={next}>Exit</button></div>,
            reference: ref4,
            tooltip: { position: 'right' }
        }
    ][activatedNumber - 1];




    return (
        <>
            <div className="header">
                <h1 ref={ref1}>My Website</h1>
                <p >A <b>responsive</b> website created by me.</p>
            </div>

            <div className="navbar">
                <a href="/#" className="active">Home</a>
                <a href="/#">Link</a>
                <a href="/#">Link</a>
                <a href="/#" className="right">Link</a>
            </div>

            <div className="row">
                <div className="side">
                    <h2>About Me</h2>
                    <h5 >Photo of me:</h5>
                    <div className="fakeimg" >Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className="fakeimg">Image</div><br />
                    <div className="fakeimg" >Image</div><br />
                    <div className="fakeimg" ref={ref4} >Image</div>
                </div>
                <div className="main">
                    <h2 ref={ref2}>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg" >Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg">Image</div>
                    <p ref={ref3}>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>

            <div className="footer">
                <h2>Footer</h2>
            </div>


            {data && <CoachMark
                activate={true}
                component={data.component}
                reference={data.reference}
                tooltip={data.tooltip}
            />}
        </>
    )
}

export default DemoOne;