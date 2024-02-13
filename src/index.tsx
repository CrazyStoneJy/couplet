import pinyin, { Pinyin } from "pinyin";
import { ENUM_PINYIN_STYLE } from "pinyin/lib/constant";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function HomePage() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    useEffect(() => {
        const r: string[][] = pinyin('出光灿烂', {
            style: ENUM_PINYIN_STYLE.TONE2
        });
        // setText(r);
        console.log(r);
        
    }, []);

    const check = () => {
        if (!text1 || !text2) {
            return;
        }
        if (text1.length !== text2.length) {
            return;
        }
        const res1: string[][] = pinyin(text1, {
            style: ENUM_PINYIN_STYLE.TONE2
        });
        const res2: string[][] = pinyin(text2, {
            style: ENUM_PINYIN_STYLE.TONE2
        });
        console.log(res1, res2);
    }

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 5 }}>一联:</Text>
                <TextInput placeholder="对联内容" value={text1} onChangeText={(text: string) => {
                    setText1(text);
                }}/>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 5 }}>二联:</Text>
                <TextInput placeholder="对联内容" value={text2} onChangeText={(text: string) => {
                    setText2(text);
                }}/>
            </View>
            <View style={{ marginHorizontal: 80, marginTop: 10 }}>
                <Button title="ok" onPress={check}/>
            </View>
        </View>
    );
}

export default HomePage;