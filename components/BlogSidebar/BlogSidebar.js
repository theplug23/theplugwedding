import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/images/THEPLUG-WEGGING_logo.png'
import { useEffect ,useState } from 'react';
import axios from 'axios';

const BlogSidebar = (props) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")

    const SubmitHandler = (e) =>{
       e.preventDefault()
        const searchPosts= posts.filter(post => (post.title.includes(search) || post.text.includes(search)))
        console.log(searchPosts)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
       .then(res=> setPosts(res.data))
       .catch(err =>console.log(err))
    }, [search])

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
            <div className="widget about-widget">
                 <div className="img-holder">
                    <Image src={logo} alt=""/>
                </div>
                <h4>THEPLUG Weeding</h4>
                <p>THEPLUG Hochzeitsteam verewigt den schönsten Tag in Ihrem Leben</p>
                <div className="social">
                    <ul className="clearfix">
                        <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                        <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA"><i className="fi flaticon-youtube"></i></Link></li>
                        <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="fi flaticon-instagram-1"></i></Link></li>
                        <li><Link onClick={ClickHandler} target={'_blank'} href="https://wa.me/4915752069252"><i className="fa fa-whatsapp"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="widget search-widget">
                <form onSubmit={SubmitHandler}>
                    <div>
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control" placeholder="Search Post.." required/>
                        <button type="submit"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
                {/* <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Services.slice(0,6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div> */}
                {/* <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0,3).map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                {/* <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,3).map((project, pitem) => (
                            <li key={pitem}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pimg1} alt="" /></Link></li>
                        ))}
                    </ul>
                </div> */}
                {/* <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">photography</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">wedding</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">events</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">creative</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">Solution</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">collection</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">Idea</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Photography">bride & groom</Link></li>
                    </ul>
                </div> */}
                <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You !</h2>
                        <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link onClick={ClickHandler} href="/Kontakt">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
