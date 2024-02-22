import { dispatch } from '@wordpress/data';

/**
 * Open the block options.
 */
export function openBlockSidebar() {
	dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
}
/**
 * Close the block options.
 */
export function closeBlockSidebar() {
	dispatch('core/edit-post').closeGeneralSidebar();
}
