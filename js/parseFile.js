/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name parsingFile
	 * @since 2018-07-10
	 * @param {string} value
	 * @return {object} {
	 *     name : string,
	 *     ext : string
	 * }
	 */
	window.parseFile = function(value) {
		var result = {
			name : '',
			ext : ''
		};

		//문자일 때
		if(typeof value === 'string') {
			var file = value.split('/');
			
			file = file[file.length - 1];

			var name = file.split('.'),
				ext = name[name.length - 1];
			
			//파일과 확장자가 같을 때
			if(file === ext) {
				ext = '';
			}else{
				name.pop();
			}
			
			name = name.join('.');

			result.name = name;
			result.ext = ext;
		}

		return result;
	};
})();