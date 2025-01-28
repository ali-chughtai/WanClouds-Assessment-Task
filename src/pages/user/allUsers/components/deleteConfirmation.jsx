import React from 'react'

function DeleteConfirmationMessage ({heading, message, functionPassed}){
return(
    <div className='flex flex-col items-center justify-center gap-8 font-kanit'>
        <h1 className='text-2xl text-center  '>Confirm {heading}</h1>
        <p>{message}</p>
        <div className='flex justify-between gap-4'>
            <button className='bg-green-700 px-8 py-2 rounded text-lg text-white hover:bg-green-800' onClick={()=>{functionPassed(true)}} >{heading}</button>
            <button className='bg-red-700 px-8 py-2 rounded text-lg text-white hover:bg-red-800' onClick={()=>{functionPassed(false)}}>Cancel</button>

        </div>
    </div>
)
}

export default DeleteConfirmationMessage;