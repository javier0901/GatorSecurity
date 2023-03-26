import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function updateScore(token_, section_, index_) {
  fetch("http://localhost:5000/updatescore", {
    method: "PUT",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
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

function checkAnswer1() {

  var selectionQ1 = document.getElementById("q1option1");
  if (selectionQ1.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "0");
  }
  else {
    alert("Incorrect. Try again!");
  }
}


function checkAnswer2() {

  var selectionQ2 = document.getElementById("q2option3");
  if (selectionQ2.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "1");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function checkAnswer3() {

  var selectionQ3 = document.getElementById("q3option2");
  if (selectionQ3.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "2");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function checkAnswer4() {

  var selectionQ4 = document.getElementById("q4option1");
  if (selectionQ4.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "3");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function checkAnswer5() {

  var selectionQ5 = document.getElementById("q5option3");
  if (selectionQ5.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "4");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function checkAnswer6() {

  var selectionQ6 = document.getElementById("q6option2");
  if (selectionQ6.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "5");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function checkAnswer7() {

  var selectionQ7 = document.getElementById("q7option4");
  if (selectionQ7.checked == true) {
    alert("Correct!");
    updateScore(window.localStorage.getItem("token"), "learn", "6");
  }
  else {
    alert("Incorrect. Try again!");
  }
}

function LearnPage() {



  const container = {
    display: "block",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "50px"

  };

  const heading = {
    fontFamily: "Gluten",
    color: "#2613fe",
    fontSize: "40px",
    paddingBottom: "50px",
    textDecorationLine: "underline"

  };

  const tabs = {
    fontFamily: "Gluten",
    color: "#2613fe"

  };

  const tab = {

    padding: "30px",
    boxShadow: "0 3px 10px rgba(0,0,0,.3)",
    fontFamily: "Gluten",
    marginBottom: "80px"

  };

  const list = {
    listStyleType: "circle",
    listStylePosition: "inside",
    display: "inline-block"
  };

  const spaceAfterQ = {
    paddingTop: "10px"
  }

  const [answer1, setSelection1] = React.useState('');
  const onChange1 = e => {
    setSelection1(e.target.value)
  }

  const [answer2, setSelection2] = React.useState('');
  const onChange2 = e => {
    setSelection2(e.target.value)
  }

  const [answer3, setSelection3] = React.useState('');
  const onChange3 = e => {
    setSelection3(e.target.value)
  }

  const [answer4, setSelection4] = React.useState('');
  const onChange4 = e => {
    setSelection4(e.target.value)
  }

  const [answer5, setSelection5] = React.useState('');
  const onChange5 = e => {
    setSelection5(e.target.value)
  }

  const [answer6, setSelection6] = React.useState('');
  const onChange6 = e => {
    setSelection6(e.target.value)
  }

  const [answer7, setSelection7] = React.useState('');
  const onChange7 = e => {
    setSelection7(e.target.value)
  }

  return (
    <div id="learndiv" style={container}>
      <h4 style={heading}>Learn</h4>
      <Tabs fill justify defaultActiveKey="first" style={tabs}>
        <Tab eventKey="first" title="Input Validation" style={tab}>
          Input validation is used to check the data that is being entered to ensure it is of the proper form. It should be applied to both syntactical and semantic levels and occur as soon as data is being entered from the user.
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li><strong>Syntactic:</strong> Arrangement of data in fields. i.e. Data is of the form MM-DD-YYYY. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Semantic:</strong> Correctness of values. i.e. Start date is before end date. </li><div style={{ paddingBottom: "10px" }}></div>
            <div style={{ paddingBottom: "10px" }}></div>
          </ul>
            <div style={spaceAfterQ}></div>
          </div> Q: Input validation should happen as early as possible. True or False?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q1option1"
                      inline
                      label="True"
                      name="answer1"
                      type={type}
                      value="True"
                      checked={answer1 === "True"}
                      onChange={onChange1}

                    />
                    <Form.Check id="q1option2"
                      inline
                      label="False"
                      name="answer1"
                      type={type}
                      value="False"
                      checked={answer1 === "False"}
                      onChange={onChange1}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer1}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer1}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from OWASP.
        </Tab>
        <Tab eventKey="second" title="Encoding & Escaping" style={tab}>
          Encoding and escaping can help prevent injection attacks, which will be discussed in the later sections. Encoding involves translating characters into another form. Escaping is used when not all of the characters have to be encoded. Here, a certain character is placed before a string or character to avoid misinterpretation. An example of this is placing a <strong>\</strong> character in front of <strong>"</strong> so that the <strong>"</strong> is interpreted as part of the string or text.
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div> Q: Which symbol do you use to escape?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q2option1"
                      inline
                      label="."
                      name="answer2"
                      type={type}
                      value="."
                      checked={answer2 === "."}
                      onChange={onChange2}

                    />
                    <Form.Check id="q2option2"
                      inline
                      label="?"
                      name="answer2"
                      type={type}
                      value="?"
                      checked={answer2 === "?"}
                      onChange={onChange2}

                    />
                    <Form.Check id="q2option3"
                      inline
                      label="\"
                      name="answer2"
                      type={type}
                      value="\"
                      checked={answer2 === "\\"}
                      onChange={onChange2}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer2}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer2}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from OWASP.
        </Tab>
        <Tab eventKey="third" title="Cross-Site Scripting" style={tab}>
          Cross-site scripting (XSS) is when an attacker inserts malicious scripts, usually JavaScript, into a web application. When the browser sees the script, it executes the code. This type of attack is one of the most common vulnerabilities. But, most of the time the vulnerabilities are hidden like through a link or an e-mail. The three types of cross-site scripting are as follows:
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li><strong>Reflected:</strong> Malicious code that is embedded in the HTTP request is "reflected" back to the user. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Stored:</strong> Web application stores the malicious code in a server or database and passes it on to other users.</li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Document Object Model (DOM)-based:</strong> Triggered by JavaScript events and runs immediately. The attack is embedded into the existing webpage. </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
            One case of XSS is an insertion using the script tag. For example, a possible script could be <strong>&lt;script&gt;alert('Display message here')&lt;/script&gt;</strong>, and the page would execute the script.
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div> Q: The reflected type of XSS is stored within a database. True or False?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q3option1"
                      inline
                      label="True"
                      name="answer3"
                      type={type}
                      value="True"
                      checked={answer3 === "True"}
                      onChange={onChange3}

                    />
                    <Form.Check id="q3option2"
                      inline
                      label="False"
                      name="answer3"
                      type={type}
                      value="False"
                      checked={answer3 === "False"}
                      onChange={onChange3}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer3}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer3}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from CodePath, OWASP, and Veracode.
        </Tab>
        <Tab eventKey="fourth" title="SQL Injection" style={tab}>
          SQL injection happens when an attacker inputs a SQL statement into a user input, allowing the attacker to view data that they should not be able to access. This attack can allow modification of a database using Insert/Update/Delete or even gaining control to root user privileges.  <div style={spaceAfterQ}></div>
          The best way to prevent this attack is by sanitizing input, which means escaping certain SQL characters. One example is to not run a script tag, you can type a less than or greater than sign using '&lt' and '&gt'. Additionally, only giving the least amount of privilege necessary is also a great principle to follow.
          <div style={spaceAfterQ}></div>
          Structured Query Language (SQL) uses the form 'SELECT FROM WHERE' where one example is that you can SELECT attribute FROM relation WHERE attribute=value in a database. One example could be (SELECT * FROM Users WHERE userID='1234' OR 1=1), where the 1=1 is always true and * means all. Therefore, an attacker could insert '1234 OR 1=1' into a field and may be able to get access to all user information. Additionally, if an attacker wanted adminstrator access they could insert a username such as admin'-- to complete the WHERE clause. The -- indicates the start of a comment in SQL and could be used to bypass the password field.
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Which of the following is a good technique to use to prevent SQL injections?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q4option1"
                      inline
                      label="Least privilege principle"
                      name="answer4"
                      type={type}
                      value="Least privilege principle"
                      checked={answer4 === "Least privilege principle"}
                      onChange={onChange4}

                    />
                    <Form.Check id="q4option2"
                      inline
                      label="Most privilege principle"
                      name="answer4"
                      type={type}
                      value="Most privilege principle"
                      checked={answer4 === "Most privilege principle"}
                      onChange={onChange4}


                    />
                    <Form.Check id="q4option3"
                      inline
                      label="Cleaning"
                      name="answer4"
                      type={type}
                      value="Cleaning"
                      checked={answer4 === "Cleaning"}
                      onChange={onChange2}

                    />
                    <Form.Check id="q4option4"
                      inline
                      label="Sweeping"
                      name="answer4"
                      type={type}
                      value="Sweeping"
                      checked={answer4 === "Sweeping"}
                      onChange={onChange4}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer4}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer4}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from PortSwigger, CodePath, OWASP, and W3Schools.
        </Tab>
        <Tab eventKey="fifth" title="Cryptography" style={tab}>
          Cryptography involves studying encryption techniques, or keeping information private through encoding. Typically, these techniques involve turning text into cipher text that only the receiver can encode and reveal.
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li><strong>Symmetric Key:</strong> Sender and receiver use one common key. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Hash Functions:</strong> No key. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Asymmetric Key:</strong> A pair of keys is used and includes a private and public one. Only the receiver knows the private key.  </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
          </div>

          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Which of the following types of cryptography do not use a key?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q5option1"
                      inline
                      label="Symmetric key"
                      name="answer5"
                      type={type}
                      value="Symmetric key"
                      checked={answer5 === "Symmetric key"}
                      onChange={onChange5}

                    />
                    <Form.Check id="q5option2"
                      inline
                      label="Asymmetric key"
                      name="answer5"
                      type={type}
                      value="Asymmetric key"
                      checked={answer5 === "Asymmetric key"}
                      onChange={onChange5}

                    />
                    <Form.Check id="q5option3"
                      inline
                      label="Hash functions"
                      name="answer5"
                      type={type}
                      value="Hash functions"
                      checked={answer5 === "Hash functions"}
                      onChange={onChange5}


                    />
                    <Form.Check id="q5option4"
                      inline
                      label="0-hash"
                      name="answer5"
                      type={type}
                      value="0-hash"
                      checked={answer5 === "0-hash"}
                      onChange={onChange5}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer5}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer5}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from CodePath and GeeksForGeeks.
        </Tab>
        <Tab eventKey="sixth" title="User Authentication" style={tab}>
          User authentication involves confirming the identity of the user that is attempting to access an application or network. In today's society, it is more and more common for additional authentication methods such as "two-factor" or "multi-factor" to be used to verify the identiy of the user. There are three different categories that explain the types of authentication methods.

          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}><ul style={list}>
            <li><strong>Knowledge:</strong> Includes passwords, PINs, and security questions. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Ownership/Possession:</strong> Includes credit card numbers and key fobs. </li><div style={{ paddingBottom: "10px" }}></div>
            <li><strong>Inherence:</strong> Includes DNA, fingerprints, voice, retina.  </li><div style={{ paddingBottom: "10px" }}></div>
          </ul>
          </div>
          <div style={spaceAfterQ}></div>
          <div style={spaceAfterQ}></div>
          Q: Possession authentication methods include what the user "is". True or False?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q6option1"
                      inline
                      label="True"
                      name="answer6"
                      type={type}
                      value="True"
                      checked={answer6 === "True"}
                      onChange={onChange6}

                    />
                    <Form.Check id="q6option2"
                      inline
                      label="False"
                      name="answer6"
                      type={type}
                      value="False"
                      checked={answer6 === "False"}
                      onChange={onChange6}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer6}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer6}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>
          Sourced from CodePath and TechTarget.
        </Tab>
        <Tab eventKey="eigth" title = "Phishing" style={tab}>
        Web exploitation is the process of exploiting vulnerabilities in web-based applications to gain access to sensitive data or control over the app. Attackers can exploit these vulnerabilities to take over the entire app, steal sensitive data, or use the app to launch attacks on other systems.
        <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div> Q: What are the most popular signs of a phishing scam?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q7option1"
                      inline
                      label="A. The email comes with a disclaimer/alert notifying the user that it is spam."
                      name="answer7"
                      type={type}
                      value="A. The email comes with a disclaimer/alert notifying the user that it is spam."
                      checked={answer7 === "A. The email comes with a disclaimer/alert notifying the user that it is spam."}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option2"
                      inline
                      label="B. The email is empty and contains nothing in the subject or body."
                      name="answer7"
                      type={type}
                      value="B. The email is empty and contains nothing in the subject or body."
                      checked={answer7 === "B. The email is empty and contains nothing in the subject or body."}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option3"
                      inline
                      label="C. An authentic sender sending regular subscribed updates."
                      name="answer7"
                      type={type}
                      value="C. An authentic sender sending regular subscribed updates."
                      checked={answer7 === "C. An authentic sender sending regular subscribed updates."}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option4"
                      inline
                      label="D. Inconsistency in the sender’s email ID and how the recipient is addressed."
                      name="answer7"
                      type={type}
                      value="D. Inconsistency in the sender’s email ID and how the recipient is addressed."
                      checked={answer7 === "D. Inconsistency in the sender’s email ID and how the recipient is addressed."}
                      onChange={onChange7}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer7}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer7}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from InspiredeLearning.
        </Tab>
        <Tab eventKey="seventh" title="Web Exploitation" style={tab}>
          Phishing is a technique used to obtain sensitive information such as names, addresses, bank account numbers, and other personal details. Scammers will create links that redirect users to a fake website that appears to be legitimate. Scammers attempt to instill a sense of urgency in their victims so that they make poor decisions and give away personal information.
          <div style={{ paddingTop: "15px", width: "70%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div> Q: What is the most common way of web exploitation?<div style={spaceAfterQ}></div>
          <div>
            <Form>
              {['radio'].map((type) => (
                <div className="mb-4">
                  <Form.Group>
                    <Form.Check id="q7option1"
                      inline
                      label="A. SQL Injection"
                      name="answer7"
                      type={type}
                      value="A. SQL Injection"
                      checked={answer7 === "A. SQL Injection"}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option2"
                      inline
                      label="B. Directory Traversal"
                      name="answer7"
                      type={type}
                      value="B. Directory Traversal"
                      checked={answer7 === "B. Directory Traversal"}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option3"
                      inline
                      label="C. Cross Site Request Forgery"
                      name="answer7"
                      type={type}
                      value="C. Cross Site Request Forgery"
                      checked={answer7 === "C. Cross Site Request Forgery"}
                      onChange={onChange7}

                    />
                    <Form.Check id="q7option4"
                      inline
                      label="D. Command Execution"
                      name="answer7"
                      type={type}
                      value="D. Command Execution"
                      checked={answer7 === "D. Command Execution"}
                      onChange={onChange7}

                    />
                  </Form.Group>
                </div>
              ))}
            </Form>
            <Button type="submit" onClick={checkAnswer7}>Submit</Button>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            You selected: <strong>{answer7}</strong>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
            <div style={spaceAfterQ}></div>
          </div>

          Sourced from CTF101 and Mosse Cyber Security Institute.
        </Tab>
      </Tabs>
    </div>
  );
}

export default LearnPage;