'use client'

import Link from "next/link";

export default function NewSideBar({ headings }: {headings:any}) {
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] sticky top-10 overflow-y-auto rounded-lg px-4">
    <div className="flex flex-col mt-4">
      <nav>
        <ul>
          {headings?.map((heading:any, idx:number) => (
            <li
              key={idx}
              className="my-2 text-[14px] capitalize cursor-pointer hover:bg-gray-700 rounded-md px-2 py-1 list-none"
            >
              <Link href={`#${heading.slug}`} className="block text-white md:text-white tracking-normal leading-normal">
                - {heading.slug}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
  );
}
