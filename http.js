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
	}
}
export default http
