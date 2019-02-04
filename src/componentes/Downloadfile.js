import React, { Component } from 'react'
import { View, Text } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

export default props =>{
    const { config, fs } = RNFetchBlob
    //let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
    fileCache: true,
    addAndroidDownloads : {
        useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
        notification : false,
        path:  fs.dirs.DownloadDir + "/resp.pdf", // this is the path where your downloaded file will live in
        description : 'Downloading pdf.'
    }
    }
    config(options).fetch('GET', "http://laranna.com.br/test.pdf").then((res) => {
    // do some magic here
    })

    return (
        <View>
            <Text>OK</Text>
        </View>
    )
}
