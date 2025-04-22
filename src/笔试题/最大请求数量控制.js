// 假设你有一个包含 100 张图片的数组
const imageUrls = new Array(100).fill(0).map((i,idx) => idx+1);

// 模拟上传图片的方法，上传时间为 500 毫秒
async function uploadImage(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Uploaded: ${url}`);
      resolve(url); // 上传完成
    }, 500); // 模拟 500 毫秒上传完成
  });
}

// 控制并发上传的函数
async function uploadInBatches(urls, batchSize) {
  let activeUploads = 0;
  let index = 0;

  const uploadQueue = async () => {
    if (index < urls.length) {
      const url = urls[index++];
      activeUploads++;

      await uploadImage(url);

      activeUploads--;
      // 每上传完成一个文件，就立即开始下一个文件
      uploadQueue();
    }
  };

  // 启动初始批量上传任务
  for (let i = 0; i < batchSize && index < urls.length; i++) {
    uploadQueue();
  }

  // 等待所有上传完成
  while (activeUploads > 0) {
    await new Promise(resolve => setTimeout(resolve, 100)); // 每 100ms 检查一下
  }
  return new Promise((r) => r('全部结束'))
}

// 调用函数开始上传，限制每次最多同时上传 10 张图片
uploadInBatches(imageUrls, 10).then((r) => {
    console.log(r)
});
