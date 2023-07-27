/**
 * Search nodes for <script/> tags and run scripts.
 * Scripts cannot run with appendChild or innerHTML so this is necessary to function.
 *
 * @since 5.0
 */
const insertScript = {
	init(node) {
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

	isScript(node) {
		return node.tagName === 'SCRIPT';
	},

	clone(node) {
		const script = document.createElement('script');
		script.text = node.innerHTML;
		for (let i = node.attributes.length - 1; i >= 0; i--) {
			script.setAttribute(node.attributes[i].name, node.attributes[i].value);
		}
		return script;
	},
};
export default insertScript;
