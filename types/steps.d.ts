export declare class Steps {
    /**
     * 当前步骤，从 0 开始计数
     */
    current: number;

    /**
     * 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error`
     */
    status: 'wait' | 'process' | 'finish' | 'error';

    /**
     * 步骤条的尺寸，可选值为`small`或者不写
     */
    size: '' | 'small';

    /**
     * 步骤条的方向，可选值为`horizontal`（水平）或`vertical`（垂直）
     */
    direction: 'horizontal' | 'vertical';

    $slots: {
        /**
         * 自定义 title
         */
        title: [];

        /**
         * 自定义 content
         */
        content: [];

        /**
         * 自定义 icon
         */
        icon: [];

    };
}

export declare class Step {
    /**
     * 步骤的状态，可选值为`wait`、`process`、`finish`、`error`，不设置时自动判断
     */
    status: string;

    /**
     * 标题
     */
    title: string;

    /**
     * 步骤的详细描述，可选
     */
    content: string;

    /**
     * 步骤的图标，可选
     */
    icon: string;

}
