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
			.test(
				'Digits only',
				'Phone number must be numeric characters',
				(value) => {
					return /^\d+$/.test(value);
				}
			)
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
		reset,
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		prompt(JSON.stringify(data, null, 2));
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-center items-center space-y-4 bg-violet-300 sm:bg-violet-300 px-2 py-2 sm:px-6 sm:py-4 lg:px-48 lg:py-20 h-full  rounded w-full sm:w-2/3 lg:w-1/2'
		>
			<h1 className='text-center text-3xl font-bold'>SIGN UP</h1>
			<div className='flex flex-col w-full'>
				<label className='font-bold'>First Name</label>
				<input
					{...register('firstName')}
					className='border p-2 rounded text-black w-full '
				/>
				<p className={`text-red-600 ${errors.firstName ? '' : 'invisible'}`}>
					{errors.firstName?.message || 'Placeholder'}
				</p>
			</div>

			<div className='flex flex-col w-full'>
				<label className='font-bold'>Last Name</label>
				<input
					{...register('lastName')}
					className='border p-2 rounded text-black w-full'
				/>
				<p className={`text-red-600 ${errors.lastName ? '' : 'invisible'}`}>
					{errors.lastName?.message || 'Placeholder'}
				</p>
			</div>

			<div className='flex flex-col w-full'>
				<label className='font-bold'>Email</label>
				<input
					{...register('email')}
					className='border p-2 rounded text-black w-full'
				/>
				<p className={`text-red-600 ${errors.email ? '' : 'invisible'}`}>
					{errors.email?.message || 'Placeholder'}
				</p>
			</div>

			<div className='flex flex-col w-full'>
				<label className='font-bold'>Phone</label>
				<input
					{...register('phone')}
					className='border p-2 rounded text-black w-full'
				/>
				<p className={`text-red-600 ${errors.phone ? '' : 'invisible'}`}>
					{errors.phone?.message || 'Placeholder'}
				</p>
			</div>

			<div className='flex flex-col w-full'>
				<label className='font-bold'>Address</label>
				<input
					{...register('address')}
					className='border p-2 rounded text-black w-full'
				/>
				<p className={`text-red-600 ${errors.address ? '' : 'invisible'}`}>
					{errors.address?.message || 'Placeholder'}
				</p>
			</div>

			<div className='flex items-center space-x-2 w-full'>
				<input type='checkbox' {...register('checkbox')} />
				<label className='font-bold'>Agree to terms</label>
			</div>
			<p className={`text-red-600 ${errors.checkbox ? '' : 'invisible'}`}>
				{errors.checkbox?.message || 'Placeholder'}
			</p>

			<input
				type='submit'
				className='bg-blue-600 hover:scale-105 hover:bg-blue-800 text-white p-2 rounded cursor-pointer'
			/>
		</form>
	);
};
export default FormValidation;
