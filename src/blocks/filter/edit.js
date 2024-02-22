import ServerSideRender from '@wordpress/server-side-render';
import BlockEditWrapper from '../utils/components/BlockEditWrapper';
import LoadingPlaceholder from '../utils/components/LoadingPlaceholder';
import block from './block.json';
import Inspector from './inspector';

export default function (props) {
	const { attributes } = props;
	return (
		<>
			<Inspector {...props} />
			<BlockEditWrapper>
				<ServerSideRender
					block={block.name}
					attributes={attributes}
					LoadingResponsePlaceholder={LoadingPlaceholder}
					EmptyResponsePlaceholder={LoadingPlaceholder}
				/>
			</BlockEditWrapper>
		</>
	);
}
