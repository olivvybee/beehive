import { Link } from '@/components/Link';
import { InlineImage } from '@/components/InlineImage';

import styles from './page.module.css';
import { FEDI_URL, FEDI_USERNAME } from '@/constants';
import { Abbr } from '@/components/Abbr';

const Homepage = () => (
  <>
    <InlineImage
      src="/img/avatar.jpg"
      alt="A photo of Liv, who is white and has chin length pink and purple hair, a septum piercing, and a nose ring. She's wearing a purple dress covered in bees."
      imageWidth={128}
      imageHeight={128}
      imageClassName={styles.avatar}
      align="center">
      <p>
        Hi, I'm Liv, and welcome to my beehive! Around the internet, I'm known
        as olivvybee.
      </p>
      <p>
        I'm <a href="https://new.lgbtqia.wiki/wiki/Agender">agender</a> and my
        pronouns are{' '}
        <Abbr title='For example: "She updated her website", or "They updated their website"'>
          she/they
        </Abbr>
        .
      </p>
    </InlineImage>
    <p>
      I'm a software engineer from the south east of the UK. I mostly focus on
      frontend development now, but I started out as a full stack developer.
    </p>
    <p>
      I used to be a full stack engineer at the Lego Group, specifically working
      on the My Account section of <a href="https://lego.com">lego.com</a>. If
      you saw some changes to the order history, order tracking, or wishlist
      pages in 2022 or 2023, that might have been me!
    </p>
    <p>
      Most of my programming is done in <a href="https://reactjs.org">React</a>{' '}
      and <a href="https://www.typescriptlang.org">Typescript</a>, both at work
      and at home. I'm an aspiring iOS developer too, although I've not made
      much progress yet - but watch this space! Take a look at the{' '}
      <Link href="/code">code page</Link> to see what I've been working on.
    </p>
    <p>
      Away from the code, I like to cross stitch, 3D print, bake, and play board
      and video games. Some things I've made are on the{' '}
      <Link href="/crafts">crafts page</Link>.
    </p>
    <p>
      I also enjoy riding roller coasters and trains. I track data about these
      on the <Link href="/coasters">coasters page</Link> and the{' '}
      <Link href="/trains">trains page</Link>.
    </p>
    <p>
      The best place to find me to see what I'm up to or have a chat is on the
      fediverse, where I'm{' '}
      <a href={FEDI_URL} rel="me">
        {FEDI_USERNAME}
      </a>
      . Other, more specific places are listed on the{' '}
      <Link href="/links">links page</Link>.
    </p>
  </>
);

export default Homepage;
