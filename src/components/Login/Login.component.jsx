import React, { useState } from 'react';
import Styled from './Login.styled';
import { useData } from '../../states/provider';
import { ACTIONS } from '../../states/reducer';

function ModalLogin({ show }) {
    const { data, dispatch } = useData();
    const [userName, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(false);

    function validateUserLogin() {
        if (data.loginUser) {
            show(false);
        } else {
            setErrorMessage('usuario Invalido');
        }
    }

    function handlerLogin() {
        console.log(data);
        if (userName && userName.trim().length > 0) {
            if (password && password.trim().length > 0) {
                dispatch({
                    type: ACTIONS.LOGIN,
                    payload: { user: userName },
                });

                setTimeout(validateUserLogin, 300);
            } else {
                setErrorMessage('Please enter a password');
            }
        } else {
            setErrorMessage('Please enter a username');
        }
    }

    return (
        <div>
            {data.loginUser ? (
                ''
            ) : (
                <Styled.ModalBackground>
                    <Styled.ModalContent>
                        <Styled.CloseButton onClick={() => show(false)}>
                            &times;
                        </Styled.CloseButton>
                        <Styled.LoginForm>
                            <Styled.FormLabel htmlFor="uname">
                                <b>Username</b>
                            </Styled.FormLabel>
                            <Styled.Input
                                type="text"
                                placeholder="Wizeline"
                                name="uname"
                                required
                                onChange={(event) => setUserName(event.target.value)}
                            />

                            <Styled.FormLabel htmlFor="psw">
                                <b>Password</b>
                            </Styled.FormLabel>
                            <Styled.Input
                                type="password"
                                placeholder="Not Empty Password"
                                name="psw"
                                required
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span>{errorMessage || ''}</span>

                            <Styled.LoginButton type="button" onClick={handlerLogin}>
                                Login
                            </Styled.LoginButton>
                        </Styled.LoginForm>
                    </Styled.ModalContent>
                </Styled.ModalBackground>
            )}
        </div>
    );
}

export default ModalLogin;
