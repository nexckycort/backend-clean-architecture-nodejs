import fse from 'fs-extra'
import path from 'path'

const projectRoot = path.join(__dirname, '..', 'build', 'package.json')
const packageJSON = fse.readJSONSync(projectRoot)
packageJSON.scripts = {
  start: 'node ./server.js'
}
packageJSON.bin = './server.js'
Reflect.deleteProperty(packageJSON, 'devDependencies')

fse.writeFileSync(projectRoot, JSON.stringify(packageJSON, null, '  '))