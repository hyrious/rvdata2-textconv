import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import crypto from 'node:crypto'
import {load} from '@hyrious/marshal'

/**
 * Reads Scripts.rvdata2 and returns `$RGSS_SCRIPTS`.
 * If the file is not Scripts.rvdata2, it returns an array of `[{ code: "hash" }]`.
 * @param  {string} full_path path to Scripts.rvdata2, will be used in fs.readFile()
 * @return {Array<[magic: number, title: string, raw: ArrayBuffer, code: string]>}
 */
export function load_scripts_rvdata2(full_path) {
	const decoder = new TextDecoder()
	const buffer = fs.readFileSync(full_path)
	const result = []
	if (!full_path.endsWith('Scripts.rvdata2')) {
		const hash = crypto.createHash('sha1').update(buffer).digest('hex')
		result.push([0, path.basename(full_path), Uint8Array.of().buffer, hash])
		return result;
	}
	for (const [magic, title_, code_] of load(buffer, {string: 'binary'})) {
		const title = decoder.decode(title_)
		const code = zlib.inflateSync(code_).toString('utf8').replace(/\r?\n/g, '\n')
		result.push([magic, title, code_, code])
	}
	return result
}

export default load_scripts_rvdata2
