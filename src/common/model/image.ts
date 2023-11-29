/**
 * 已上传的图片对象 Model
 */
export interface UploadedImageModel {
  type: string
  uuid: string
  sha: string
  dir: string
  path: string
  name: string
  size: number
  deleting: boolean
  checked: boolean
}

/**
 * 上传列表的图片对象 Model
 */
export interface UploadImageModel {
  uuid: string

  base64: {
    originalBase64: string
    watermarkBase64: string | null
    compressBase64: string | null
  }

  fileInfo: {
    originalFile: File | null
    watermarkFile: File | null
    compressFile: File | null
  }

  filename: {
    hash: string // 哈希值
    suffix: string // 后缀
    name: string
    final: string
    initName: string
    newName: string
    isRename: boolean
    isAddHash: boolean // 是否添加哈希值
    isPrefixNaming: boolean // 是否前缀命名
    prefixName: string // 前缀命名值
    isTimestampNaming: boolean // 是否时间戳命名
  }

  // 上传前的状态
  beforeUploadStatus: {
    compressing: boolean
    watermarking: boolean
  }

  uploadStatus: {
    progress: 0 | 100
    uploading: boolean
  }

  uploadedImg?: UploadedImageModel

  reUploadInfo?: {
    isReUpload: boolean
    path: string
    dir: string
  }
}

/**
 * 图片上传状态枚举
 */
export enum UploadStatusEnum {
  // eslint-disable-next-line no-unused-vars
  uploaded = 'uploaded',
  // eslint-disable-next-line no-unused-vars
  allUploaded = 'allUploaded',
  // eslint-disable-next-line no-unused-vars
  uploadFail = 'uploadFail'
}

/**
 * 图片删除状态枚举
 */
export enum DeleteStatusEnum {
  // eslint-disable-next-line no-unused-vars
  deleted = 'deleted',
  // eslint-disable-next-line no-unused-vars
  allDeleted = 'allDeleted',
  // eslint-disable-next-line no-unused-vars
  deleteFail = 'deleteFail'
}

/**
 * 图片压缩编码器枚举
 */
export enum CompressEncoderEnum {
  // eslint-disable-next-line no-unused-vars
  mozJPEG = 'mozJPEG',
  // eslint-disable-next-line no-unused-vars
  avif = 'avif',
  // eslint-disable-next-line no-unused-vars
  webP = 'webP',
  // eslint-disable-next-line no-unused-vars
  jpegEXIF = 'jpegEXIF'
}

/**
 * 图片链接规则对象 Model
 */
export interface ImageLinkRuleModel {
  id: string
  name: string
  rule: string
  editable?: boolean
}

/**
 * 图片链接格式对象 Model
 */
export interface ImageLinkFormatModel {
  name: string
  format: string
}
