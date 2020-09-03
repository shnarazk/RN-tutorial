# React Native tutorial

* https://reactnative.dev/docs/environment-setup
* https://reactnative.dev/docs/components-and-apis.html

### TODO

* storage: https://medium.com/mesan-digital/tutorial-react-native-redux-with-crud-operations-cdb449538886

# ステップ

## 1. 環境構築 https://reactnative.dev/docs/environment-setup

1. コンパイル環境インストール

```
npm i -g expo-cli
```

2. 実機実行環境インストール

iOSのシミュレーションにはrubyが必要

```
gem install cocapods
```

androidを使用するにはJDK 8+(Java Development Kit), Android Studio, abs？が必要、などなど

Android Stdioのインストールで以下を選択
* Android SDK
* Andorid SDK platform 29
* Android Virtual Device


## 2. プロジェクト開始

```
npx react-native init AwesomeProject
```

## 3 実行環境起動

1. webベース

```
npm start
```

2. 実機シミュレーション

```
npm run ios
npm run android
```
