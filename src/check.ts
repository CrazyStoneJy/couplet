import pinyin from "pinyin";
import { ENUM_PINYIN_STYLE } from "pinyin/lib/constant";

function check(array: string[]): string[] {
    const new_order: string[] = [];
    const res1: string[][] = pinyin(array[0], {
        style: ENUM_PINYIN_STYLE.TONE2
    });
    const res2: string[][] = pinyin(array[1], {
        style: ENUM_PINYIN_STYLE.TONE2
    });
    console.log(res1, res2);
    const r = res1.flat().reverse()[0];
    console.log(r);
    
    return new_order;
}


export {
    check
}