import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Nav'
import { Link } from 'react-router-dom'
import { RuggedIcon } from '../../Components/Icons'
import Footer from '../../Components/Footer'


const About = () => {
  return (
    <motion.div
      className="relative overflow-sauto bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
    >
      <section className="shticky  h-[50dvh] md:h-[90dvh] w-[100dvw] flex flex-col bg-white pt-[70px]  md:pt-[50px] ">
        <h1 className="text-[3em] md:text-[4em] font-[600] font-crimson text-brand_yellow my-3 text-center">
          About
        </h1>

        <div className="relative w-full h-full flex items-center justify-center bg-light_green text-black">
          <img
            src="/assets/about-header.png"
            alt=""
            className="h-[90%] absolute bottom-0 left-[50%] translate-x-[-50%] "
          />

          <RuggedIcon className={`w-full max-w-[85dvw]`} />
        </div>
      </section>



      <section className="relative h-full md:h-[85dvh] w-[100dvw] flex flex-col bg-black ">
        <div className="w-full h-full flex flex-col md:flex-row bg-white text-black">
          <aside className="w-full md:w-[35%] bg-black h-full flex items-end justify-start">
            <img
              src="/assets/rugged-shoulder.png"
              alt=""
              // className="w-[82%] "
              className="w-full md:w-[80%] "
            />
          </aside>

          <aside className="w-full md:w-[65%] md:pl-[40px] h-full flex items-center justify-start font-nunito">
            <article className="flex flex-col gap-4 md:gap-10 py-6 md:py-0  px-[30px] md:pr-[100px] md:pl-0">
              <p className="text-[15px] leading-6">
                This is Ruggedman, one of Nigeria's most celebrated hip-hop
                artists. Born Michael Ugochukwu Stevens and being 4th in a line
                of five children was tough (talk about heights to attain to). In
                addition, moving to Lagos in his early years did come with its
                own challenges. But family has always been first for him. "My
                music is heavily influenced by some of the greatest hit-makers
                that ever lived. NWA (Dr Dre, Eazy E, Ice Cube, D.O.C, DjYella &
                Mc Ren), Public Enemy, 2pac, Jay Z, LL Cool, Mc Hammer, Chubb
                Rock, Wu Tang Clan, Queen Latifah, Snoop Dog, Nas, 50 Cent and
                Eminem top the list"
              </p>
              <p className="text-[15px] leading-6">
                Starting at about 11, he got hooked on musical TV shows like
                Soul Train and Top of The Pops. This was just the beginning of
                what was to become the journey of a lifetime.
              </p>
              <p className="text-[15px] font-bold -skew-x-6 leading-6">
                "Then my uncle Jonathan Okeke would come from America with VHS
                tapes of Yo!, MTV Raps with Ed Lover & Dr Dre., Rap City with
                Fab Five Freddie. I would spend hours watching them at his
                house. Then borrow like 5, return 3. Borrow another 6 tapes and
                return 2...lol!"
              </p>
              <p className="text-[15px] leading-6">
                From then, he was all about writing down rap lyrics and testing
                out his own skill at writing. Soon after, Ruggedman was crawling
                local studios and with the help of Djs, got to recording
                instrumental loops. And while he was influenced by some of the
                hip-hop greats, Rugged- man's music remains original.
              </p>
            </article>
          </aside>
        </div>
      </section>



      <section className="shticky z-10 about-more w-full h-[400px] font-nunito">
        <div className="h-full w-full px-3 bg-black/80 flex items-end md:items-center justify-center">
          <img src="/assets/about-shtick.png" alt="" className="w-full h-auto md:w-[unset] md:h-max md:h-fulll" />
        </div>
      </section>

      <section className="relative z-30 h-max md:h-[120dvh] w-[100dvw] flex flex-col pt-8  bg-white">
        <div className="w-full h-full flex flex-col-reverse md:flex-row bg-white text-black">
          <aside className="w-full md:w-[60%] pl-[30px] pr-[30px] md:pl-[60px] md:pr-0 py-4 md:py-0 h-full flex items-center justify-start font-nunito">
            <article className="flex flex-col gap-8 max-w-[5ssd00px] ">
              <p className="text-[15px] leading-6">
                It may have seemed a bit odd at the time, seeing as most other
                people showed up to make music of their own. For Rugged- man,
                not so much
              </p>
              <p className="text-[15px] font-bold -skew-x-6 leading-6">
                "I started trying to rap the lyrics I had writ- ten out to their
                beats. Then I started writing my own lyrics to the beats."
              </p>

              <p className="text-[15px] leading-6">
                Soon after, he was recording his own music, but not in a booth
                with pro equipment. Back then, a good old tape deck had to do.
                It may have been rudimentary, running a tape with a beat on one
                side and another with an empty tape, but did it work? Sure did.
              </p>
              <p className="text-[15px] font-bold -skew-x-6 leading-6">
                "I would put my face between both tape recorders and start
                rapping...catching both the beat and my voice onto the empty
                tape."
              </p>

              <p className="text-[15px] leading-6">
                Back on a roll, Ruggedman hit the studios again, scoring his own
                lines on tapes, straight from a mic. And then the real work
                began. He made the list of artists alongside Abounce recording
                music for "Diamond Ring", a Tade Ogidan Movie. Then he hit
                another roll on "A Campus Tale", a Hilda Dokubo movie, with
                Freestyle and Swave. Ace producer Paul Play Dairo and the late
                studio engineer Tony Tonero, were instrumental to this spot.
              </p>

              <p className="text-[15px] leading-6">
                Eventually, Ruggedman went on to record his first ever track
                with Paul Play Dairo, "What If", and a chance meeting with the
                late OJB Jezreel. With access to pro recordings studios, there
                was only so much standing in his way. And the rest...is history.
                If there was any doubt about his influence on Nigerian
                contemporary music, the numerous awards Ruggedman has received
                speak volumes. 20 years in the game and counting, Ruggedman is
                rolling strong. "The only thing wey go make them know where your
                music come from in the long run, na the fusion of grammar, your
                slang and your mother tongue". Ruggedman I passionate about
                human rights and continues to lend his voice to projects and
                causes that uphold the same.
              </p>
            </article>
          </aside>

          <aside className="w-full md:w-[40%] bg-white h-full flex items-end justify-end">
            <img src="/assets/rugged-bw.png" alt="" className=" w-full md:w-[90%] " />
          </aside>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

export default About