import { useState } from "react"
import { STATUS } from '../constants'

import styles from "../styles"
import InputForm from "../components/InputForm"

const ButtonSubmit = ({ isLoading, ...props }) => (
    <button
        className={`button__primary mt-4`} {...props} >
        {isLoading ? 'Loading...' : 'Login'}
    </button>
)

const AdminLogin = () => {
    const [status, setStatus] = useState(STATUS.idle);
    const [formIsValid, setFormIsValid] = useState({
        email: false,
        password: false
    });

    const inputs = [
        {
            type: "email",
            nameId: "email",
            title: "Email",
            placeholder: "Example@gmail.com",
            pattern: /^[a-zA-Z]{3,20}[0-9]{0,6}(@gmail\.com)$/ig,
            messageError: "Email yang anda masukan harus valid"
        },
        {
            type: "password",
            nameId: "password",
            title: "Password",
            placeholder: "Masukan password",
            pattern: /^[A-Za-z0-9!@#$%^&*()\[\]{}\\|<>\/?]{8,24}$/ig,
            messageError: "Password min. 8 dan maks. 24 karakter"
        }
    ]

    const handleError = (errorBool, name) => {
        status === STATUS.error && setStatus(STATUS.idle);
        setFormIsValid({
            ...formIsValid, [name]: !errorBool
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        // send to API
        setStatus(STATUS.error);
    }

    return (
        <section id="login" className={`${styles.flexCenter} flex-col min-h-[91.5vh]`} >
            <h1 className={`${styles.heading} mb-10`}>Admin Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2" autoComplete="off">

                {inputs.map(input => (
                    <InputForm key={input.nameId} {...input} validationError={handleError} />
                ))}

                {status === STATUS.error &&
                    <span className="xs:w-[300px] block text-[14px] text-red-600 py-1">
                        Email atau password yang dimasukan salah
                    </span>
                }

                {formIsValid.email && formIsValid.password &&
                    <ButtonSubmit
                        isLoading={status === STATUS.loading}
                        disabled={status === STATUS.loading && 'disabled'} />
                }
            </form>
        </section>
    )
}

export default AdminLogin