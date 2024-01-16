import './index.scss';
import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

registerBlockType('ajax-load-more/render', {
	edit,
});
