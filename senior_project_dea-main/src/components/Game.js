import { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import eFax from '../images/eFax_phishing.png';
import './LoginAndSignUp.css';


function updateScore(token_, section_, index_) {
    fetch("http://localhost:5000/updatescore", {
        method: "PUT",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            token: token_,
            section: section_,
            index: index_,
        }),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data, "updatescore");
        })
}

function submit() {
    if (document.getElementById("search").value === "<script>alert('Attack Successful')</script>") {
        alert("Attack successful!");
        updateScore(window.localStorage.getItem("token"), "game", "0");
    }
    else {
        alert("Incorrect. Try again!");
    }
 
}

function submit2() {
    let gamepage = document.getElementById("search-container-2");
    let gamepage2 = document.getElementById("tableDiv");

    console.log(gamepage);

    if (document.getElementById("search-2").value === "https://test-website.com/accounts?info=Usernames'--") {

        let usernamesArr = ["codebike", "neithercostume", "itachi123", "randomturtle", "volcanoshark", "orangegator", "purpledonkey", "hotdogsoup", "greenlizard"];
        let table = document.createElement("TABLE");

        for (let i = 0; i < usernamesArr.length; i++) {
            let row = table.insertRow(i);
            row.style.border = "1px solid black";
            row.insertCell(0).innerHTML = usernamesArr[i];
        }

        let header = table.createTHead();
        let headerRow = header.insertRow(0);
        header.style.fontWeight = 'bold';
        header.style.border = "1px solid black";
        headerRow.insertCell(0).innerHTML = "Usernames";

        gamepage2.appendChild(table);
        updateScore(window.localStorage.getItem("token"), "game", "1");
    }
    else {
        alert("Incorrect. Try again!");
    }
}

function submit3() {
    let gamepage = document.getElementById("search-container-3");
    console.log(gamepage);

    if (document.getElementById("email").value === "administrator'--") {
        alert("Logged in as administrator.");
        updateScore(window.localStorage.getItem("token"), "game", "2");
    }
    else {
        alert("Incorrect. Try again!");
    }
}

function submit4() {
    let gamepage = document.getElementById("search-container-4");
    console.log(gamepage);

    if (document.getElementById("search-4").value === "https://www.testwebsite.com/accdashboard.html#context=&ltscript&gtSomeFunction(somevariable)&lt/script&gt") {
        alert("Great job! You successfully sanitized the URL.");
        updateScore(window.localStorage.getItem("token"), "game", "3");
    }
    else {
        alert("Incorrect. Try again!");
    }
}

function submit5() {
    let gamepage = document.getElementById("search-container-5");
    console.log(gamepage);

    if (document.getElementById("key").value === "UFCSGatorsCybersecurity") {
        alert("Great job, you cracked the code!");
        updateScore(window.localStorage.getItem("token"), "game", "4");
    }
    else {
        alert("Incorrect. Try again!");
    }
}

function submit6() {
    let gamepage = document.getElementById("search-container-6");
    console.log(gamepage);

    if (document.getElementById("true/false").value === "true") {
        alert("Great job! The sender's email is misspelled and hovering over the email shows a supicious url.");
        updateScore(window.localStorage.getItem("token"), "game", "5");    
    }
    else if (document.getElementById("true/false").value === "false") {
        alert("Incorrect. The sender's email is misspelled and hovering over the link shows a supicious url.");
    }
    else {
        alert("Incorrect input, please type \"true\" or \"false\". Try again!");
    }
}

function submit7() {
    var gamepage = document.getElementById("search-container-7");
    console.log(gamepage);

    if (document.getElementById("IP").value === "128.227.236.155") {
        alert("Congratulations! This is the correct IP for the node before ufl.edu");
        updateScore(window.localStorage.getItem("token"), "game", "6");
    }
    else {
        alert("Incorrect. Try using command tracert on the command prompt.");
    }
    return;
}

function submit8(){
    var gamepage = document.getElementById("search-container-8");
    console.log(gamepage);
  
    if(document.getElementById("answerChoice").value === "GoGators"){
      alert("Flag Found!");
      updateScore(window.localStorage.getItem("token"), "game", "7");
    } else{
      alert("Try again!");
    }
    return;
  }

const box = {
    boxShadow: "0 3px 10px rgba(0,0,0,.3)",
    padding: "30px 40px"
}

const test = (key, eventKey) => {
    console.log(key);
    console.log(eventKey);
    if (eventKey === 'second'){
        console.log('Second was clicked');
    }
};

function GamePage() {
        
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);

    const intervalRef = useRef(null);
        
    const handleStart = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed = (time - now) / 1000;

    const handleStart2 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop2 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed2 = (time - now) / 1000;

    const handleStart3 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop3 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed3 = (time - now) / 1000;

    const handleStart4 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop4 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed4 = (time - now) / 1000;

    const handleStart5 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop5 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed5 = (time - now) / 1000;

    const handleStart6 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop6 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed6 = (time - now) / 1000;
    
    const handleStart7 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop7 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed7 = (time - now) / 1000;

    const handleStart8 = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
            }, 10);
        };

    const handleStop8 = () => {
        clearInterval(intervalRef.current);
    }
        
    let timePassed8 = (time - now) / 1000;
    
    return (
        <div id="gamepagediv">
            <h1 id="gametitle">Game</h1>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={box}>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" onclick = {handleStart}>Q1: Cross-Site Scripting</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" onClick={handleStart2}>Q2: URL SQL Injection</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" onClick={handleStart3}>Q3: Login SQL Injection</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" onClick={handleStart4}>Q4: Input Sanitization </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" onClick={handleStart5}>Q5: Cryptography</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth" onClick={handleStart6}>Q6: Phishing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seventh" onClick={handleStart7}>Q7: Network Traffic Analysis: Traceroute</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eighth" onClick={handleStart8}>Q8: Web</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p> This first question focuses on Cross-Site Scripting (XSS). Type in a JavaScript command into the search bar to run a JavaScript alert that displays "Attack Successful".
                                    Hint: Wrap the JavaScript code with the script tag.
                                </p>
                                <div className="search-container">
                                    <input type="text" placeholder="Search...." id="search"></input>
                                    <button className="button" onClick= {submit}>Submit</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed.toFixed(3)}</h2>
                                <div>
                                    {/* <button onClick = {handleStart}>Start</button> */}
                                    <button  onClick = {handleStop}>Stop</button>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p> This question focuses on running a SQL injection attack. Imagine that when we insert this URL into a browser https://test-website.com/accounts?info=Usernames
                                    this SQL command (SELECT * FROM accounts WHERE info = 'Usernames' AND hidden = 0) is run to return you a list of both usernames that are not hidden and those that are hidden.
                                    Update the URL so that a SQL injection attack is changed so that both unhidden and hidden usernames are displayed.
                                </p>
                                <div id="search-container-2" >
                                    <input type="text" placeholder="Search...." id="search-2"></input>
                                    <button className="button" onClick= {submit2}>Submit</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed2.toFixed(3)}</h2>
                                <button onClick = {handleStop2}>Stop</button>
                                <div id="tableDiv">
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p> This question is a different varitation of a SQL injection attack. We have a login form where a person can type in their username and password.
                                    If a user types in "Bob" into the username and "12345" into the password field, a SQL query is performed on the database that looks like this
                                    SELECT * FROM users WHERE username = 'Bob' AND password = '12345'. If a website doesn't have the features necessary to protect against SQL injection,
                                    someone can alter the SQL query to enable them to login as an administrator. Change the username and password so you can login as the administrator.
                                </p>
                                <div id="search-container-3">
                                    <input type="text" placeholder="Email..." id="email"></input>
                                    <input type="text" placeholder="Password..." id="password"></input>
                                    <button className="button" onClick= {submit3}>Login</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed3.toFixed(3)}</h2>
                                <button onClick = {handleStop3}>Stop</button>
                                {/* // <div>
                                //     <button onClick ={handleStart}>Start</button>
                                //     <button onClick = {handleStop}>Stop</button>
                                // </div> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p>This question is about input sanitization to prevent things such as Cross-Site Scrypting attacks. Imagine an attacker types in a URL that has some
                                    script to run some malicious function into a browser (Ex: https://www.testwebsite.com/accdashboard.html#context=&lt;script&gt;SomeFunction(somevariable)&lt;/script&gt;).
                                    A secure browser with input sanitation would change a malicious input by replacing, removing, or escaping characters. Manipulate this input just as a secure
                                    browser would so that the script is not run as code, but interpreted as data and type your answer into the input field.
                                </p>
                                <div id="search-container-4">
                                    <input type="text" placeholder="Type in answer..." id="search-4"></input>
                                    <button className="button" onClick= {submit4}>Submit</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed4.toFixed(3)}</h2>
                                <button onClick = {handleStop4}>Stop</button>
                                {/* <div>
                                    <button onClick ={handleStart}>Start</button>
                                    <button onClick = {handleStop}>Stop</button>
                                </div> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <p>This question focuses on decrypting some text to make sense of it. In this case we have used a Caeser Cypher to encrypt the text. You have to figure out
                                    what our shifting key is to decode the text. Go to this website (https://www.dcode.fr/caesar-cipher) and decrypt this text
                                    (Nylha qvi, fvb zbjjlzzmbssf kljyfwalk aopz tlzzhnl! Aol zljyla rlf pz: BMJZNhavyzJfilyzljbypaf) to get the secret key
                                    key and type it into the input field to receive credit. Hint: The key is a number between 1 and 10.
                                </p>
                                <div id="search-container-5">
                                    <input type="text" placeholder="Type in secret key..." id="key"></input>
                                    <button className="button" onClick= {submit5}>Submit</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed5.toFixed(3)}</h2>
                                <button onClick = {handleStop5}>Stop</button>

                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <p>
                                    True or False: The following email is an example of phishing.
                                </p>

                                <a href="https://efax.hosting.com.mailru382.co/efaxdelivery/2017Dk4h325RE3" > <img className='eFax-image' src={eFax} alt="phishing" /></a>
                                <div className="search-container-6">
                                    <input type="text" placeholder="true/false" id="true/false"></input>
                                    <button className="button" onClick= {submit6}>Submit</button>

                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed6.toFixed(3)}</h2>
                                <button onClick = {handleStop6}>Stop</button>
                                {/* <div>
                                    <button onClick ={handleStart}>Start</button>
                                    <button onClick = {handleStop}>Stop</button>
                                </div> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                                <p>
                                    Run a traceroute on the following IP Address "128.227.36.35". Provide the IP address for the hop before the last one.
                                </p>
                                <div id="search-container-7">
                                    <input type="text" placeholder="Type in the IP Address" id="IP"></input>
                                    <button className="button" onClick= {submit7}>Submit</button>
                                </div>
                                <br></br>
                                <h2>Time Taken: {timePassed7.toFixed(3)}</h2>
                                <button onClick = {handleStop7}>Stop</button>
                                {/* <div>
                                    <button onClick ={handleStart}>Start</button>
                                    <button onClick = {handleStop}>Stop</button>
                                </div> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="eighth">
                                <p>The Flag is </p>
                                <p hidden>GoGators</p>
                                <div id="search-container-8">
                                <input type="text" placeholder="Type in secret key..." id="answerChoice"></input>
                                <button className="button" onClick= {submit8}>Submit</button>
                                <br></br>
                                <h2>Time Taken: {timePassed8.toFixed(3)}</h2>
                                <button onClick = {handleStop8}>Stop</button>
                                {/* <div>
                                    <button onClick ={handleStart}>Start</button>
                                    <button onClick = {handleStop}>Stop</button>
                                </div> */}
                    </div>
                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default GamePage;