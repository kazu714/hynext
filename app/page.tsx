import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const blogTopics = [
  { src: '/home-blog-topic/田舎の味方.png', text: "田舎の味方" },
  { src: '/home-blog-topic/税理士.png', text: "税理士" },
  { src: '/home-blog-topic/私の日常.png', text: "私の日常" },
  { src: '/home-blog-topic/不動産と出店地.png', text: "不動産と出店地" },
];

export default function Page() {
  return (
    <div className="container mt-3 ps-5 pe-5">
      {/* ブログ------------------------------------------- */}
      <div className="" >
        <h2>ブログ</h2>
        <h6 className='mt-3'>トピックス</h6>
        <div className="d-flex justify-content-around bd-highlight">
          {blogTopics.map((topic) => {
            return (
              <div className="ms-1 me-1">
                <Image alt="" src={topic.src} width={200} height={100} />
                <p className='text-center'>田舎の味方</p>
              </div>
            )
          })}
        </div>     

        <h6 className='mt-3'>ランキング</h6>
        <div className="d-flex justify-content-around">
          <div className="w-30 border ms-2 me-2 pt-3">
            <h5 className="text-center mb-3">「総合」の人気ブログ</h5>
            <div className="border-bottom mb-3"></div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <div>
                <p className=''>小娘を太らせたい</p>
                <p className='small text-muted'>小麦粉クラブ</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <div>
                <p>小娘を太らせたい</p>
                <p className='small text-muted'>小麦粉クラブ</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
          </div>
          <div className="w-30 border ms-2 me-2 p-3">
            <h5 className="text-center mb-3">「総合」の人気ブログ</h5>
            <div className="border-bottom mb-3"></div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
          </div>
          <div className="w-30 border ms-2 me-2 p-3">
            <h5 className="text-center mb-3">「総合」の人気ブログ</h5>
            <div className="border-bottom mb-3"></div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <div><Image src="/home-blog-topic/不動産と出店地.png" width={100} height={50} alt=''/></div>
              <p>小娘を太らせたい</p>
            </div>
          </div>
        </div>
      </div>      
      <div className="border-bottom mt-5"></div>

      {/* コミュニティー------------------------------------------- */}
      <div className="mt-5">
        <h2>コミュニティ</h2>
        <div className='d-flex justify-content-around mt-3'>
          <div className='w-45 d-flex rounded-pill border p-2' >
            <Image className="rounded-circle" src="/home-comunity/副業.png" width={100} height={100} alt=''/>
            <div>
              <p  className='mb-0 fs-3'>副業何でも宣伝OK</p>
              <p className='small mb-0 '>副業何でも宣伝大丈夫です！！！</p>
              <p className='small text-muted'>メンバー：124　・　1時間前</p>
            </div>
          </div>
          <div className='w-45 d-flex rounded-pill border p-2' >
            <Image className="rounded-circle" src="/home-comunity/副業.png" width={100} height={100} alt=''/>
            <div>
              <p  className='mb-0 fs-3'>副業何でも宣伝OK</p>
              <p className='small mb-0 '>副業何でも宣伝大丈夫です！！！</p>
              <p className='small text-muted'>メンバー：124　・　1時間前</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around mt-3'>
          <div className='w-45 d-flex rounded-pill border p-2' >
            <Image className="rounded-circle" src="/home-comunity/副業.png" width={100} height={100} alt=''/>
            <div>
              <p  className='mb-0 fs-3'>副業何でも宣伝OK</p>
              <p className='small mb-0 '>副業何でも宣伝大丈夫です！！！</p>
              <p className='small text-muted'>メンバー：124　・　1時間前</p>
            </div>
          </div>
          <div className='w-45 d-flex rounded-pill border p-2' >
            <Image className="rounded-circle" src="/home-comunity/副業.png" width={100} height={100} alt=''/>
            <div>
              <p  className='mb-0 fs-3'>副業何でも宣伝OK</p>
              <p className='small mb-0 '>副業何でも宣伝大丈夫です！！！</p>
              <p className='small text-muted'>メンバー：124　・　1時間前</p>
            </div>
          </div>
        </div>
      </div>



      <div>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
    </div>
  );
}
