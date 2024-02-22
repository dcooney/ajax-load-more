import domReady from '@wordpress/dom-ready';
import ServerSideRender from '@wordpress/server-side-render';
import BlockEditWrapper from '../utils/components/BlockEditWrapper';
import Loader from '../utils/components/Loader';
import block from './block.json';
import Inspector from './inspector';

export default function (props) {
	const { attributes } = props;
	return (
		<>
			<Inspector {...props} />
			<BlockEditWrapper>
				<ServerSideRender block={block.name} attributes={attributes} LoadingResponsePlaceholder={Loader} EmptyResponsePlaceholder={Loader} />
			</BlockEditWrapper>
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
