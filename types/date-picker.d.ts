export declare class DatePicker {
    /**
     * 显示类型，可选值为 `date`、`daterange`、`datetime`、`datetimerange`、`year`、`month`
     */
    type: 'date' | 'daterange' | 'datetime' | 'datetimerange' | 'year' | 'month';

    /**
     * 日期，可以是 JavaScript 的 Date，例如 **new Date()** ，也可以是标准的日期格式，点击右边查看，注意：model-value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
     */
    'model-value': Date;

    /**
     * 展示的日期格式
     */
    format: Date;

    /**
     * 日期选择器出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end`
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 占位文本
     */
    placeholder: string;

    /**
     * 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表
     */
    options: object;

    /**
     * 开启后，左右面板不联动，仅在 `daterange` 和 `datetimerange` 下可用。
     */
    'split-panels': boolean;

    /**
     * 开启后，可以选择多个日期，仅在 `date` 下可用。
     */
    multiple: boolean;

    /**
     * 开启后，可以显示星期数。
     */
    'show-week-numbers': boolean;

    /**
     * 设置默认显示的起始日期。
     */
    'start-date': Date;

    /**
     * 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
     */
    confirm: boolean;

    /**
     * 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用
     */
    open: boolean;

    /**
     * 尺寸，可选值为`large`、`small`、`default`或者不设置
     */
    size: '' | 'large' | 'small' | 'default';

    /**
     * 是否禁用选择器
     */
    disabled: boolean;

    /**
     * 是否显示清除按钮
     */
    clearable: boolean;

    /**
     * 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效
     */
    readonly: boolean;

    /**
     * 文本框是否可以输入，只在没有使用 slot 时有效
     */
    editable: boolean;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer: boolean;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id': string;

    /**
     * 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：`:time-picker-options="{steps: [1, 10, 10]}"`
     */
    'time-picker-options': object;

    /**
     * 两个日期间的分隔符
     */
    separator: string;

    /**
     * 是否开启 capture 模式，也可通过全局配置
     */
    capture: boolean;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name': string;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled': boolean;

    /**
     * 设置快捷选项，每项内容：**text | String**：显示的文案， **value | Function**：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调， **onClick | Function**：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用
     */
    shortcuts: [];

    /**
     * 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天
     */
    disabledDate: Function;

    /**
     * 日期发生变化时触发
     */
    $emit(eventName: 'on-change'): this;

    /**
     * 弹出日历和关闭日历时触发
     */
    $emit(eventName: 'on-open-change'): this;

    /**
     * 在 confirm 模式下有效，点击确定按钮时触发
     */
    $emit(eventName: 'on-ok'): this;

    /**
     * 在 confirm 模式或 clearable = true 时有效，在清空日期时触发
     */
    $emit(eventName: 'on-clear'): this;

    /**
     * 点击外部关闭下拉菜单时触发
     */
    $emit(eventName: 'on-clickoutside'): this;

    $slots: {
        /**
         * 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例
         */
        '': [];

    };
}
