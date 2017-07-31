<template>
	<div>
		<header>我是首页</header>
		<div class="box">一个盒子</div>
		123
	</div>
</template>
<style scoped lang="scss">
	@import "../assets/css/public.scss";
	
	.box {
		@include px2rem(width, 100px);
		@include px2rem(height, 100px);
		@include px2rem(padding, 20px 30px 40px 4px);
		@include font-dpr(14px);
	}
</style>