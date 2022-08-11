<script>
import init from '@/utils/init.js';
export default {
	onLaunch: function() {
		init.init();
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>
<style lang="scss">
/*每个页面公共css */
@import url('@/common/common.scss');
</style>
