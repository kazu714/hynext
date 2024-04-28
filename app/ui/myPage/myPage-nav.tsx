'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function MyPageNav(){
    const pathname = usePathname();
    return(
        <ul className="nav nav-tabs ps-3">
          <li className="nav-item"><Link className={clsx("nav-link", {"active":pathname === "/myPage/about"})} href="/myPage/about">会社概要</Link></li>
          <li className="nav-item"><Link className={clsx("nav-link", {"active":pathname === "/myPage/blog"})} href="/myPage/blog">記事</Link></li>
          <li className="nav-item"><Link className={clsx("nav-link", {"active":pathname === "/myPage/comunity"})} href="/myPage/comunity">コミュニティ</Link></li>
        </ul>        
    )
}