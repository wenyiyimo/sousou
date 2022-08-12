const init = {
	async init() {
		uni.setKeepScreenOn({
			keepScreenOn: true
		});
		let index = uni.getStorageSync("index");
		if (!index) {
			uni.setStorageSync('index', {
				tagname: "",
				tagurl: "",
				startnum: "",
				secondnum: "",
				range: "",
				item: "",
				picture: "",
				picurl: "",
				title: ""
			})
		}
		let sWidth = uni.getStorageSync("sWidth");
		if (!sWidth) {
			uni.setStorageSync('sWidth', uni.getSystemInfoSync().screenWidth)
		}
		let sHeight = uni.getStorageSync('sHeight')
		if (!sHeight) {
			uni.setStorageSync('sHeight', uni.getSystemInfoSync().screenHeight)
		}
		let sites = uni.getStorageSync("sites");
		if (!sites) {
			uni.setStorageSync('sites', []);
		}
		// 历史记录
		let historys = uni.getStorageSync("historys");
		if (!historys) {
			uni.setStorageSync('historys', []);
		}
		// 收藏
		let hearts = uni.getStorageSync("hearts");
		if (!hearts) {
			uni.setStorageSync('hearts', []);
		}
		// 直播
		let livelists = uni.getStorageSync('livelists');
		if (!livelists) {
			uni.setStorageSync('livelists', []);
		}
		// 订阅
		let urlList = uni.getStorageSync('urlNotive');
		if (!urlList) {
			uni.setStorageSync('urlNotive', []);
		}
		// 排除
		let extrakey = uni.getStorageSync('extrakey');
		if (!extrakey) {
			uni.setStorageSync('extrakey', []);
		}
		let initialtime = uni.getStorageSync('initialtime');
		if (!initialtime) {
			uni.setStorageSync('initialtime', 0);
		}
	}
}
export default init
