import React from 'react'

const MainContentHeader = ({user}) => {
  return (
    <div className='main-content-header-wrapper'>
        <div className='main-main-content-header flex items-center justify-between w-full'>
            <div className='main-content-header-hi'>
                <p className='text-4xl'>Welcome back, {user}</p>
            </div>
            <div className='main-content-header-invite flex items-center gap-5'>
                {/* <div className='invite-user-avatar'>
                    <img src='#' />
                </div> */}
                <button className='flex gap-2 bg-transparent border-1 pt-2 pb-2 pl-4 pr-4 border-[#FF5B5B] rounded-xl cursor-pointer' type='button'>
                    <span><i className="fa-solid fa-plus text-[#FF5B5B]"></i></span>
                    <p className='text-[#FF5B5B]'>Invite</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MainContentHeader