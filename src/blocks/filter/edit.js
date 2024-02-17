import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import block from './block.json';
import Inspector from './inspector';

export default function (props) {
	const { attributes } = props;
	const blockProps = useBlockProps();

	return (
		<>
			<Inspector {...props} />
			<div {...blockProps}>
				<ServerSideRender block={block.name} attributes={attributes} />
			</div>
		</>
	);
}
