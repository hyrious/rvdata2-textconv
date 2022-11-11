#!/usr/bin/env node
import {load_scripts_rvdata2} from './index.js'

const file = process.argv[2]
if (!file) {
	console.log('usage: rvdata2-textconv <Scripts.rvdata2>')
	process.exit(0)
}

const $RGSS_SCRIPTS = load_scripts_rvdata2(file)
for (const [_, title, raw, code] of $RGSS_SCRIPTS) {
	console.log(`# ===== ${title} =====`)
	console.log(code)
}
