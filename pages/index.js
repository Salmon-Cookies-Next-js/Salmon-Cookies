import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image 
        src="/../public/family.jpeg" 
        alt="a family of four at a table with milk and cookies"
        width={(500)}
        height={(200)}
        />
        <section>
          <h2 className={styles.title}>
            Hours
          </h2>
          <p>All locations are open from 9am to 6pm</p>
        </section>
        <div className={styles.container}>
          <section>
            <h2 className={styles.title}>Locations</h2>
              <ul className={styles.ul}> 
                <li> 416 Sid Snyder Avenue SW, Olympia, Washington 98504</li>
                <li> 1-5-2 Higashi Shimbashi, Minato-ku, Tokyo</li>
                <li> Al Thanyah 1, Hadaeq Mohammed Bin Rashid, Dubai</li>
                <li> 22, 24 Basil St, Paris</li>
                <li> Jr. Cayetano Heredia 135, Jesus Maria, Lima, Peru</li> 
              </ul>
          </section>
        </div>
        <div>
          <section>
            <Image 
            src="/../public/shirt.jpeg" 
            alt="white shirt with two fish on it"
            width={(500)}
            height={(200)}
            />
            <Image 
            src="/../public/frosted-cookie.jpeg" 
            alt="red and green frosted salmon cookie with"
            width={(500)}
            height={(200)}
            />
            <Image 
            src="/../public/fish.jpeg" 
            alt="salmon shaped cookie cutter"
            width={(500)}
            height={(200)}
            />
          </section>
        </div>
            <Image 
            src="/../public/cutter.jpeg" 
            alt="a school of 4 animated salmons"
            width={(500)}
            height={(200)}
            />
          <article>
            <section>
              <h3>A little about us!</h3>
              <p> Thank you so much for your interest in salmon cookies! I have been waiting so long to share this amazing recipe with all of you internationally! This journey began in 2007 when my husband Ken, myself, and our two children combined our love for fish and cookies together to create what is known as salmon cookies today. We source our dry ingredients from local farms across the world and fish for salmon on our own chartered boats. Every step in the process to building our fish cookie empire has had your enjoyment in mind! We have locations in Seattle, Tokyo, Dubai, Paris, and Lima .  
              </p>
            </section>
            {/* <a href="">Some Button</a> */}
          </article>
      </main>
      </div>
  )
}
