import { almFadeIn, almFadeOut } from './fade';

/**
 * Show placeholder div.
 *
 * @param {string} type The direction.
 * @param {Object} alm  The ALM object.
 */
export default async function placeholder(type = 'show', alm) {
	const { placeholder, addons, rel } = alm;
	if (!placeholder || addons.paging || rel === 'prev') {
		return false;
	}

	switch (type) {
		case 'hide':
			await almFadeOut(placeholder, 175);
			setTimeout(function () {
				placeholder.style.display = 'none';
			}, 75);

			break;
		default:
			placeholder.style.display = 'block';
			almFadeIn(placeholder, 175);

			break;
	}
}
