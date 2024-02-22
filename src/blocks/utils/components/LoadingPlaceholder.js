import { Placeholder, Spinner } from '@wordpress/components';

/**
 * A loading placehdoler for while a server-side block is rendering in the editor.
 *
 * @return {Element} The LoadingPlaceholder component.
 */
export default function LoadingPlaceholder() {
	return (
		<Placeholder>
			<Spinner />
		</Placeholder>
	);
}
