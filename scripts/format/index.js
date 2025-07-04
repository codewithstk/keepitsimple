const beautify = require('js-beautify');
const beautifySCSS = require('scssfmt');
const beautifyHTML = require('js-beautify').html;
const beautifyTS = require('prettier');
const globby = require('globby');
const fs = require('fs');
const path = require('path');
const colors = require('colors');

(async () => {
	const filePaths = await globby(['projects']);
	const formatConfig = JSON.parse(fs.readFileSync('configs/.jsbeautifyrc.json'));
	const tsFormatConfig = Object.assign({}, { parser: 'typescript' }, await beautifyTS.resolveConfig('configs/.prettierrc'));

	for (const filePath of filePaths) {
    if(filePath.includes("node_modules")){
      continue;
    }
		const fileType = path.extname(filePath);
		const fileContent = fs.readFileSync(filePath).toString();

		let formattedContent;

		switch (fileType) {
			case '.html':
				formattedContent = beautifyHTML(fileContent, Object.assign(formatConfig, formatConfig.html));
				break;
			case '.scss':
				formattedContent = beautifySCSS(fileContent);
				break;
			case '.json':
			case '.js':
				formattedContent = beautify(fileContent, Object.assign(formatConfig));
				break;
			case '.ts':
				formattedContent = await beautifyTS.format(fileContent, tsFormatConfig);
				break;
		}

		if (formattedContent && formattedContent !== fileContent) {
			fs.writeFileSync(filePath, formattedContent);
			console.log(colors.green(`Formatter: ${filePath}`));
		}
	}

})();