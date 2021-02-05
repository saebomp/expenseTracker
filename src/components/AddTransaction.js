import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const [modal, setModal] = useState(false)

  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    if(text.length > 0 && amount.length > 0 ) {
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
    } else {
      setModal(true)
    }

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
        <button className="w-full mt-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-2 text-white hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-400">
          Add transaction
        </button>
      </form>
      {modal ?
        <div className="position: absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 w-6/12 rounded shadow-lg p-8 text-center">
          <div>Please enter a valid value</div>
          <button 
            className="position: absolute top-2 right-4 z-10 cursor-pointer text-2xl"
            onClick={() => setModal(false)}
          >x
          </button>
        </div>
        : null
        }
    </>
  )
}