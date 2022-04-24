import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Linking
} from 'react-native'

import { removeExtraProps, getStringFrom, getUrlTitle, getLastString } from './FilterString'

const ArchorParser = ({
    string = "",
    numberOfLines = 0,
    stringStyle = {},
    linkStyle = {}
}) => {

    function normalString(textLast) {
        return <Text key={textLast} style={stringStyle}>
            {textLast}
        </Text>
    }

    function linkString(objTitleAndLink) {
        return <Text
            style={[{ color: '#2980b9' }, linkStyle]}
            key={objTitleAndLink.link}
            onPress={() => Linking.openURL(objTitleAndLink.link)}
        >
            {objTitleAndLink.title}
        </Text>
    }

    const parseAnchorTag = () => {

        let str = string.replace("<b>", "").replace("</b>", "")
        const result = [];
        if (str.includes("<a")) {
            let arrAAA = str.split("<a ")
            arrAAA.forEach(element => {
                let strString = element
                if (strString.includes("href=")) {
                    strString = removeExtraProps(strString)
                    let aLinkA = getStringFrom(strString, 'href=', '</a>')
                    let objTitleAndLink = getUrlTitle(aLinkA)
                    let textLast = getLastString(strString)
                    result.push(linkString(objTitleAndLink));
                    result.push(normalString(textLast));
                }
                else {
                    result.push(normalString(strString));
                }
            });
        }
        else {
            result.push(normalString(str));
        }
        return result
    }

    if (string.length == 0) {
        return (<Text></Text>)    
    }
    return (<Text numberOfLines={numberOfLines}>{parseAnchorTag()}</Text>)
}

export default ArchorParser

const styles = StyleSheet.create({})