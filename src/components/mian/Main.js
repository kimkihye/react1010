import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import './banner.css'

function Main() {
  return (
   <>
      <section id="main" >
        <video src={process.env.PUBLIC_URL + '/img/stream_-_91342 (1080p).mp4'}></video>
   {/* <video  muted autoplay loop>
      <source src="/img/stream_-_91342 (1080p).mp4" type="video/mp4"/>
   </video> */}
   <div className="inner">
    <h2>Nature Friendly</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit natus ea vero delectus nobis quaerat maxime ipsam pariatur iure 
        consequatur perspiciatis distinctio, minima aperiam illo non facilis tempore dolores? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur unde praesentium accusantium porro, repudiandae quibusdam pariatur quidem. Mollitia, quaerat quo quisquam facere quidem nulla odit eaque modi libero rerum cumque.
    </p>
    <Link to="#" className="btnOpen">View Gallery</Link>
</div>
</section>

{/* 2 brand */}
<section id="brand">
        <div className="inner">
            <h1>FEATURED</h1>
            <div className="wrap">
                <div className="panel">
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/1.jpg'} alt="바위 위에 있는 산속 주택의 사진" />
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/2.jpg'} alt="잔디밭 위에 있는 산속 주택의 사진" />
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/3.jpg'} alt="강물 주변에 있는 산속 주택의 사진" />
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/4.jpg'} alt="울창한 숲속 사이에 있는 흰색 주택의 사진" />
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/5.jpg'} alt="산속 사이에 있는 화이트 색상의 주택 사진" />
                    </article>
                    <article>
                        <img src={process.env.PUBLIC_URL + '/img/6.jpg'} alt="수영장 옆에 위치한 주택의 사진" />
                    </article>
                </div>
            </div>
            <Link to="#;" className="prevs">
                <img src={process.env.PUBLIC_URL + '/img/btnPrev.png'} alt="흰색 불투명 색깔의 왼쪽을 가리키고 있는 화살표 모양 사진" />
            </Link>
            <Link to="#;" className="nexts">
                <img src={process.env.PUBLIC_URL + '/img/btnNext.png'} alt="흰색 불투명 색깔의 오른쪽을 가리키고 있는 화살표 모양 사진" />
            </Link>
        </div>
        <section className="natus">Nature</section>
    </section>

    {/* 3 slider */}
    <figure>
      <section id="slider">
        <ul>
            <li className="on">
                <h2>LivingRoom</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/거실.jpg'} alt="목재를 기반으로 지어진 주택의 내부 사진" />
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>Garden</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/마당.jpg'} alt="나무 한 그루가 놓여져 있는 마당을 감싸고 있는 흰색 주탁의 사진" />
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>StudyRoom</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/공부방.jpg'} alt="목재를 기반으로 지어진 주택 내부 창으로 햇빛이 들어오고 있는 사진" />
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>Kitchen</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/주방.jpg'} alt="큰 창이 뚫려 있는 주방 내부터 햇빛이 들어오고 있는 사진" />
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>ReadingRoom</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/독서.jpg'} alt="목재를 기반으로 지어진 주택 내부에 큰 책장과 해먹이 있는 사진" />
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>Bedroom</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/침실.jpg'} alt="햇빛이 들어오는 목재를 기반으로 지어진 침실 사진" /> 
                </div>
                <Link to="#"><span>VIEW DETAIL</span></Link>
            </li>
            <li>
                <h2>Washroom</h2>
                <div className="inner">
                    <img src={process.env.PUBLIC_URL + '/img/화장실.jpg'} alt="모던한 느낌이 나는 화장실 사진" />
                </div>
                <Link to=""><span>VIEW DETAIL</span></Link>
            </li>
        </ul>
    </section>
    <nav className="btns">
        <div className="prev">
            <span></span>
        </div>
        <div className="next">
            <span></span>
        </div>
    </nav>
    <aside className="pop">
        <h2>Material</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Necessitatibus dolorem hic, eos, sunt ea sint tempore illo ipsum ipsam a ab quasi natus 
            voluptate veritatis repellendus animi vitae tempora quis.</p>
            <span className="close">close</span>
    </aside>  
    </figure>

    {/* 4 banner */}
    <section id="banner">
        <ul className="panel">
            <li className="on"><h2>Ocean</h2></li>
            <li><h2>Forest</h2></li>
            <li><h2>Cliff</h2></li>
        </ul>
        <ul className="btns">
            <li className="on"></li>
            <li></li>
            <li></li>
        </ul>
        <div className="bar"></div>
    </section>

    {/* layout */}
    <section id="layout">
        <div className="inner">
            <h1>Sharing</h1>
            <div className="lay">
                <article>
                    <div className="pic1">
                        <img src={process.env.PUBLIC_URL + '/img/lay.jpg'} alt="넓은 초원위에 지어져 있는 주택 사진" />
                        <Link to="https://youtu.be/GaMGtdVYu1I?si=FS4NJvTLRd5nUsil">
                            {/* <i className="fa-brands fa-youtube"></i>    */}
                        </Link>
                    </div>
                    <h2>Family Home</h2>
                    <p>Click to go YouTube!!</p>
                </article>
                <article>
                    <div className="pic1">
                        <img src={process.env.PUBLIC_URL + '/img/lay2.jpg'} alt="흰색의 반달모양의 소파 사진" />
                        <Link to="https://youtu.be/Q1xR-P4gjlA?si=wf0eKZWApzdRSmCf">
                            {/* <i class="fa-brands fa-youtube"></i>   */}
                        </Link>
                    </div>
                    <h2>White House</h2>
                    <p>Click to go YouTube!!</p>
                </article>
                <article>
                    <div className="pic1">
                        <img src={process.env.PUBLIC_URL + '/img/lay3.jpg'} alt="검은색 주택 앞에 있는 2개의 주황색 의자 사진" />    
                        <Link to="https://youtu.be/hnLNBT_PEwY?si=qZ9Vb2oF09BQ2Gmg">
                            {/* <i className="fa-brands fa-youtube"></i>  */}
                        </Link>
                    </div>
                    <h2>Black House</h2>
                    <p>Click to go YouTube!!</p>
                </article>
                <article>
                    <div className="pic1">
                        <img src={process.env.PUBLIC_URL + '/img/lay4.jpg'} alt="" />
                        <Link to="https://youtu.be/4BD5DP4f_uw?si=iXN97f2_1ZohbvCy">
                            {/* <i className="fa-brands fa-youtube"></i> */}
                        </Link>
                    </div>
                    <h2>House With Pool</h2>
                    <p>Click to go YouTube!!</p>
                </article>
            </div>
        </div>
    </section>
</>

  )
}

export default Main