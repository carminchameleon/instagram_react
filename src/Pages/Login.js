import React from "react";
import "./Login.css";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    // 기본 값을 설정해 놓는다. 우선은 아무런 input도 없으므로 "" , 초기화를 할때도 필요하다.
    id: "",
    pw: "",
    btnClass: "logOff" // 우선 비활성화 상태일때의 버튼의 class
  };
  handleChange = e => {
    // 인풋에 값을 입력했을 때 발생하는 함수
    this.setState({
      //state에 설정해 놓은 값을 바꿔야 하므로
      [e.target.name]: e.target.value, // input 내용이 각각의 name으로 설정해놓은 id, pw로 들어간다.
      [e.target.name]: e.target.value
    });
  };

  goToMain() {
    // 메인 페이지로 가는 함수
    if (this.state.id && this.state.pw) {
      // 만약 input안의 값들이 있다면
      this.props.history.push("/main"); // main 페이지로 연결. 버튼의 활성화
    } // 그렇지 않으면 버튼이 활성화되지 않음
  }

  render() {
    return (
      <div className="login_wrapper">
        <div className="login">
          <div className="login_container">
            <div className="login_logo">
              <img
                src="./img/logo_text.png"
                alt="instagram_logo"
                className="logo"
              />
            </div>
            <div className="login_main">
              <form className="login_ask">
                <div className="askId">
                  <input
                    className="idInput"
                    type="text"
                    name="id" // input을 구분하기 위해서 name을 지정
                    value={this.state.id}
                    onInput={this.handleChange.bind(this)} // 이벤트 핸들러를 onChange로 해도 된다.
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </div>
                <div className="askPW">
                  <input
                    className="pwInput"
                    type="text"
                    name="pw" // input을 구분하기 위해서 name을 지정. this.state.pw 이므로 이름을 같게 설정
                    value={this.state.pw}
                    onInput={this.handleChange.bind(this)} // 이벤트 핸들러를 onChange로 해도 된다.
                    placeholder="비밀번호"
                  />
                </div>

                <div className="login_submit">
                  <button
                    className={this.state.btnClass}
                    style={{
                      // 값이 있다면 버튼의 색을 바꿔준다. inline style 지정이 가장 강력하기 때문에 바꿀 수 있다.
                      backgroundColor:
                        this.state.id && this.state.pw ? "#3897f0" : ""
                    }}
                    onClick={this.goToMain.bind(this)}
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <div className="login_help">
              <div className="login_forgetPW">비밀번호를 잊으셨나요?</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
