# React Native tutorial

* https://reactnative.dev/docs/environment-setup
* https://reactnative.dev/docs/components-and-apis.html

### TODO

- [x] React tutorial: https://ja.reactjs.org/tutorial/tutorial.html 
  * 実行環境: https://codesandbox.io/s/react-tutorial-tic-tac-toe-o06xn
- [x] `Board`の関数オブジェクトへの書き換え
- [x] updating: https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048#input-の内容を取得する処理の追加 
  * ***parentなりStateなりに状態を集約させた方がいいのでは？***
  > それでは、どんな挙動になってほしいのかを考えてみましょう。ユーザがフォームを変更するたびに、ユーザ入力を反映するように state を更新したいですね。コンポーネントの state を更新できるのは自分自身だけであるべきなので、FilterableProductTable は SearchBar にコールバックを渡しておいて、state を更新したいときに実行してもらうようにします。入力のたびに呼び出される onChange イベントを利用するとよいでしょう。このコールバックを実行された FilterableProductTable は、setState() を呼び出し、その結果としてアプリが更新されます。 https://ja.reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow
- [ ] storage: https://medium.com/mesan-digital/tutorial-react-native-redux-with-crud-operations-cdb449538886

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
