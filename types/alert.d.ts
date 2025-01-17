export declare class Alert {
    /**
     * 警告提示样式，可选值为`info`、`success`、`warning`、`error`
     */
    type: 'info' | 'success' | 'warning' | 'error';

    /**
     * 是否可关闭
     */
    closable: boolean;

    /**
     * 是否显示图标
     */
    'show-icon': boolean;

    /**
     * 是否应用动画，动画时长可能会引起占位的闪烁
     */
    fade: boolean;

    /**
     * 关闭时触发
     */
    $emit(eventName: 'on-close'): this;

    $slots: {
        /**
         * 警告提示内容
         */
        '': [];

        /**
         * 警告提示辅助性文字介绍
         */
        desc: [];

        /**
         * 自定义图标内容
         */
        icon: [];

        /**
         * 自定义关闭内容
         */
        close: [];

    };
}
