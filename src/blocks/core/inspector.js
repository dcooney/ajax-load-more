import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
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
					label={__('ID', 'ajax-load-more')}
					help={__('Set a unique ID for this Ajax Load More instance.', 'ajax-load-more')}
					value={attributes?.params?.id}
					onChange={(data) => setAttributes({ params: { id: data } })}
				/>
				<SelectControl
					label={__('Container Type', 'ajax-load-more')}
					help={__('Override the global Container Type set in ALM Settings.', 'ajax-load-more')}
					value={attributes?.params?.container_type}
					options={[
						{ label: 'ul', value: 'ul' },
						{ label: 'ol', value: 'ol' },
						{ label: 'div', value: 'div' },
						{ label: 'section', value: 'section' },
						{ label: 'table', value: 'table' },
					]}
					onChange={(data) => setAttributes({ params: { container_type: data } })}
				/>
				<TextareaControl
					label={__('Add Shortcode', 'ajax-load-more')}
					placeholder={'[ajax_load_more …]'}
					value={attributes?.shortcode}
					onChange={(data) => setAttributes({ shortcode: data })}
					help={__('Note: Scroll is disabled in the block editor.', 'ajax-load-more')}
					rows={5}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
