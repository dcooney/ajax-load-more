import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './index.scss';
import Icon from './Icon';

registerBlockType('ajax-load-more/filter', {
	icon: {
		src: Icon,
	},
	edit,
});
