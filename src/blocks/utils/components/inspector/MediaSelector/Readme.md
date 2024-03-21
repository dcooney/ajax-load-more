# MediaSelector

Render a component for selecting and attaching media in the `InspectorControls` sidebar.

The MediaSelector expects the [block.json](https://developer.wordpress.org/block-editor/getting-started/fundamentals/block-json/) attribute to be an object with an `id`, `url`, and `alt` fields.

```json
{
 "attributes": {
  "image": {
   "type": "object",
   "id": {
    "type": "number",
    "default": ""
   },
   "url": {
    "type": "string",
    "default": ""
   },
   "alt": {
    "type": "string",
    "default": ""
   }
  }
 }
}
```

## Example Component Render

```javascript
<MediaSelector
 attribute="image"
 size="large"
 callback={setAttributes}
 title={__( 'Image', 'framework' )}
 description={__(
  'Select an image to be displayed.',
  'framework'
 )}
/>
```

## Component Props

The `MediaSelector` component accepts the following props.

| Prop            | Description                                               | Default          | Type        | Required  |
|---------------- |---------------------------------------------------------- |----------------- |------------ |---------- |
| `attribute`     | The target block attribute.                               | `image`          | `string`    | No        |
| `callback`      | The function to dispatch after media selection updates.   | `null`           | `Function`  | Yes       |
| `size`          | The image size to return.                                 | `full`           | `string`    | No        |
| `selectLabel`   | Label for the select media button.                        | `Select Image`   | `string`    | No        |
| `replaceLabel`  | Label for the replace media button.                       | `Replace Image`  | `string`    | No        |
| `removeLabel`   | Label for the remove media button.                        | `Remove Image`   | `string`    | No        |
| `allowedTypes`  | Array of allowed media types.                             | `['image']`      | `Array`     | No        |
| `title`         | Optional component title display as an H3 heading.        | `null`           | `string`    | No        |
| `description`   | Optional component description displayed as a paragraph.  | `null`           | `string`    | No        |
