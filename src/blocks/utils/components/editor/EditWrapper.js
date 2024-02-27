import { useBlockProps } from '@wordpress/block-editor';
import { openBlockSidebar } from '../../functions/sidebar';

/**
 * Component wrapper for a block in Edit mode.
 *
 * @param {Object} props Component props.
 * @return {Element}     The EditWrapper component.
 */
export default function EditWrapper(props) {
	const { children, useFocus = true } = props;
	const blockProps = useBlockProps();
	return (
		<div {...blockProps} onFocus={useFocus ? () => openBlockSidebar() : null}>
			{children}
		</div>
	);
}
