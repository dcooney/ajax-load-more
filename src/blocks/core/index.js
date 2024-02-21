import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './index.scss';
import Icon from './Icon';

registerBlockType('ajax-load-more/core', {
	icon: {
		src: Icon,
	},
	edit,
});
