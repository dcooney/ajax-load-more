import block from './block.json';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

export default function (props) {
	const { attributes, setAttributes, clientId } = props;
	const { className } = attributes;
	const blockProps = useBlockProps({
		className,
	});

	useEffect(() => {
		setAttributes({ key: clientId });
	}, [clientId, setAttributes]);

	return (
		<div {...blockProps}>
			<ServerSideRender block={block.name} />
		</div>
	);
}
