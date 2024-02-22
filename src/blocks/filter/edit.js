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
