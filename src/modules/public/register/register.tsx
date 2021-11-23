import { useForm } from "react-hook-form";
import { TRegister } from "../../../context/register";
import './register.css'

const Register = () => {
  const { register, handleSubmit } = useForm<TRegister>();
  const onSubmit = (data: TRegister) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Register__container">
        <p>Register</p>
        <div className="Register__inputs">
          <input type="text" placeholder="Username" {...register('username')} />
          <input type="text" placeholder="First name" {...register('first_name')} />
          <input type="text" placeholder="Last name" {...register('last_name')} />
          <input type="text" placeholder="Email" {...register('email')} />
          <input type="text" placeholder="Phone number" {...register('phone_number')} />
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  )
}

export default Register;