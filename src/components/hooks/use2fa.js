import { useForm } from "react-hook-form"

export const use2Fa = () => {
    const authenticationForm = useForm({
        defaultValues:{
            otp: ''
        }
    })

    const getAccessToken  = authenticationForm.handleSubmit((values) => {
        console.log(values)
    })

    return {authenticationForm, getAccessToken, register: authenticationForm.register}
}