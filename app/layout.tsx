import '@/app/ui/global.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="d-flex justify-content-between w-75 center">
          <p className="header_title">事業プラットフォーム</p>
          <div className="btn-group me-3">
            <button type="button" className="btn btn-light dropdown-toggle mt-4 mb-4" data-bs-toggle="dropdown" aria-expanded="false">
              縄文株式会社
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="/myPage/about">My企業ページ</Link></li>
              <li><Link className="dropdown-item" href="#">設定</Link></li>
              <li><Link className="dropdown-item" href="#">ログアウト</Link></li>
            </ul>
          </div>
        </header>

        <div className="border-bottom"></div>

        <div className="d-flex justify-content-between w-75 center ">
          <nav className="nav flex-column border-end sticky">
            <Link className="text-dark nav-link text-center hover-gray mt-3" aria-current="page" href="/">ホーム</Link>
            <Link className="text-dark nav-link text-center hover-gray" aria-current="page" href="/blog">ブログ</Link>
            <Link className="text-dark nav-link text-center hover-gray" href="#">税理士に質問</Link>
            <Link className="text-dark nav-link text-center hover-gray" href="#">事業者に質問</Link>
            <Link className="text-dark nav-link text-center hover-gray" href="/news">ニュース</Link>
            <Link className="text-dark nav-link text-center hover-gray" href="/comunity">コミュニティ</Link>
            <Link className="text-dark nav-link text-center hover-gray" href="#">イベント・セミナー</Link>
          </nav>
          <main className="">
            {children}
          </main>
          <div className="right border-start">
            <div className="sticky">
              <div className="suggest">
                よく閲覧される記事
              </div>
              <div className="posts  mt-3" >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">タイトル</h5>
                    <p className="card-text">記事の内容の冒頭だけが表......</p>
                  </div>
                </div>
              </div>
              <div className="posts  mt-3" >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">タイトル</h5>
                    <p className="card-text">記事の内容の冒頭だけが表......</p>
                  </div>
                </div>
              </div>
              <div className="tag">
                業種のタグ
                <ul>
                  <li>小売り</li>
                  <li>不動産</li>
                  <li>IT・情報通信</li>
                </ul>
              </div>
              <div>
                広告
              </div>
            </div>
          </div>
        </div>


      </body>
    </html>
  );
}
