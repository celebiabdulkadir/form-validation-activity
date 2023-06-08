import Image from 'next/image';
import FormValidation from './components/FormValidation';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center  '>
			<FormValidation></FormValidation>
		</main>
	);
}
