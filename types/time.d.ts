export declare class Time {
    /**
     * 需要对比的时间，可以是时间戳或 Date 类型
     */
    time: number | Date | string;

    /**
     * 类型，可选值为 relative、date 或 datetime
     */
    type: 'relative' | 'date' | 'datetime';

    /**
     * 自动更新的间隔，单位：秒
     */
    interval: number;

    /**
     * 填写该值，点击会定位锚点
     */
    hash: string;

}
