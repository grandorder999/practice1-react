import React from "react";
import { ChangeEvent, useState, FC } from "react";
import "../style.css"; //CSSはパスだけ記載する

export const App: FC = () => {
  // テキストボックスstate
  const [text, setText] = useState<string>("");
  // メモ一覧state
  const [memoList, setMemoList] = useState<Array<string>>([]);
  // 入力した値の紐付け
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  //メモを追加するメソッド
  const onClickAdd = () => {
    const newMemoList = [...memoList];
    newMemoList.push(text);
    setMemoList(newMemoList);
    setText("");
  };
  // メモを削除するメソッド(引数は添え字)
  const onClickDelete = (index: number) => {
    const newMemoList = [...memoList];
    newMemoList.splice(index, 1);
    setMemoList(newMemoList);
  };
  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>
        追加
      </button>
      <div className="container">
        <p>メモ一覧</p>
        <ul>
          {memoList.map((memo, index) => (
            <li key={memo}>
              <span className="memo">{memo}</span>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
