import pinyin, { Pinyin } from "pinyin";
import { ENUM_PINYIN_STYLE } from "pinyin/lib/constant";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function HomePage() {

    const [text, setText] = useState('');
    
    useEffect(() => {
        const r: string[][] = pinyin('出光灿烂', {
            style: ENUM_PINYIN_STYLE.TONE2
        });
        // setText(r);
        console.log(r);
        
    }, []);

    

    return (
        <View>
            <Text style={{ margin: 20, fontSize: 16 }}>{text}</Text>
        </View>
    );
}

export default HomePage;