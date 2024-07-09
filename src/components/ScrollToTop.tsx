'use client'
import * as React from 'react'
import { Button } from '@components/ui/button';
export default function ScrollToTop() {
  const handleScrollToTop = () => {
    console.log("hello")
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="flex justify-end">
        <Button
          onClick={() => handleScrollToTop()}
          className=''
        >
          <img
            src="/warup.png"
            alt="scroll"
            className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4"
          />
        </Button>
      </div>
    </>
  )
}