export declare class Upload {
    /**
     * 上传的地址，必填
     */
    action: string;

    /**
     * 设置上传的请求头部
     */
    headers: object;

    /**
     * 是否支持多选文件
     */
    multiple: boolean;

    /**
     * 是否支持粘贴上传文件
     */
    paste: boolean;

    /**
     * 是否开启选择文件夹，部分浏览器适用
     */
    webkitdirectory: boolean;

    /**
     * 是否禁用
     */
    disabled: boolean;

    /**
     * 上传时附带的额外参数
     */
    data: object;

    /**
     * 上传的文件字段名
     */
    name: string;

    /**
     * 支持发送 cookie 凭证信息
     */
    'with-credentials': boolean;

    /**
     * 是否显示已上传文件列表
     */
    'show-upload-list': boolean;

    /**
     * 上传控件的类型，可选值为 `select`（点击选择），`drag`（支持拖拽）
     */
    type: 'select' | 'drag';

    /**
     * 接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
     */
    accept: string;

    /**
     * 支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
     */
    format: [];

    /**
     * 文件大小限制，单位 kb
     */
    'max-size': number;

    /**
     * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
     */
    'before-upload': Function;

    /**
     * 文件上传时的钩子，返回字段为 event, file, fileList
     */
    'on-progress': Function;

    /**
     * 文件上传成功时的钩子，返回字段为 response, file, fileList
     */
    'on-success': Function;

    /**
     * 文件上传失败时的钩子，返回字段为 error, file, fileList
     */
    'on-error': Function;

    /**
     * 点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
     */
    'on-preview': Function;

    /**
     * 文件列表移除文件时的钩子，返回字段为 file, fileList
     */
    'on-remove': Function;

    /**
     * 文件格式验证失败时的钩子，返回字段为 file, fileList
     */
    'on-format-error': Function;

    /**
     * 文件超出指定大小限制时的钩子，返回字段为 file, fileList
     */
    'on-exceeded-size': Function;

    /**
     * 默认已上传的文件列表，例如：```[{name: 'img1.jpg', url: 'http://www.xxx.com/img1.jpg'}, {name: 'img2.jpg', url: 'http://www.xxx.com/img2.jpg'}]```
     */
    'default-file-list': [];

    $slots: {
        /**
         * 触发上传组件的控件
         */
        '': [];

        /**
         * 辅助提示内容
         */
        tip: [];

    };
}
