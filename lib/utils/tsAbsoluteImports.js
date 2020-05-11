const through2 = require('through2');
const path = require('path');

function replacePath(code, filePath, rootPath, targetPaths) {
  const typescriptPaths = Object.keys(targetPaths);

  const codeLines = code.split('\n');

  const newCodeLines = codeLines.map((codeLine) => {
    const matches = Array.from(
      codeLine.match(/require\(('|")(.*)('|")\)/g) || [],
    );

    if (matches.length === 0) {
      return codeLine;
    }

    let newCodeLine = codeLine;

    for (const match of matches) {
      for (const typescriptPath of typescriptPaths) {
        const requiredModules = match.match(new RegExp(typescriptPath, 'g'));

        if (!requiredModules || requiredModules.length === 0) {
          continue;
        }

        const sourcePath = path.dirname(filePath);
        const targetPath = path.dirname(
          path.resolve(rootPath + '/' + targetPaths[typescriptPath]),
        );
        const relativePath = path.relative(sourcePath, targetPath);

        newCodeLine = newCodeLine.replace(
          new RegExp(typescriptPath, 'g'),
          `./${relativePath}/`,
        );
      }
    }

    return newCodeLine;
  });

  return newCodeLines.join('\n');
}

const tsAbsoluteImports = (destination, { baseUrl, paths }) =>
  through2.obj((file, _, callback) => {
    const oldCode = file.contents.toString('utf8');
    const newCode = replacePath(
      oldCode,
      file.history.toString().replace(`/${baseUrl}/`, `/${destination}/`),
      destination,
      paths,
    );

    const transformedFile = file.clone();
    transformedFile.contents = Buffer.from(newCode);

    callback(null, transformedFile);
  });

module.exports = { tsAbsoluteImports };
