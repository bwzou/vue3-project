

class FileUtil {
  hashPercentage = 0

  // 生成hash值
  static calculateHash(chunks) {
    return new Promise(resolve => {
      // 添加 worker
      let worker = new Worker("./util/hash.js");
      worker.postMessage({ chunks });
      worker.onmessage = e => {
        const { percentage, hash } = e.data;
        this.hashPercentage = percentage;
        if (hash) {
          resolve(hash);
        }
      }
    })
  }

  /**
   * 生成文件切片
   */
  static createFileChunks(file, size=10485760) {
    let chunks = []
    let start = 0
    let end = size
    let index = 0
    while (end < file.size) {
      let chunk = null
      let _file = file.slice(start, end);
      start = end
      end = end + size
      if (end > file.size - 1 && start < file.size - 1) {
        end = file.size - 1
      }
      chunk = {
        chunk: _file,
        index: index
      }
      chunks.push(chunk)
      index ++
    }
    return chunks
  }

  /**
   * 上传文件切片
   */
  static uploadFileChunks(chunks) {

  }
}