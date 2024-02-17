import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Inspector controls for the block.
 *
 * @param {Object} props Block props.
 * @return {Element} 	 Inspector controls.
 */
export default function (props) {
	const { attributes, setAttributes } = props;

	return (
		<InspectorControls>
			<PanelBody title={__('Settings', 'ajax-load-more')}>
				<TextControl
					label={__('Filter', 'ajax-load-more')}
					help={__('Select an Ajax Load More filter.', 'ajax-load-more')}
					value={attributes?.id}
					onChange={(data) => setAttributes({ id: data })}
					required
				/>
				<TextControl
					label={__('Target', 'ajax-load-more')}
					help={__('The ID of the Ajax Load More instance.', 'ajax-load-more')}
					value={attributes?.target}
					onChange={(data) => setAttributes({ target: data })}
					required
				/>
			</PanelBody>
		</InspectorControls>
	);
}
