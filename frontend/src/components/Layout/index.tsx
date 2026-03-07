import { Outlet } from 'react-router-dom'
import WhatsAppButton from '../WhatsAppButton'
import Navbar from '../Navbar'

export default function Layout() {
	return (
		<>
			<Navbar />
			<WhatsAppButton />
			<Outlet />
		</>
	)
}
