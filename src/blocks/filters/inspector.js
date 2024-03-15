import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, Button, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Inspector controls for the block.
 *
 * @param {Object} props Block props.
 * @return {Element} 	 Inspector controls.
 */
export default function (props) {
	const { attributes, setAttributes } = props;
	const { adminurl = '' } = alm_localize || {};
	const { filters = [], prefix = '' } = alm_filters_localize;

	const filterList =
		(filters?.length &&
			prefix &&
			filters.map((filter) => {
				const name = filter.replace(prefix, '');
				return { label: name, value: name };
			})) ||
		[];
	filterList.unshift({ label: __('-- Select Filter --', 'ajax-load-more'), value: '' });

	return (
		<InspectorControls>
			<PanelBody title={__('Settings', 'ajax-load-more')}>
				<SelectControl
					label={__('Filter', 'ajax-load-more')}
					help={__('Select a filter to display by ID.', 'ajax-load-more')}
					value={attributes?.id}
					options={filterList}
					onChange={(value) => setAttributes({ id: value })}
					disabled={filterList?.length < 2}
				/>
				<Flex
					gap="10px"
					justify="flex-start"
					style={{
						marginTop: '-10px',
					}}
				>
					<Button href={`${adminurl}/admin.php?page=ajax-load-more-filters&action=new`} size="compact" variant="primary" target="_blank">
						{__('Create Filter', 'ajax-load-more')}
					</Button>
					{filterList?.length > 1 && (
						<Button href={`${adminurl}/admin.php?page=ajax-load-more-filters`} size="compact" variant="secondary" target="_blank">
							{__('View All', 'ajax-load-more')}
						</Button>
					)}
				</Flex>
				<hr />
				<TextControl
					label={__('Target', 'ajax-load-more')}
					help={__('The ID of the Ajax Load More instance to filter.', 'ajax-load-more')}
					value={attributes?.target}
					onChange={(data) => setAttributes({ target: data })}
					required
				/>
			</PanelBody>
		</InspectorControls>
	);
}
