/**
 * Search nodes for <script/> tags and run scripts.
 * Scripts cannot run with appendChild or innerHTML so this is necessary to function.
 *
 * @since 5.0
 */
const insertScript = {
	/**
	 * Initiate the script insertion.
	 *
	 * @param {Array} nodes The HTML nodes.
	 */
	init(nodes) {
		if (!nodes?.length) {
			return false;
		}
		nodes.forEach((node) => {
			this.check(node);
		});
	},
	/**
	 * Parse HTML node from script.
	 *
	 * @param {HTMLElement} node The HTML node/element.
	 * @return {HTMLElement}     The modified HTML node.
	 */
	check(node) {
		if (this.isScript(node) === true) {
			node.parentNode.replaceChild(this.clone(node), node);
		} else {
			let i = 0;
			let children = node.childNodes;

			if (children === undefined) {
				const parser = new DOMParser();
				const data = parser.parseFromString(node, 'text/html');
				if (data) {
					children = data.body.childNodes;
				}
			}
			while (i < children.length) {
				this.replace(children[i++]);
			}
		}
		return node;
	},

	/**
	 * Replace the script tag with a clone.
	 *
	 * @param {HTMLElement} node The HTML node/element.
	 * @return {HTMLElement}     The modified node.
	 */
	replace(node) {
		if (this.isScript(node) === true) {
			node.parentNode.replaceChild(this.clone(node), node);
		} else {
			let i = 0;
			const children = node.childNodes;
			while (i < children.length) {
				this.replace(children[i++]);
			}
		}
		return node;
	},

	/**
	 * Clone the tag.
	 *
	 * @param {HTMLElement} node The HTML node/element.
	 * @return {HTMLElement}     The cloned node.
	 */
	clone(node) {
		const script = document.createElement('script');
		script.text = node.innerHTML;
		for (let i = node.attributes.length - 1; i >= 0; i--) {
			script.setAttribute(node.attributes[i].name, node.attributes[i].value);
		}
		return script;
	},

	/**
	 * Is the node a script tag.
	 *
	 * @param {HTMLElement} node The html node.
	 */
	isScript(node) {
		return node.tagName === 'SCRIPT';
	},
};
export default insertScript;
