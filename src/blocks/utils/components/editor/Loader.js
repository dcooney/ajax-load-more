import { Flex, Spinner } from '@wordpress/components';

/**
 * A loader for server-side block rendering/updating in the editor.
 *
 * @return {Element} The Loader component.
 */
export default function Loader() {
	return (
		<Flex justify="center" align="center" style={{ padding: '30px 10px' }}>
			<Spinner style={{ width: '20px', height: '20px' }} />
		</Flex>
	);
}
