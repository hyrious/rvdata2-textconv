import fs from 'node:fs'
import zlib from 'node:zlib'
import {load} from '@hyrious/marshal'

/**
 * Reads Scripts.rvdata2 and returns `$RGSS_SCRIPTS`.
 * @param  {string} full_path path to Scripts.rvdata2, will be used in fs.readFile()
 * @return {Array<[magic: number, title: string, raw: ArrayBuffer, code: string]>}
 */
export function load_scripts_rvdata2(full_path) {
	const decoder = new TextDecoder()
	const buffer = new Uint8Array(fs.readFileSync(full_path)).buffer
	const result = []
	for (const [magic, title_, code_] of load(buffer, {decodeString: false})) {
		const title = decoder.decode(title_)
		const code = zlib.inflateSync(code_).toString('utf8')
		result.push([magic, title, code_, code])
	}
	return result
}

export default load_scripts_rvdata2
