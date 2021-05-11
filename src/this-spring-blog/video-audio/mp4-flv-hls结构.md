<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-09 15:36:17
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-09 21:14:44
-->
## mp4结构  

box：BOXHEADER + Payload  

BOXHEADER：TYPE + SIZE  

考虫mp4结构：   
```
-ftyp
-moov
---mvhd // timescale,duration
---trak
-----tkhd
-----mdia
-------minf
---------stbl
-----------mp4a // channel_count,sample_rate
-moof // 描述了下面的mdat的box有多少sample、duration是多少
-mdat // 数据部分
-moof
-mdat
-moof
-mdat
.....
```  

## flv结构  

