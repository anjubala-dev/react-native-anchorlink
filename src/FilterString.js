function removeExtraProps(strString) {
    
    // let strString = stringAnchor
    strString = strString.replace(`target='blank'`, '')
    strString = strString.replace(`target='_self'`, '')
    strString = strString.replace(`target='_parent'`, '')
    strString = strString.replace(`target='_top'`, '')
    strString = strString.replace(`target='framename'`, '')
    strString = strString.replace(`target="blank"`, '')
    strString = strString.replace(`target="_self"`, '')
    strString = strString.replace(`target="_parent"`, '')
    strString = strString.replace(`target="_top"`, '')
    strString = strString.replace(`target="framename"`, '')
    return strString
}

function getStringFrom(strString, fontSubString, endSubString) {
    let position = strString.indexOf('href=')
    let positionend = strString.indexOf('</a>')
    return strString.substring(position, positionend)
}

function getUrlTitle(strString, fontSubString, endSubString) {
    let startingChat = strString.charAt(5)
    strString = strString.replace(`href=${startingChat}`, '')
    let position = strString.indexOf(startingChat)
    let positionTextStart = strString.indexOf(">")
    let link = strString.substring(0, position)
    let title = strString.substring(positionTextStart+1, strString.length)
    return {link, title}
}

function getLastString(strString) {
    let positionend = strString.indexOf('</a>')
    return strString.substring(positionend + 4, strString.length)
}



export {
    removeExtraProps,
    getStringFrom,
    getUrlTitle,
    getLastString
};