import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Flex } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * MediaUploader component for InspectorControls.
 *
 * @param {Object}   props              Block props.
 * @param {string}   props.attribute    The target block attribute.
 * @param {Object}   props.attributes   The block attributes.
 * @param {Object}   props.preview      The preview media object.
 * @param {string}   props.size         The image size.
 * @param {string}   props.selectLabel  The select label.
 * @param {string}   props.replaceLabel The replace label.
 * @param {string}   props.removeLabel  The remove label.
 * @param {Function} props.callback     The callback function.
 * @param {Array}    props.allowedTypes The allowed media types.
 * @param {string}   props.title        The title.
 * @param {string}   props.description  The description.
 * @return {Element} 	                The MediaUploader component.
 */
function MediaSelector(props) {
	const {
		attribute = 'image',
		attributes,
		preview,
		size = 'full',
		callback,
		allowedTypes = ['image'],
		selectLabel = 'Select Image',
		replaceLabel = 'Replace Image',
		removeLabel = 'Remove Image',
		title,
		description,
	} = props;

	// Get the image object from block attributes.
	const image = attributes[attribute];

	// Get the preview image for display in inspector controls.
	const previewImage = preview?.media_details?.sizes?.thumbnail?.source_url || preview?.source_url;

	/**
	 * Update image attributes.
	 *
	 * @param {Object} imageData The image object.
	 */
	const updateImage = (imageData) => {
		callback({
			[attribute]: {
				id: imageData?.id,
				url: imageData?.sizes[size]?.url || imageData?.url,
				alt: imageData?.alt,
			},
		});
	};

	/**
	 * Remove the image attributes.
	 */
	const removeImage = () => {
		callback({
			[attribute]: undefined,
		});
	};

	return (
		<>
			{!!title && <h3>{title}</h3>}
			{!!description && <p>{description}</p>}
			<div className="wp-block-media-upload">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={updateImage}
						allowedTypes={allowedTypes !== '*' ? allowedTypes : null}
						value={image?.id}
						render={({ open }) => (
							<Button
								className={!image?.id ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
								onClick={open}
								style={
									!!image?.id
										? {
												backgroundColor: '#f0f0f0',
												padding: '5px',
										  }
										: null
								}
							>
								{!image?.id && selectLabel}
								{!!previewImage && <img src={previewImage} alt={preview?.alt_text} />}
							</Button>
						)}
					/>
				</MediaUploadCheck>
				{!!image?.id && (
					<Flex
						style={{
							paddingTop: '5px',
						}}
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={updateImage}
								allowedTypes={allowedTypes !== '*' ? allowedTypes : null}
								value={image?.id}
								render={({ open }) => <Button onClick={open}>{replaceLabel}</Button>}
							/>
						</MediaUploadCheck>
						<MediaUploadCheck>
							<Button onClick={removeImage} isDestructive>
								{removeLabel}
							</Button>
						</MediaUploadCheck>
					</Flex>
				)}
			</div>
		</>
	);
}
/**
 *
 * Wrap `MediaUploader` component with `withSelect` to access media data.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/
 */
export default compose(
	withSelect((select, props) => {
		// Get attributes for the selected block.
		const atts = select('core/block-editor').getSelectedBlock().attributes;
		if (!atts) {
			console.warn('Unable to access block attributes.');
			return;
		}

		const { attribute = 'image', callback } = props;
		if (!callback) {
			console.warn('The callback function prop is required for this component to work as intended.');
			return;
		}

		const { getMedia } = select('core');
		const image = atts[attribute];
		return {
			...props,
			attributes: atts,
			preview: image?.id ? getMedia(image.id) : null,
		};
	})
)(MediaSelector);
