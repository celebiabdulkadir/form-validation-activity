'use client';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const FormValidation = () => {
	const schema = yup.object().shape({
		firstName: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('First name is required')
			.matches(/^[a-zA-Z0-9\s]*$/, 'Only alphanumeric characters are allowed'),
		lastName: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('Last name is required')
			.matches(/^[a-zA-Z0-9\s]*$/, 'Only alphanumeric characters are allowed'),
		email: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('Email is required')
			.email('Invalid email address'),
		phone: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('Phone number is required')
			.matches(/^\d{10}$/, 'Phone number must be 10 digits'),
		address: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('Address is required'),
		checkbox: yup.bool().oneOf([true], 'You must agree to terms.'),
	});
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		// Trimming the values

		console.log(data);
	};
	const pattern = {
		value: /^[a-zA-Z0-9\s]*$/,
		message: 'Invalid character',
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col space-y-4 bg-violet-300 px-48 py-20 rounded'
		>
			<div className='flex flex-col'>
				<label className='font-bold'>First Name</label>
				<input
					{...register('firstName', {
						required: 'First name is required',
						pattern,
					})}
					className='border p-2 rounded text-black'
				/>
				{errors.firstName && (
					<p className='text-red-600'>{errors.firstName.message}</p>
				)}
			</div>

			<div className='flex flex-col'>
				<label className='font-bold'>Last Name</label>
				<input
					{...register('lastName', {
						required: 'Last name is required',
						pattern,
					})}
					className='border p-2 rounded text-black'
				/>
				{errors.lastName && (
					<p className='text-red-600'>{errors.lastName.message}</p>
				)}
			</div>

			<div className='flex flex-col'>
				<label className='font-bold'>Email</label>
				<input
					{...register('email')}
					className='border p-2 rounded text-black'
				/>
				{errors.email && <p className='text-red-600'>{errors.email.message}</p>}
			</div>

			<div className='flex flex-col'>
				<label className='font-bold'>Phone</label>
				<input
					{...register('phone')}
					className='border p-2 rounded text-black'
				/>
				{errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
			</div>

			<div className='flex flex-col'>
				<label className='font-bold'>Address</label>
				<input
					{...register('address')}
					className='border p-2 rounded text-black'
				/>
				{errors.address && (
					<p className='text-red-600'>{errors.address.message}</p>
				)}
			</div>

			<div className='flex items-center space-x-2'>
				<input type='checkbox' {...register('checkbox')} />
				<label className='font-bold'>Agree to terms</label>
			</div>
			{errors.checkbox && (
				<p className='text-red-600'>{errors.checkbox.message}</p>
			)}

			<input
				type='submit'
				className='bg-blue-600 text-white p-2 rounded cursor-pointer'
			/>
		</form>
	);
};
export default FormValidation;
