---
title: React Hooksメモ
date: 2020-03-11T11:27:11+09:00
description: React Hooksについての自分用メモ、Functional Componentを利用する際に必須と言える機能です。
slug: react-hook
tags:
  - フロントエンド
  - React
keywords: JavaScript, TypeScript, フロントエンド, React
---

# React Hooks

React に搭載されている関数コンポーネントを強力なものに変えることができる React Hooks についてのメモ

クラスコンポーネントでは、かなり意識してコーディングをしていないと、処理が分散してしまうため、コードを触りにくくしてしまう点が存在した。

Hooks では、一つの機能につき、一つの Hooks で完結できるように作られているため、追加や修正が入ったときも、コードごとのロールを理解しやすい。

## Hooks の種類

Hooks には様々な種類が用意されているので、主要な Hooks をメモしておく。

### useState

useState フックは、 State とそれを更新する関数を返す Hooks

```tsx:title=サンプル
const [state, setState] = useState(initialState)
```

初回のレンダー時、 state に initialState の値が入る。

state の値を更新したい時は、 setState を用いて値をセットする。

```tsx:title=サンプル
setState(newState)
```

これで、state の値が newState の値に更新される。

```tsx:title=サンプル
const Counter: React.FC<props> = initialState => {
  const [count, setCount] = useState(initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}
```

### useEffect

副作用を持つ処理を書く Hooks

useEffect は、レンダーの結果が反映された後に実行される。

```tsx:title=サンプル
useEffect(didUpdate)
```

useEffect では条件付き副作用を処理したい際には、useEffect の第二引数を用いる。
引数には配列を持たせる。

この配列の中身が更新された場合は、もう一度 useEffect 内の処理が実行される。

第二引数が空の配列だった場合、初回レンダーの時のみ処理が実行される。またこの時も例外なく、レンダーの結果が反映された後に実行
される。

```tsx:title=サンプル
useEffect(() => {
  const subscription = props.source.subscribe()
  return () => {
    subscription.unsubscribe()
  }
}, [props.source])
```

### useContext

React.createContext の戻り値を受け取る Hooks

MyContext.Provider が更新された場合に、このフックはその MyContext に渡された値を使って、再度レンダーを発生させる。

```tsx:title=サンプル
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
}

const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

const Toolbar: React.FC = props => {
  return (
    <>
      <ThemedButton />
    </>
  )
}

const ThemedButton: React.FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  )
}
```

## Hooks を使う際の注意点

Hooks を利用する際は、場合によって実行される Hooks の順番が入れ替わるようなことがあってはならないことです。
