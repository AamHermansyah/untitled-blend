import { useEffect, useState } from "react"


const InputForm = ({ nameId, title, validationError, pattern, messageError, ...inputProps }) => {
    const [isError, setIsError] = useState(true);

    const handleOnChange = (e) => {
        setIsError(pattern.test(e.target.value) ? false : true);
        pattern.test(e.target.value)
    }

    useEffect(() => {
        validationError(isError, nameId);
    }, [isError]);

    return (
        <label htmlFor={nameId}>
            <span className="mb-1 text-white block">{title}:</span>

            <input {...inputProps}
                onChange={handleOnChange}
                name={nameId}
                id={nameId}
                required
                className="xs:w-[300px] text-[#333] py-2 px-4 outline-none rounded-sm placeholder:text-[#333]"
                autoComplete="off" />

            {isError && <span className="xs:w-[300px] block text-[14px] text-red-600 py-1">{messageError}</span>}
        </label>
    )
}

export default InputForm;