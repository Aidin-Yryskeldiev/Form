import { Box, Button, TextField, styled } from "@mui/material";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Value {
	name: string;
	email: string;
	password: string;
}
const SignIn: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Value>({ mode: "all" });

	const onSUbmitHandler: SubmitHandler<Value> = (data) => {
		console.log(data);
	};

	return (
		<BoxMui component={"form"} onSubmit={handleSubmit(onSUbmitHandler)}>
			<TextField {...register("name")} label="Enter your name" />
			<TextField
				type="email"
				{...register("email", {
					required: "Введите адрес электронной почы",
					pattern: {
						value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
						message: "Введите действительный адрес электронной почты",
					},
				})}
				label="Enter your email"
				error={!!errors.email?.message}
				helperText={errors.email ? errors.email.message : ""}
			/>
			<TextField
				type="password"
				label="Enter your password"
				{...register("password", {
					required: "Введите пароль",
					minLength: {
						value: 6,
						message: "Пароль должен быть не менее 6 символов",
					},
					maxLength: {
						value: 16,
						message: "Пароль должен быть меньше 16 символов",
					},
				})}
				error={!!errors.password?.message}
				helperText={errors.password ? errors.password?.message : ""}
			/>

			<Button type="submit" variant="contained">
				Create{" "}
			</Button>
		</BoxMui>
	);
};

export default SignIn;

const BoxMui = styled(Box)(() => {
	return {
		width: 450,
		minHeight: 100,
		border: "1px solid black",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		padding: 20,
		margin: "80px auto",
	};
});
