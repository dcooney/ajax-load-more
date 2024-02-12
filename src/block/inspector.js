import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextareaControl } from '@wordpress/components';
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
				<div>
					<TextareaControl
						label={__('Add Shortcode', 'ajax-load-more')}
						placeholder={'[ajax_load_more …]'}
						value={attributes?.shortcode}
						onChange={(data) => setAttributes({ shortcode: data })}
						help={__('Note: Scroll is disabled in the block editor.', 'ajax-load-more')}
						rows={5}
					/>
				</div>
			</PanelBody>
		</InspectorControls>
	);
}
