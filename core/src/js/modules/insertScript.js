import almDomParser from '../helpers/almDomParser';

/**
 * insertScript
 * Search nodes for <script/> tags and run scripts.
 * Scripts cannot run with appendChild or innerHTML so this is necessary to function.
 * 
 * @since 5.0
 */  
let insertScript = {
	
	init: function(node){
		if ( this.isScript(node) === true ) {
			node.parentNode.replaceChild( this.clone(node) , node );
		}
		else {
			let i = 0;
			let children = node.childNodes;
			
			if(children === undefined){
            let parser = new DOMParser();                        
            let data = parser.parseFromString(node, 'text/html');
            if(data){
               children = data.body.childNodes;
            }
         }
			while ( i < children.length ) {
				this.replace( children[i++] );
			}
		}			
		return node;
	},
	
	replace: function(node) {
		if ( this.isScript(node) === true ) {
			node.parentNode.replaceChild( this.clone(node) , node );
		}
		else {
			let i  = 0;
			let children = node.childNodes;
			while (i < children.length) {
				this.replace( children[i++] );
			}
		}	
	  return node;
	},
	
	isScript: function(node){
		return node.tagName === 'SCRIPT';
	},
	
	clone: function(node){
		let script  = document.createElement("script");
		script.text = node.innerHTML;
		for( let i = node.attributes.length-1; i >= 0; i-- ) {
			script.setAttribute( node.attributes[i].name, node.attributes[i].value );
		}
		return script;
	}
	
}
export default insertScript; 
