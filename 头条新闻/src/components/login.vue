<template>
	<!-- <div class="login">
		<div class="head">
			<i class="fa fa-chevron-left" aria-hidden="true" onclick="window.history.go(-1)"></i>
		</div>
		<div class="con">
			<div class="phone_number">
				<input  type="text"  value="手机号">
			</div>
			<div class="verify">
				<input type="text" value="验证码">
			</div>
			<div class="verify_number">
				<input  type="text" value="手机验证码">
				<span>|</span>
			</div>
			<div class=""
			<input type="checkbox" name="">
				
			
		</div>
		
		
	</div> -->
	<div class="login">
		<div class="head">
			<i class="fa fa-chevron-left" aria-hidden="true" onclick="window.history.go(-1)"></i>
		</div>
		<div class="child">
			<div class="c11">
				<a id="i1">用戶名:</a>
			</div>
			<div class="c12">
				<input type="text" id="q">
			</div>
		</div>
		<div class="child">
			<div class="c11"><a id="i1">登陸密碼:</a></div>
			<div class="c12">
				<input type="text" >
			</div>
		</div>
		<div class="child">
			<div class="c11"><a id="i1">確認密碼:</a></div>
			<div class="c12">
				<input type="text" >
			</div>
		</div>
		<div class="child">
			<div class="c11"><a id="i1">手機號:</a></div>
			<div class="c12">
				<input type="text" >
			</div>
		</div>
		<div class="child">
			<div class="c11"><a id="i1">驗證碼:</a></div>
			<div class="c12">
				<input type="text" >
			</div>
		</div>
		<div>
			<button class="c2">創建賬號</button>
		</div>
	</div>
</template>
<style type="text/css">
/*	.login{
		position: absolute;height:100%;width: 600px;
	}
	.head{
		height: 100px;width: 600px;position: absolute;top: 0px;
	}

	.head .fa-chevron-left{
		height: 100px;width: 600px;line-height: 100px;font-size: 30px;
	}
	.con{
		height: 600px;width: 600px;position: absolute;top: 100px;
	}
	

	.con .phone_number{
		height: 70px;width: 600px;position: relative;margin-top: 0px;line-height: 70px;
	}

	.con .phone_number input{
		height: 40px;width: 300px;margin-left: 100px;
	}
	

	.con .verify{
		height: 70px;width: 600px;position: relative;margin-top: 0px;line-height: 70px;
	}
	.con .verify input{
		height: 40px;width: 150px;margin-left: 100px;
	}

	.con .verify_number{
	height: 70px;width: 600px;position: relative;margin-top: 0px;line-height: 70px;
	}
	.con .verify_number input{
		height: 40px;width: 150px;margin-left: 100px;
	}*/
	.login{
			height: 100%;width: 600px;position: absolute;top: 0px;left: 0px;
			animation:myfirst 1s;
			
		}
	.head{
		height: 70px;width: 600px;line-height: 70px;margin-left: 30px
	}

	@keyframes myfirst{
		0% {top:0px;left:1200px;height: 0px;width: 0px;}
		100%{height: 100%;width: 600px;top:0px;left:0px;}
		

	}

		.child{
			height: 80px;width: 600px;
		
		}
		.c11{
			height: 80px;
			width: 100px;
			float: left;
			line-height: 80px;

			
		}
		.c12{
			height: 80px;
			width: 400px;
			float: left;
			line-height: 80px;
		}

		.c12 input{
			height: 40px;width: 300px;
		}
		#i1{
			float: right;
			margin-right: 10px;
		}

		.c2{
			margin-left: 100px;
			background-color: red;
		}

</style>