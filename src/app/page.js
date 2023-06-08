import Image from 'next/image';
import FormValidation from './components/FormValidation';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<FormValidation></FormValidation>
		</main>
	);
}
