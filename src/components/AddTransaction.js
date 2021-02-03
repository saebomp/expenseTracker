import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      //random id 만들기
      id: Math.floor(Math.random()*100000000),
      text:text,
      amount: +amount 
      // +amount : string을 number로 바꿔줌
    }
    addTransaction(newTransaction)
    setText('')
    setAmount('')
    //addTransaction 를 call 하고 newTransaction를 pass해줌
  }

  return (
    <>
      <h3 className="leading-6 text-lg text-black mt-12 mb-4">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor='text' className="block">Text</label>
          <input 
            type="text" 
            value={text} 
            className="w-full p-2 placeholder-gray-400 border border-gray-200 focus:border-gray-900"
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor='amount' className="block mt-5">
            Amount <span className="text-sm">(negative : expense, positive : income)</span>
          </label>
          <input
            type="number"
            value={amount}
            className="w-full p-2 placeholder-gray-400 border border-gray-200 focus:border-gray-900"
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
        </div>
        <button className="w-full mt-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-2 text-white">Add transaction</button>
      </form>
    </>
  )
}