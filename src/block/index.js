import './index.scss';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType('ajax-load-more/render', {
	icon: {
		src: (
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="80" height="80" rx="8" fill="#E34745" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20 59H33.585V56.91C32.0817 56.0667 30.4867 55.535 28.8 55.315L32.045 46.57H44.255L47.445 55.315C46.7117 55.4617 45.9417 55.6817 45.135 55.975C44.3283 56.2683 43.5767 56.58 42.88 56.91V59H60.095V56.91C59.545 56.5433 58.9033 56.2225 58.17 55.9475C57.4367 55.6725 56.7033 55.4617 55.97 55.315L42.165 19.84H38.095L23.905 55.315C23.245 55.4617 22.5758 55.6725 21.8975 55.9475C21.2192 56.2225 20.5867 56.5433 20 56.91V59ZM38.2325 28.3232L43.1 42.995H33.365L38.2325 28.3232Z"
					fill="white"
					fillOpacity="0.8"
				/>
			</svg>
		),
	},
	edit,
});