import { select, dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import ServerSideRender from '@wordpress/server-side-render';
import EditWrapper from '../utils/components/editor/EditWrapper';
import Loader from '../utils/components/editor/Loader';
import block from './block.json';
import Inspector from './inspector';
import { parseObjectToShortcode, parseShortcodeToObject } from '../../global/shortcode';

export default function (props) {
	const { attributes, clientId, setAttributes } = props;

	let newAttributes = { ...attributes };

	// Query Loop block props.

	const parentId = select('core/block-editor').getBlockHierarchyRootClientId(clientId); // Get parent block.
	const prevBlockId = select('core/block-editor').getPreviousBlockClientId(clientId); // Get previous block ID.
	const prevBlock = parentId ? select('core/block-editor').getBlock(prevBlockId) : null; // Select the target block

	if (prevBlock && prevBlock?.name === 'core/query') {
		const { attributes: queryAttributes } = prevBlock;
		const { queryId = null } = queryAttributes;

		// Get the block attributes.
		const blockAtts = select('core/block-editor').getBlockAttributes(prevBlockId);
		const { className } = blockAtts;

		const targetClassname = `alm-query-loop-${queryId}`;

		// Dynamically add class to Query Loop block.
		if (className.search(targetClassname) === -1) {
			dispatch('core/block-editor').updateBlockAttributes(prevBlockId, {
				className: `${className} ${targetClassname}`,
			});
		}

		// Create default Query Loop params.
		const defaults = {
			query_loop: 'true',
			query_loop_id: queryId,
			pause: 'true',
		};

		// Parse shortcode and spread in default attributes.
		const params = { ...parseShortcodeToObject(newAttributes?.shortcode), ...defaults };

		newAttributes.shortcode = parseObjectToShortcode('ajax_load_more', params);
		setAttributes({ shortcode: newAttributes.shortcode });
	}

	return (
		<>
			<Inspector {...props} />
			<EditWrapper>
				<ServerSideRender block={block.name} attributes={newAttributes} LoadingResponsePlaceholder={Loader} EmptyResponsePlaceholder={Loader} />
			</EditWrapper>
		</>
	);
}

/**
 * Watch for changes to the DOM and initialize ALM blocks.
 */
const almBlockCallback = function () {
	const alm = document.querySelectorAll('.wp-block-ajax-load-more-core .ajax-load-more-wrap');
	if (alm?.length) {
		[...alm].forEach((instance) => {
			ajaxloadmore.wpblock(instance);
		});
	}
};

domReady(() => {
	const observer = new MutationObserver(almBlockCallback);
	const targetNode = document.querySelector('#editor');
	const config = { attributes: false, childList: true, subtree: true };
	observer.observe(targetNode, config);
});
