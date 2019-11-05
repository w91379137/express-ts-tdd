
// 把所有的 singleton 其中到這邊 import
// 而且 如果方便的話 給出 空值行為 這樣測試 才可以通過

interface NodeStorage {
    setItem(key: string, value: string): void;
    getItem(key: string): string;
}

export var GlobalUse = {
    myStorage: {
        setItem: (a, b) => {},
        getItem: (a) => {},
    } as NodeStorage,

    append: (a: string, b: string) => {},

    log: (a: string) => {},

}
