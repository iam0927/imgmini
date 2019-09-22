## 图片压缩

> 目前只能手动引入图片，不能批量生产, 对大文件有较好的压缩效果

- 将需要压缩的图片放到`src/images/`目录下，然后执行`npm run start`，在命令行得到图片名称数组（如果想手动输入也可省略此步骤）

- 然后在`src/index.js`文件中依次手动引入需要压缩的图片

```javascript

// 使用import引入

// img1  为变量名，这个随便取，不能重复

// someImg.jpg 为被压缩图片的名称

// 如果有多个，多复制几行分别引入

import img1 from './images/someImg1.jpg'

// import img2 from './images/someImg2.jpg'
// import img3 from './images/someImg3.jpg'

```

- 压缩完成后的图片会产出到根目录`dist/images/` 下，直接使用即可