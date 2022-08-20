import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./join.css";


export default function Join(){
    const [Id, setId]=useState("");
    const [nickname, setnickname]=useState("");
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);

    let navigate=useNavigate();

    const signUpDB = () => {  //로그아웃 서버 연결
        fetch('http://43.200.205.215:8080/auth/signup',{

        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
      
        body : JSON.stringify({
            loginId: Id,
            nickname: nickname,
            passwd: password
            }),
        })
        .then(response => response.json())
        .then(navigate('/'))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }}

        const onChangePassword = (e) => {
            setPassword(e.target.value);
        };
        const onChangePasswordChk = (e) => {
            //비밀번호를 입력할때마다 password 를 검증하는 함수
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        };
        
    return(
        <div className="Join">      
            <form>
                <h1 className='Logo'>
                    <img type="button" src='img/flock_logo.png' 
                    onClick={()=>{ navigate('/')}}/>
                </h1>
                <div className='section'>
                    <div>
                        <label style={{float: 'left'}}>ID</label>
                    </div>
                    <br></br>
                    <div>
                        <input
                                type='text' 
                                placeholder='아이디를 입력하세요'
                                value={Id}
                                onChange={(e)=>setId(e.target.value)}
                                className='input_Join'/>
                                           
                        <button className='Join_btn'
                            type="button"
                            style={{
                            backgroundColor: '#1F3E1B',
                            color: 'white',
                            fontSize: 15,
                            marginLeft: 5,
                            height: 41,
                            borderRadius: 8
                        }} >확인</button>
                        
                    </div>
                    <div>
                        <label style={{float: 'left'}}>닉네임</label>
                    </div>
                    <br></br>
                    <div>
                        <input
                                type='text'
                                value={nickname} 
                                onChange={(e)=>setnickname(e.target.value)}
                                placeholder='닉네임을 입력하세요'
                                className='input_Join'/>
                         <button 
                            type="button"
                            className='Join_btn' style={{
                            backgroundColor: '#1F3E1B',
                            color: 'white',
                            fontSize: 15,
                            marginLeft: 5,
                            height: 41,
                            borderRadius: 8
                        }} >확인</button>
                    </div>
                    <div>
                        <label style={{float: 'left'}}>비밀번호</label>
                    </div>
                    <div>
                        <input
                                type='password' 
                                placeholder='비밀번호를 입력하세요'
                                value={password}
                                autoComplete="off"
                                onChange={onChangePassword}
                                className='input_Join1'/>
                    </div>
                    <div>
                        <label style={{float: 'left'}}>비밀번호 확인</label>
                    </div>
                    <div>
                        <input
                                type='password' 
                                value={passwordCheck} 
                                onChange={onChangePasswordChk}
                                placeholder='비밀번호를 입력하세요'
                                autoComplete="off"
                                className='input_Join1'/>
                                {passwordError && <div style={{float: 'left', color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div style={{paddingTop: 60}}>
                        <button className='Join_btn' 
                        onClick={signUpDB}
                        style={{
                            width: 320,
                            height: 45,
                            backgroundColor: '#1F3E1B',
                            borderRadius: 10,
                            fontSize : 18,
                            color: 'white'
                        }} >회원가입</button>
                    </div>
                </div>
            </form>
        </div>
    )
}