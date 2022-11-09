import React, { useRef, useState } from "react";
import { CoachMark, ICoachProps } from '../lib';
import './../lib/styles/index.css';

const DemoOnePage: React.FC = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const [rerender, setRerender] = React.useState<number>(0);
    const [activatedNumber, setActivateNumber] = useState<number>(0);
    const NextButton = <button onClick={() => setActivateNumber(activatedNumber + 1)}>Next</button>;

    React.useEffect(() => { /* needed so that ref gets updates value to be passed as prop */
        setRerender(rerender + 1);
        console.log(rerender)
    }, [ref1.current])

    const coachList: Array<ICoachProps> = [
        {
            activate: activatedNumber === 0,
            component: <div>I can do this {NextButton} </div>,
            reference: ref1,
            tooltip: { position: 'bottom' }
        },
        {
            activate: activatedNumber === 1,
            component: <div>I can be long. {NextButton}</div>,
            reference: ref2,
            tooltip: { position: 'top' }
        },
        {
            activate: activatedNumber === 2,
            component: <div>ok big one. {NextButton}</div>,
            reference: ref3,
            tooltip: { position: 'top' }
        },
        {
            activate: activatedNumber === 3,
            component: <div>fill this. {NextButton}</div>,
            reference: ref4,
            tooltip: { position: 'left' }
        },
        {
            activate: activatedNumber === 4,
            component: <div>Submit here. {NextButton}</div>,
            reference: ref5,
            tooltip: { position: 'right' }
        }
    ]
    const coach = coachList[activatedNumber]

    return (
        <>
            <div className="header">
                <h1 ref={ref1}>Coach Mark</h1>
                <p >A <b>Lightweight React Coach Mark</b> sample, Awesome!!!.</p>
            </div>

            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ width: '60%' }} ref={ref3}>
                        <h2>Contact Us - Demo Page</h2>
                        <p ref={ref2}>Notice the position of tooltip, its configurable</p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <img src="https://www.w3schools.com/w3images/map.jpg" style={{ width: '100%' }} />
                    </div>
                    <div className="column">
                        <form action="/action_page.php" ref={ref4}>
                            <label >First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label >Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label >Country</label>
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                            <label >Subject</label>
                            <textarea id="subject" style={{ height: 170 }} name="subject" placeholder="Write something.." ></textarea>
                        </form>
                        <input ref={ref5} type="submit" value="Submit" />
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2>Thanks for choosing</h2>
            </div>
            {console.log(ref1,)}
            <CoachMark {...coach} />
        </>
    )
}

export default DemoOnePage;
