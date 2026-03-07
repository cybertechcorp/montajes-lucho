import Error from '../pages/Error'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Reviews from '../pages/Reviews'
import Layout from '../components/Layout'
import ProtectedRoute from './ProtectedRoute'

export const Routes = [
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<Layout />
			</ProtectedRoute>
		),
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/reviews',
				element: <Reviews />,
			},
		],
	},
]
