import { useBlockProps } from '@wordpress/block-editor';
import domReady from '@wordpress/dom-ready';
import ServerSideRender from '@wordpress/server-side-render';
import { openBlockSidebar } from '../utils/blockSidebar';
import block from './block.json';
import Inspector from './inspector';

export default function (props) {
	const { attributes } = props;
	const blockProps = useBlockProps();

	return (
		<>
			<Inspector {...props} />
			<div {...blockProps} onFocus={() => openBlockSidebar()}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
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
