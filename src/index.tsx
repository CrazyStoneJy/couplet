import pinyin, { Pinyin } from "pinyin";
import { ENUM_PINYIN_STYLE } from "pinyin/lib/constant";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { check } from "./check";

function HomePage() {

    // 一年四季行好运；下联：八方财宝进家门
    const [text1, setText1] = useState('一年四季行好运');
    const [text2, setText2] = useState('八方财宝进家门');

    const check_couplet = () => {
        if (!text1 || !text2) {
            return;
        }
        if (text1.length !== text2.length) {
            return;
        }
        check([text1, text2]);
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
                <Button title="ok" onPress={check_couplet}/>
            </View>
        </View>
    );
}

export default HomePage;