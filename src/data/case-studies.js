import spellCover from '../assets/images/spell-cover.webp';
import spellHero from '../assets/images/spell-case-study/spell-hero.gif';
import spellLogo from '../assets/images/spell-case-study/spell-circle-dark.png';
import spellScreens from '../assets/images/spell-case-study/spell-screens.webp';
import spellSitemap from '../assets/images/spell-case-study/spell-sitemap.webp';
import spellStyling from '../assets/images/spell-case-study/spell-styling.webp';
import spellEditions from '../assets/images/spell-case-study/spell-editions.webp';
import reusablePatterns from '../assets/images/spell-case-study/reusable-patterns.webp';
import dataDrivenModel from '../assets/images/spell-case-study/data-driven-model.webp';
import movementInteraction from '../assets/images/spell-case-study/editions.gif';
import azaria from '../assets/images/spell-case-study/azaria-spread.webp';
import ingrid from '../assets/images/spell-case-study/ingrid-spread.webp';
import iz from '../assets/images/spell-case-study/iz-spread.webp';
import jadiss from '../assets/images/spell-case-study/jadiss-spread.webp';
import mecca from '../assets/images/spell-case-study/mecca-spread.webp';
import poetry from '../assets/images/spell-case-study/poetry-spread.webp';
import shreya from '../assets/images/spell-case-study/shreya-spread.webp';
import sanai from '../assets/images/spell-case-study/sanai-spread.webp';
import xander from '../assets/images/spell-case-study/xander-spread.webp';

import intealthCover from '../assets/images/'
import intealthHero from '../assets/images/intealth-case-study/intealth-hero.gif'
import intealthLogo from '../assets/images/intealth-case-study/intealth-circle-dark.webp';

import petesCover from '../assets/images/petes-cover.webp';
import petesLogo from '../assets/images/petes-case-study/petes-circle-dark.webp';
import soupCover from '../assets/images/soup-cover.webp';
import weckerlysCover from '../assets/images/weckerlys-cover.webp';

export const caseStudies = [
  {
    slug: 'spell-magazine',
    title: 'Spell Magazine',
    role: 'UX Design & Co-Creative Direction',
    category: 'Professional',
    coverImage: spellCover,
    skills: ['figma', 'javascript', 'github', 'react', 'typescript', 'adobe'],
    logo: spellLogo,
    heroImage: spellHero,
    introImage: spellEditions,
    blocks: [
      { type: 'section-title', text: 'Introduction' },
      {
        type: 'body',
        text: [
          'As Co-Creative Director, UX Designer, and Developer for SPELL Magazine, I work to build and maintain a website supporting Philadelphia’s student arts community while also co-leading creative direction across web, print, and community initiatives.',
          'SPELL Magazine was founded to amplify student creativity and connect Philadelphia’s arts community, publishing curated editions of student artwork, writing, and photography twice a year.',
        ],
      },
      { type: 'section-title', text: 'UX/UI & Web Development' },
      { type: 'button', text: 'Go to Website', href: 'https://spellmag.com', external: true },
      { type: 'photo', src: spellScreens, alt: 'SPELL Magazine website screens on laptop and mobile devices' },
      {
        type: 'body',
        text: [
          "The site needs to support two distinct user groups with different needs: readers browsing for content, and contributors submitting work. It also needs to remain usable in non-ideal states, such as a closed submission window or a browser rendering issue, rather than breaking down whenever conditions aren't perfect.",
        ],
      },
      {
        type: 'expansion-cards',
        cards: [
          {
            image: spellSitemap,
            alt: 'Information architecture diagram',
            title: 'Information Architecture',
            preview: 'A five-route structure gives readers and contributors direct paths.',
            expandedContent: [
              { type: 'body', text: "The site is built around five core routes, Home, Read, Submit, About, and Support, plus one reader page that serves every edition. Home works as a hub, with every top-level page one click away. The deepest path, from Home to Read to the edition gallery to a full edition, takes only a couple of clicks. Readers and contributors each get a direct route instead of sharing one crowded menu. The sitemap also plans for the in-between states: Submit resolves to either an open form or a closed notice that sends people back to Read, so no one hits a dead end. Destinations outside the site, like the flipbook, print order form, LinkedIn, and Venmo, are mapped as exits, not pages. On mobile, navigation is its own pattern: a hamburger opens a full-screen layer, exposes its state through aria-expanded, and closes when a route is selected." },
            ],
          },
          {
            image: reusablePatterns,
            alt: 'Reusable component patterns',
            title: 'Reusable Patterns',
            preview: 'A small set of shared components keeps the site consistent as it grows.',
            expandedContent: [
              { type: 'body', text: ["The site is built from a small set of reusable React components and shared CSS patterns. Header and Footer provide consistent structure and navigation on every page, and NewsletterForm gives readers one place to stay connected. SplitContactLayout is the most flexible piece. It combines an image, editorial copy, a call to action, and the newsletter form, and it's reused across the Submit page, the Support page, and parts of Home. On desktop it's a split screen, and on mobile it stacks. Underneath, shared CSS defines the visual language: type styles, button variants, image hover effects, drop shadows, dark sections, responsive spacing, and scroll reveal. New pages inherit these patterns instead of rebuilding them."] },
            ],
          },
          {
            image: dataDrivenModel,
            alt: 'Data-driven edition model',
            title: 'Data-Driven Edition Model',
            preview: 'Adding a new edition means adding one entry, not building a page.',
            expandedContent: [
              { type: 'body', text: "Every edition, whether a full magazine or a one-off event like our zine workshop, is defined by the same data structure instead of its own hardcoded page. Print availability, order links, and disclaimers are optional fields, so the interface adapts on its own: a print call to action appears only where print exists, and a disclaimer only where one applies. One reader page serves every edition through a lookup by ID, and an unknown ID redirects to the archive instead of breaking. Moving new editions into print required only a new entry marked print-available, with no changes to the site itself." },
            ],
          },
          {
            image: movementInteraction,
            alt: 'flipping covers',
            title: 'Movement & Interaction',
            preview: 'Tactile motion makes the site feel like handling a physical magazine.',
            expandedContent: [
              { type: 'body', text: "Motion across the site is meant to make the experience feel closer to handling a physical magazine. On the homepage, a scrolling announcement banner and a slow loop of interior spreads give readers a reason to explore before opening an edition. In the archive, each card turns from its front cover to its back on hover, like flipping over a printed copy. Sections ease into place on scroll, driven by one shared observer instead of duplicated animation code. Buttons, links, and images share the same small shifts in scale, color, and shadow, applied to keyboard focus as well as hover and reduced on touch. " },
            ],
          },
        ],
      },
      { type: 'section-title', text: 'Visual Identity' },
      {
        type: 'body',
        text: [
          "Working with my Co-Creative Director, Drew Malizia, I helped establish a brand system built to feel bold and accessible while remaining professional. Drew leads logo design and social media presence; I lead the website's design, development, and maintenance. Together, we collaborate on spreads, style sheets, and overall creative direction to keep the brand cohesive across every touchpoint.",
          "A dark, newspaper-inspired tone anchors text and backgrounds for readability, with a vibrant pink-red used sparingly to direct attention to key actions such as 'Read Digitally' or 'Order Print.' Blue tones provide contrast without competing with the pink-red, and a soft off-white keeps longer reading sessions comfortable. Bold headings establish hierarchy, italic subheadings add character without reducing scannability, and a versatile sans-serif carries body text for smooth reading across devices. Editorial color palettes shift each edition to reflect that season's mood, while body text styling stays consistent so the reading experience doesn't reset for returning users."
        ],
      },
      { type: 'photo', src: spellStyling, alt: 'SPELL Magazine visual identity and color system' },
      { type: 'section-title', text: 'Editorial Design' },
      {
        type: 'body',
        text: [
          "Once a submission moves from the form into a spread, the work shifts from UX and development to editorial design, an equally central part of my role. For each spread, Drew and I balance typography, layout, and imagery to showcase the artwork while keeping the edition cohesive, with layouts that flex across photography, illustration, poetry, and mixed media.",
          "Each spread goes through a review loop with the artist. We send the designed spread for feedback on how their work is framed and whether the layout reflects their intent, then revise and repeat until the artist feels accurately represented.",
          "Each edition features Philadelphia student artists across all disciplines, with no thematic restrictions, and our interview team gathers their stories to add context to the work. Between editions, Drew and I refine our layouts based on what worked, particularly around pacing and the balance of text to imagery."
        ],
      },
      {
        type: 'grid',
        rows: 3,
        columns: 3,
        photos: [
          { src: azaria, alt: 'Azaria Van Der Stok spread' },
          { src: ingrid, alt: 'Ingrid Laurison spread' },
          { src: iz, alt: 'Iz Schrader spread' },
          { src: jadiss, alt: 'Jadiss Chea-Nguyen spread' },
          { src: mecca, alt: 'Mecca Jacobs spread' },
          { src: poetry, alt: 'Poetry spread' },
          { src: shreya, alt: 'Shreya Shah spread' },
          { src: sanai, alt: 'Sanai spread' },
          { src: xander, alt: 'Xander spread' },
        ],
      },
      { type: 'section-title', text: 'Result' },
      {
        type: 'body',
        text: "The result is a website that treats reading and submitting as equally important user journeys, handles its own in-between states without dead ends, and scales cleanly as new editions are added, including our fourth edition, the second available in print alongside digital. Because every spread also goes through direct feedback with the artist behind it, each edition reflects not only our design vision but the intent of the people whose work it's built around.",
      },
    ],
  },
  {
    slug: 'intealth',
    title: "Intealth",
    role: 'Full Stack Development & UX Design',
    category: 'Professional',
    coverImage: intealthCover,
    skills: ['figma', 'react', 'javascript', 'github', 'graphql', 'css', 'graphql'],
    logo: intealthLogo,
    heroImage: intealthHero,
    blocks: [
      { type: 'section-title', text: 'Introduction' },
      {
        type: 'body',
        text: [
          "As part of Intealth's Modern Apps Team, I worked across UX design and full stack development to build and improve web applications for international medical graduates (IMGs), healthcare institutions, and internal case workers. Intealth is a nonprofit that supports international healthcare professionals and the institutions involved in their education, training, certification, and credentialing, and its digital services give IMGs the resources and processes they need while supporting the organizations that work with them worldwide.",
          "During my co-op, I contributed to several projects within the Modern Apps ecosystem, including EFDO, CVHP/AHP, and WDOMS. My work spanned interface design, front-end development, component documentation, and design-to-development workflows, using Figma, React, TypeScript, GraphQL, Storybook, AI agents, and DESIGN.md.",
          "I followed an iterative process between design and development: translating requirements into designs, considering reusable patterns and component behavior, and then bringing those designs into the application. Working directly in the codebase let me identify technical constraints early and refine designs based on how the product was actually built.",
        ],
      },
    ],
  },
  {
    slug: 'petes-little-lunchbox',
    title: "Pete's Little Lunchbox",
    role: 'UX Design & Full Stack Development',
    category: 'Class Project',
    coverImage: petesCover,
    skills: ['figma', 'react', 'javascript', 'github', 'php', 'html', 'css', 'graphql'],
    logo: petesLogo,
    heroImage: petesCover,
    introImage: spellEditions,
    blocks: [{ type: 'section-title', text: 'Case study coming soon' }],
  },
  {
    slug: 'soup-phl',
    title: 'Soup PHL',
    role: 'UX & UI Design',
    category: 'Professional',
    coverImage: soupCover,
    skills: ['framer', 'adobe'],
    logo: spellLogo,
    heroImage: spellCover,
    introImage: spellEditions,
    blocks: [{ type: 'section-title', text: 'Case study coming soon' }],
  },
  {
    slug: 'weckerlys-ice-cream',
    title: "Weckerly's Ice Cream",
    role: 'UX Strategy & Marketing',
    category: 'Professional',
    coverImage: weckerlysCover,
    skills: ['figma', 'react', 'javascript', 'github', 'adobe', 'css', 'google'],
    logo: spellLogo,
    heroImage: spellCover,
    introImage: spellEditions,
    blocks: [{ type: 'section-title', text: 'Case study coming soon' }],
  },
];
