### 单精度计算时遇到的bug

2016-12-15 liujians

js单精度计算时遇到的相关bug

闲暇时候尝试

	2.2 + 2.1 = 4.300000000000001 
	2.2 - 1.9 = 0.30000000000000027 
	2.2 * 2.2 = 4.840000000000001 
	2.1 / 0.3 = 7.000000000000001

记录一下、以后可以考虑用parseFloat来直接强转
___
本文出自————[http://liujians.me](http://liujians.me)