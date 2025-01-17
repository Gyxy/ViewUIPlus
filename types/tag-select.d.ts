export declare class TagSelect {
    /**
     * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。
     */
    'model-value': [];

    /**
     * 是否显示 `展开/收起` 按钮
     */
    expandable: boolean;

    /**
     * 隐藏 `全部` 按钮
     */
    'hide-check-all': boolean;

    /**
     * 文案配置
     */
    locale: object;

    /**
     * 选项变化时触发，返回已选项 name 集合和当前项 name
     */
    $emit(eventName: 'on-change'): this;

    /**
     * 全选状态变化时触发，返回全选状态
     */
    $emit(eventName: 'on-checked-all'): this;

}

export declare class TagSelectOption {
    /**
     * 标签 name，必填
     */
    name: string |  number;

    /**
     * Tag 的颜色，同 View UI Plus Tag 组件的 color
     */
    color: string;

}
