import React from 'react'

const LikeButton = () => {
  return (
    <button className=" ">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="like-button"
                    className="duration-200 focus:scale-105"
                  >
                    <circle
                      className="duration-300 cursor-pointer"
                      cx="24.5"
                      cy="24.5"
                      r="23.5"
                      fill="#D9D9D9"
                      stroke="white"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
                      stroke="white"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
  )
}

export default LikeButton