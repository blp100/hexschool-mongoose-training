"use client"

export default function AddPostButton({ className = "" }) {
  /* Add API Later */
  const clickHandler = () => {
    console.log("Go to Add ned post!")
  }

  return (
    <div
      className={`${className} cursor-pointer rounded-lg border-2 border-[#000400] bg-[#03438D] py-4 text-center text-white shadow-[-2px_2px_0px_#000400]`}
      onClick={clickHandler}
    >
      張貼動態
    </div>
  )
}
