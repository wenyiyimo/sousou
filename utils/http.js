const http = {
	async get(url, timeout = 10000, header = {}, ) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: 'GET',
				header: header,
				timeout: timeout,
				success(response) {
					resolve(response.data);
				},
				fail(error) {
					reject(error)
				}
			})
		})
	}, // 匹配一次
	async matchOnce(key, html) {
		try {
			let re = new RegExp(key, 'g')
			let t = re.exec(html);
			return {
				flag: true,
				data: t[1].trim(),
				msg: '匹配完成'
			}
		} catch (e) {
			return {
				flag: false,
				data: String(e),
				msg: '匹配失败'
			}
		}
	},
	// 匹配所有
	async matchAll(key, html) {
		try {
			let re = new RegExp(key, 'g')
			let t;
			let results = [];
			while ((t = re.exec(html)) != null) {
				results.push(t[1].replace(new RegExp("\\\\", "g"), "").trim());
			};
			return {
				flag: true,
				data: results,
				msg: '匹配完成'
			}
		} catch (e) {
			//TODO handle the exception
			return {
				flag: false,
				data: String(e),
				msg: '匹配失败'
			}
		}
	},
	// json处理
	async matchjson(key, json) {
		try {
			let matchslice = key.split('.');
			let results = json;
			for (let slice of matchslice) {
				results = results[slice]
			}
			return {
				flag: true,
				data: results,
				msg: '匹配完成'
			}
		} catch (e) {
			return {
				flag: false,
				data: String(e),
				msg: '获取失败'
			}
		}
	},
}
export default http
